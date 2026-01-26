"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { signInPayloadType, signUpPayloadType } from "@/features/auth/types";

// লোডিং স্টেটকে আরও সুনির্দিষ্ট করার জন্য টাইপ
type AuthStatus = "idle" | "signing-in" | "signing-up";

export const useAuthHandlers = () => {
  const router = useRouter();
  const [status, setStatus] = useState<AuthStatus>("idle");

  // --- Sign In ---
  const signIn = async (data: signInPayloadType) => {
    setStatus("signing-in");
    try {
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Welcome back! Redirecting...");
            router.push("/dashboard");
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Invalid email or password");
          },
          onResponse: () => setStatus("idle"),
        },
      });
    } catch (error) {
      setStatus("idle");
      toast.error("Network error. Please try again.");
    }
  };

  // --- Sign Up ---
  const signUp = async (data: signUpPayloadType) => {
    setStatus("signing-up");
    try {
      await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Account created successfully!");
            router.push("/dashboard");
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Could not create account");
          },
          onResponse: () => setStatus("idle"),
        },
      });
    } catch (error) {
      setStatus("idle");
      toast.error("An unexpected error occurred");
    }
  };

  return {
    signIn,
    signUp,
    isSigningIn: status === "signing-in",
    isSigningUp: status === "signing-up",

  };
};
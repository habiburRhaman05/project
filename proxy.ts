import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { authClient } from "./lib/auth-client";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
console.log("sessionCookie: " , sessionCookie);
  
	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/profile"], 
};
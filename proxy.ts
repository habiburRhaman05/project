import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { authClient } from "./lib/auth-client";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
console.log("sessionCookie: " , sessionCookie);
   const session = await authClient.getSession()
console.log("session: ",session);

	// if (!sessionCookie) {
	// 	return NextResponse.redirect(new URL("/", request.url));
	// }

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], 
};
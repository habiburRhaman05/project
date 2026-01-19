import { NextRequest, NextResponse } from "next/server";
import { authServices } from "./services/auth/authService";
import { cookies } from "next/headers";

export async function proxy(request: NextRequest) {

	const userData = await authServices.getUserSession();
    const cookie = await cookies();
	console.log(cookie.toString());
	
	const pathName = request.url

	if (!userData) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}
	if(userData && pathName.includes("/sign-in") ||pathName.includes("/sign-up")){

		return NextResponse.redirect(new URL("/profile", request.url));


	}

	return NextResponse.next();
}


export const config = {
	matcher: ["/profile"], 
};
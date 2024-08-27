import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hasCookie } from "cookies-next";

export function middleware(request) {
    let isAuthenticated = false;

    // Check if is invited user
    if (hasCookie("guest", { cookies })) {
        isAuthenticated = true;
    }
    // Check if is connected
    if (hasCookie("connected", { cookies })) {
        isAuthenticated = true;
    }

    // Check if isAuthenticated
    if (!isAuthenticated) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}

// Permet d'acouter certaines adresses
export const config = {
    matcher: ["/"],
};

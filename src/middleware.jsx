import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hasCookie } from "cookies-next";

export function middleware(request) {
    let isAuthenticated = false;

    // Check if is invited user
    if (hasCookie("guest", { cookies })) {
        isAuthenticated = true;
    }
    if (!isAuthenticated) {
        // Check if is connected

        // Check if isAuthenticated
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

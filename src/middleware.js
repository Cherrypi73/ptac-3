import { NextResponse } from "next/server";
import Cookies from 'js-cookie'
Cookies.set('token','ceceeccwfwewe');
Cookies.remove('token');
export default function middleware(request) {
    const token = request.cookies.get('token');
    const urlLogin = new URL('/pages/login', request.url);

    if (!token) {
        if (request.nextUrl.pathname === '/pages/private') {
            return NextResponse.redirect(urlLogin);
          }
    }
    NextResponse.next();
};

export const config = {
    matcher: ["/", "/pages/private"]
};
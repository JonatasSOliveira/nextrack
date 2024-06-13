import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/auth'
import { PRIVATE_ROUTE_INITIAL_PATH } from './constants/route';

export async function middleware(req: NextRequest) {
    const session = await getSession()
    const isAuthenticated = session && session.expires > new Date()

    if (!isAuthenticated && req.nextUrl.pathname.startsWith(PRIVATE_ROUTE_INITIAL_PATH)) {
        const absoluteURL = new URL('/', req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}
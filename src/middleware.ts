import { NextRequest, NextResponse } from 'next/server'
import { getSession, logout } from './lib/auth'

export async function middleware(req: NextRequest) {
    const session = await getSession()
    const isAuthenticated = session && session.expires > new Date()

    if (!isAuthenticated && req.nextUrl.pathname.startsWith('/private')) {
        const absoluteURL = new URL('/', req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}
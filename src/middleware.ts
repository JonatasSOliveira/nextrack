import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/auth'
import { PRIVATE_ROUTE_INITIAL_PATH } from './constants/route';


function redirect(req: NextRequest): NextResponse<unknown> {
    const absoluteURL = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
}

export async function middleware(req: NextRequest) {
    const isPrivateRoute = req.nextUrl.pathname.startsWith(PRIVATE_ROUTE_INITIAL_PATH);
    if (!isPrivateRoute) {
        return NextResponse.next()
    }

    try {
        const session = await getSession()
        const isAuthenticated = session && session.expires > new Date()

        if (!isAuthenticated) {
            return redirect(req)
        }
    } catch (error) {
        return redirect(req)
    }
}
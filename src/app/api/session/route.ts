import { logout, setSession } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { user } = await req.json()
    if (!user) {
        return NextResponse.json({ message: 'User data is required' }, { status: 400 })
    }

    try {
        await setSession(user)
        return NextResponse.json({ message: 'Success' })
    } catch (error) {
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}

export async function DELETE() {
    try {
        await logout()
        return NextResponse.json({ message: 'Success' })
    } catch (error) {
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}
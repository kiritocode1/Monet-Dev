import { NextResponse } from 'next/server'

export const GET = async () => {

    return NextResponse.json({ data: 'yo' })
    // should return { data: 'yo'} on public routes
}
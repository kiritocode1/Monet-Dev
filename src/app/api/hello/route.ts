import { NextResponse } from 'next/server'

export const GET = async () => {

    return NextResponse.json({ data: "hello" })
    // should return { data: "hello" } on public routes
}
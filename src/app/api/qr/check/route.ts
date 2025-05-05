import { db } from '@/app/api/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const hash = searchParams.get('hash')

    if (!hash) return NextResponse.json({ error: 'No hash provided' }, { status: 400 })

    const qr = db.checkQR(hash)
    const now = Date.now()

    if (!qr || qr.createdAt + 60000 < now) {
        return NextResponse.json({ valid: false })
    }

    return NextResponse.json({
        valid: true,
        questions: ["Q1", "Q2", "Q3", "Q4", "Q5"] // change your questions hare. need to add randomness tho
    })
}
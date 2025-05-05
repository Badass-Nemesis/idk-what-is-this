import { db } from '@/app/api/db'

export async function GET() {
    const qr = db.createQR()
    return Response.json({
        url: `${process.env.BASE_URL}/view/${qr.hash}`,
        expires: qr.createdAt + 60000 // this is set to 1 min. I might have to make it a variable in env
    })
}
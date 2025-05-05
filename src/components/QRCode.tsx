'use client'

import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {
    const [qrData, setQrData] = useState<{ url: string; expires: number } | null>(null)
    const [timeLeft, setTimeLeft] = useState<number>(0)

    useEffect(() => {
        const fetchQR = async () => {
            const res = await fetch('/api/qr/generate')
            const data = await res.json()
            setQrData(data)
            // setTimeLeft(Math.floor((data.expires - Date.now()) / 1000))
            setTimeLeft(8);
            document.getElementById('qr-url')!.textContent = data.url
        }

        // this is the initial fetch    
        fetchQR()

        const interval = setInterval(fetchQR, 8000); // set to 8 secs for testing

        // this will update the timer state variable
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) return 0
                return prev - 1
            })
        }, 1000)

        return () => {
            clearInterval(interval)
            clearInterval(timer)
        }
    }, [])

    if (!qrData) return <div>Loading QR...</div>

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-white rounded-lg">
                <QRCode
                    value={qrData.url}
                    size={200}
                    level="H" // wtf is this
                />
            </div>
            <div className="text-center">
                <p className="text-lg font-medium">
                    Expires in: {timeLeft}s
                </p>
                {timeLeft <= 5 && (
                    <p className="text-sm text-yellow-600">
                        Refreshing soon...
                    </p>
                )}
            </div>
        </div>
    )
}
let qrCodes: {
    hash: string
    createdAt: number
    scanned: boolean
}[] = []

export const db = {
    createQR: () => {
        const newQR = {
            hash: Math.random().toString(36).substring(2, 10),
            createdAt: Date.now(),
            scanned: false
        }
        qrCodes.push(newQR)
        return newQR
    },
    checkQR: (hash: string) => {
        return qrCodes.find(qr => qr.hash === hash)
    },
    markAsScanned: (hash: string) => {
        const qr = qrCodes.find(qr => qr.hash === hash)
        if (qr) qr.scanned = true
    }
}
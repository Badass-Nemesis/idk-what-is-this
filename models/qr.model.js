const { db } = require('../config/database');

module.exports = {
    create: (qrData) => {
        const newQR = {
            ...qrData,
            createdAt: Date.now(),
            scanned: false
        };
        db.qrCodes.push(newQR);
        return newQR;
    },

    findByHash: (hash) => {
        return db.qrCodes.find(qr => qr.hash === hash);
    },

    markAsScanned: (hash) => {
        const qr = db.qrCodes.find(qr => qr.hash === hash);
        if (qr) qr.scanned = true;
        return qr;
    }
};
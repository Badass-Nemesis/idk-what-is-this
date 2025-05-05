const QRModel = require('../models/qr.model');
const UserModel = require('../models/user.model');
const { QR_VALIDITY_MS, BASE_URL } = require('../config/constants');

class QRService {
    static async generateNewQR(userId = 1) { // default to test user
        const hash = this.generateHash();
        const qr = await QRModel.create({
            hash,
            userId,
            expiresAt: Date.now() + QR_VALIDITY_MS
        });

        return {
            url: `${BASE_URL}/view/${hash}`,
            expires: qr.expiresAt
        };
    }

    static async validateQR(hash) {
        const qr = await QRModel.findByHash(hash);
        if (!qr || qr.expiresAt < Date.now()) return { valid: false };

        const questions = await UserModel.getRandomQuestions(qr.userId);
        return {
            valid: true,
            questions,
            userId: qr.userId
        };
    }

    static generateHash() {
        return Math.random().toString(36).substring(2, 10);
    }
}

module.exports = QRService;
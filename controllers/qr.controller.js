const QRService = require('../services/qr.service');

exports.generateQR = async (req, res) => {
    try {
        const qr = await QRService.generateNewQR();
        res.json(qr);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.validateQR = async (req, res) => {
    try {
        const isValid = await QRService.validateQR(req.params.hash);
        res.json({ valid: isValid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
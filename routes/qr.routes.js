const router = require('express').Router();
const {
    generateQR,
    validateQR
} = require('../controllers/qr.controller');

router.get('/generate', generateQR);
router.get('/validate/:hash', validateQR);

module.exports = router;
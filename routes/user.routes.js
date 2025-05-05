// this is a dummy file

const router = require('express').Router();
const {
    getUser,
    getUserQuestions
} = require('../controllers/user.controller');

router.get('/:userId', getUser);
router.get('/:userId/questions', getUserQuestions);

module.exports = router;
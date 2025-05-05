// this is a dummy file

const UserModel = require('../models/user.model');

exports.getUser = async (req, res) => {
    try {
        const user = await UserModel.getUserById(req.params.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json({
            id: user.id,
            username: user.username,
            points: user.points
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserQuestions = async (req, res) => {
    try {
        const questions = await UserModel.getRandomQuestions(req.params.userId);
        if (!questions) return res.status(404).json({ error: 'User not found' });

        res.json({ questions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
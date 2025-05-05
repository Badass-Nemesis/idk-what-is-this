// this is a dummy file

const { db } = require('../config/database');

module.exports = {
    getUserById: (userId) => {
        return db.users.find(user => user.id === Number(userId));
    },
    getRandomQuestions: (userId, count = 5) => {
        const user = db.users.find(user => user.id === Number(userId));
        if (!user) return null;

        // this is for shuffling and randomization
        return [...user.questions]
            .sort(() => 0.5 - Math.random())
            .slice(0, count);
    },
    addPoints: (userId, points) => {
        const user = db.users.find(user => user.id === Number(userId));
        if (user) {
            user.points += points;
            return user.points;
        }
        return null;
    }
};
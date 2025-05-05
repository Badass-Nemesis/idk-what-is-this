// using this in-memory database for testing
const db = {
    users: [
        {
            id: 1,
            username: 'testuser',
            points: 100,
            questions: [
                "What's your favorite color?",
                "Where were you born?",
                // ........add more qes, I dunno
            ]
        }
    ],
    qrCodes: []
};

module.exports = { db };
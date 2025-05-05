const express = require('express');
const cors = require('cors');
const qrRoutes = require('./routes/qr.routes');
const userRoutes = require('./routes/user.routes'); // dummy

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/qr', qrRoutes);
app.use('/api/users', userRoutes); // don't go here, it's a waste of time

module.exports = app;
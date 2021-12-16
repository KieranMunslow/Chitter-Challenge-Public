const http = require('http');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const addPeep = require('./routes/addpeep');
const register = require('./routes/register');
const login = require('./routes/login');
const cors = require('cors');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(cors());
app.use(express.json());

const main = async () => {
    console.log(`Connecting to DB @${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(err => console.log(err));

app.use(`/addPeep`, addPeep);
app.use('/login', login);
app.use('/register', register);
// app.get(`/`, (req, res) => res.send(`Hello World`));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
});
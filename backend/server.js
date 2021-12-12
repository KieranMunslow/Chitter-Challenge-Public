const http = require('http');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

const main = async () => {
    console.log(`Connecting to DB @${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(err => console.log(err));

app.get(`/`, (req, res) => res.send(`Hello World`));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
});
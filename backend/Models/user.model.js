const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        surname: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model(`User`, userSchema);
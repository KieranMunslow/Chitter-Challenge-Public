const mongoose = require('mongoose');

const peepSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        surname: { type: String, required: true }
    },
    username: { type: String, required: true },
    date: { type: Date, required: true },
    message: { type: String, required: true }
});

module.exports = mongoose.model(`Peep`, peepSchema);
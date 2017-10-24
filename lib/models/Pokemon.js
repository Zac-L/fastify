const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weakness: String
});

module.exports = mongoose.model('Pokemon', schema);
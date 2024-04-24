const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String, maxLength:600},
    image: {type: String, maxLength:225},
    videoId: {type: String, require: true},
    level: {type: String, maxLength:225},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
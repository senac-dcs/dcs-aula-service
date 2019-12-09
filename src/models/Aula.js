const mongoose = require('mongoose');

const AulaSchema = new mongoose.Schema({
    name: String,
    owner: Number,
    course: mongoose.Schema.Types.ObjectId,
    subscribers: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Aula", AulaSchema);
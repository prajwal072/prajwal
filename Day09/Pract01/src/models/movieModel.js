const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    actor: {
        type: String,
        required: true
    },
    actress: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
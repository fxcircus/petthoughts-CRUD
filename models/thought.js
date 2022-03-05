const mongoose = require('./connection.js')

const { Schema, model } = mongoose

const thoughtSchema = new Schema ({
    name: String,
    location: String,
    thought: String,
    img: String
})

const Thought = model("Thought", thoughtSchema)

module.exports = Thought
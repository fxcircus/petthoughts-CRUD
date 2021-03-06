const mongoose = require('./connection.js')

const { Schema, model } = mongoose

const thoughtSchema = new Schema ({
    name: String,
    location: String,
    thought: String,
    img: String,
    rank: { type: Number, enum: [1,2,3,4,5], default: 5 },
    username: String,
    isPublic: { type: Boolean, default: true}
},
{ timestamps: true })

const Thought = model("Thought", thoughtSchema)

module.exports = Thought
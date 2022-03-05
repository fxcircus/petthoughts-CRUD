require("dotenv").config()
const mongoose = require('mongoose')

//////////////////////////////
// Database connection
//////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Establish connection
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('Connected to MongoDB'))
    .on('close', () => console.log('Closed connection to MongoDB'))
    .on('error', (error) => console.log(errpr))

module.exports = mongoose
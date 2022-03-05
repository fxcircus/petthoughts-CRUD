const express = require('express')
const Thought = require("../models/connection")

const router = express.Router()

// MAIN
router.get('/', (req, res) => {
    res.send('up and running')
})

module.exports = router
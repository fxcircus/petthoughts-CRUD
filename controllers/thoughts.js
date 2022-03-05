const express = require('express')
const Thought = require("../models/thought")

const router = express.Router()

// MAIN
router.get('/', (req, res) => {
    Thought.find({})
        .then((thoughts) => {
            res.render("thoughts/Index")
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

module.exports = router
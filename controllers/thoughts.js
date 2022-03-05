const express = require('express')
const Thought = require("../models/thought")

const router = express.Router()

// INDEX
router.get('/', (req, res) => {
    Thought.find({})
        .then((thoughts) => {
            res.render("thoughts/Index")
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// NEW
router.get('/new', (req, res) => {
    res.render('thoughts/New')
})

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

module.exports = router
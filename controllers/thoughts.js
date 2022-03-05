const express = require('express')
const Thought = require("../models/thought")

const router = express.Router()

// INDEX
router.get('/', (req, res) => {
    Thought.find({})
        .then((thoughts) => {
            res.render("thoughts/Index", { thoughts })
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
router.post('/', (req, res) => {
    Thought.create(req.body)
        .then((createdThought) => {
            res.redirect ('/thoughts')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// EDIT

// SHOW

module.exports = router
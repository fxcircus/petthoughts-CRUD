const express = require('express')
const Thought = require("../models/thought")
const seed = require('../models/seed')
const { send } = require('express/lib/response')

const router = express.Router()

// test - sort by dates
// router.get('/test', (req, res) => {
//     Thought.findOne({}, {}, { sort: { 'created_at' : -1 } })
//         .then((post) => {
//             console.log( post )
//         })
// })

// test - only return 9 results
router.get('/test', (req, res) => {
    Thought.find({}).sort({date: -1}).limit(9)
        .then((thoughts) => {
            console.log( thoughts )
            res.render("thoughts/Index", { thoughts })
        })
})

// SEED
router.get('/seed', (req, res) => {
    Thought.insertMany(seed)
        .then((seed) => {
            // console.log(seed)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
        .finally(() => {
            res.redirect('/thoughts')
        })
})

// DELETE ALL ENTRIES
router.get('/deleteall', (req, res) => {
    Thought.deleteMany()
        .then(() => {
            res.redirect('/thoughts')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


// _id:{$gt: '621ec2abd87154b49235882f'}, {}, { skip: skipRes, limit: 9 }

// PAGES
router.get('/pages/:pagenum', async (req, res) => {
    const docNum = await Thought.find({}).countDocuments()
    const skipRes = (req.params.pagenum - 1) * 9
    Thought.find({}, {}, { skip: skipRes, limit: 9 })
        .then((thoughts) => {
            console.log(docNum)
            res.render("thoughts/Index", { thoughts, docNum })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// INDEX
// for pageination: change the find method to only return first 9 results, might be possible using the timestamp field
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
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Thought.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/thoughts')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    const { id } = req.params
    Thought.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/thoughts/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

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
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Thought.findById(id)
        .then((thought) => {
            res.render('thoughts/Edit', { thought })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// SHOW
router.get('/:id', (req, res) => {
    const { id } = req.params
    Thought.findById(id)
        .then((thought) => {
            res.render('thoughts/Show', { thought })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

module.exports = router
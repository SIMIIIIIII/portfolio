const express = require('express')
const router = express.Router()
const Comment = require('../models/comments')

//get all comments
router.get('/', async (req, res) =>{
    try {
        const comments = await Comment.find();
        res.json(comments)
        console.log("Data loaded...")
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log("Datas not loaded...")
    }
})

//new comment
router.post('/', async (req, res) =>{
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    })

    try {
        const newComment = await comment.save()
        res.status(201).json(newComment)
        console.log("data added")
    } catch (error) {
        res.status(400).json({message: error.message})
        console.log("data not added")
    }
})

//delete comment
router.delete('/:id', async (req, res) =>{
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({message: 'Cannot find comment'});
        }
        await comment.deleteOne();
        res.json({ message: "Deleted comment"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }  
})

module.exports = router
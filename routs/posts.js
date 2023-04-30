const express = require("express")
const router = express.Router();

const Post = require('../model/Post');

// Get all the posts
router.get("/", async (req, res) => {

    try {
        // find() -> gets all the data from MongoDb
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

// save a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title, description: req.body.description, ip: req.body.ip,
        name: req.body.name, LessonData: req.body.LessonData
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (err) {
        res.json({message: err});
    }
});

// Get a specific post
router.get("/:postId", async (req, res) => {
    try {
        // find() -> gets all the data from MongoDb
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

// Update a specific post
router.patch("/:postId", async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {
                $set:
                    {
                        title: req.body.title, description: req.body.description, ip: req.body.ip,
                        name: req.body.name, LessonData: req.body.LessonData
                    }
            }
        )
        res.json(updatePost);
    } catch (err) {
        res.json({message: err});
    }
});

// Delete a specific post
router.delete("/:postId", async (req, res) => {
    try {
        const removePost = await Post.deleteOne({_id: req.params.postId});
        res.json(removePost);
    } catch (err) {
        console.log(err)
    }
});
module.exports = router;
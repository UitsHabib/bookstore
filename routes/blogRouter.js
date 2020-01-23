const express = require('express')
const router = express.Router()


const blogController = require('../controllers/blogController')

router.get('/blog', blogController.blogPage)
router.post('/post', blogController.post)
router.post('/post/:id', blogController.fullPost)

module.exports = router

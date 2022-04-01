const router = require('express').Router();
const {createPost, getPosts} = require('../controllers/createPost');


router.get('/', (req,res) => {
    res.render('posts', {title: 'posts'})
})

router.get('/', getPosts);
// router.post('/', createPost);


module.exports = router;
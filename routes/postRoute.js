const router = require('express').Router();



router.get('/', (req,res) => {
    res.render('Post', {title: 'Post'})
})


module.exports = router;
const router = require('express').Router();



router.get('/', (req,res) => {
    res.render('home', {title: 'home page'})
})


module.exports = router;
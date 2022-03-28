const router = require('express').Router();



router.get('/', (req,res) => {
    res.render('Home', {title: 'HomePage'})
})


module.exports = router;
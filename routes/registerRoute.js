const router = require('express').Router();
const {createUser} = require('../controllers/createUser');


router.get('/', (req,res) => {
    res.render('register', {title: 'register'})
})



router.post('/', createUser);


module.exports = router;
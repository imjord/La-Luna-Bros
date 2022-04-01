const User = require('../models/user');

const UserController = {

     createUser(req,res){
        User.findOne({email: req.body.email}).then((user) => {
            if (user){
                return res.status(400).json({email: 'A user already registered with this email'})
            } else {
                // create a new user
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save()
                return res.render('Posts', {title: 'posts page'})
            }
        })
    }



}



module.exports = UserController;
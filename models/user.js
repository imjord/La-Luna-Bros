const {Schema, model} = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String, 
        required: true,
    },

    password: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})



const User = new model('User', UserSchema);


module.exports = User;
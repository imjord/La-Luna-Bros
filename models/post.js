const {Schema, model} = require('mongoose');


const postSchema = new Schema({
        postText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 400
    },
    createdAt: {
        type: Date,
        default: Date.now,
    
    },
    username: {
        type: String,
        required: true
    },
    replies: {
        // // array of nested documents from reaction schema 
        // ref: "Reaction"

    }
})



module.exports = model("post", postSchema)
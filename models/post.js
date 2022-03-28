const {Schema, model} = require('mongoose');


const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    title: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 50
    },

        postBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 400
    },

    upVotes: {
        type: Number
    },

    downVotes: {
        type: Number
    },
    replies: {
        // // array of nested documents from reaction schema 
        // ref: "Reaction"

    },
    createdAt: {
        type: Date,
        default: Date.now,
    
    },
})


const Post = new model('Post', postSchema)

module.exports = Post;
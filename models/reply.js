const { model, Schema, Types } = require("mongoose");



const replySchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    parentId:{
        type: Schema.Types.ObjectId,
        ref: 'Reply',
        required: false, // if not populated, then its a top level comment
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    replyBody: {
        type: String,
        required: true,
        maxLength: 280
    },
   
    upVotes: {
        type: Number
    },

    downVotes: {
        type: Number
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
        
    }
})

const Reply = new model('Reply', replySchema)

module.exports = Reply;
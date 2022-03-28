const { model, Schema, Types } = require("mongoose");



const replySchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    parentId:{
        type: Schema.Types.ObjectId,
        ref: 'reply',
        required: false, // if not populated, then its a top level comment
    },

    replyBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
        
    }
})


module.exports = model("reply", replySchema)
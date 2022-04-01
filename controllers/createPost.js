const Post = require('../models/post');




const Posts = {


    getPosts(req,res){
        Post.find({}).then((data => res.render('Posts', {title: 'Posts page', data}))).catch(err => {
            res.status(500).send({message: err.message || "error getting"})
        })
    },
    
    createPost(req,res) {
       const posts = new Post({
           username: req.body.username,
            title: req.body.title,
            postMessage: req.body.postMessage
       })
       posts.save().then(data => {
        console.log(data)
        res.render('Posts', {title: 'Posts page', data})
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error when creating post "
        })
    })
    }
}

// <!-- <% data.forEach(posts =>{ %> 
//     <h1><%= posts.username  %> </h1>
//     <h1><%= posts.title  %> </h1>
//     <h1><%= posts.postMessage  %> </h1>

//     <% }) %>  -->



module.exports = Posts;
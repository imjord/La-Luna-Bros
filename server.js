const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const db = require('./config/connection');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
const homeRoute = require('./routes/homeRoute');


app.set('view engine', 'ejs');

// css 
app.use(express.static('./public'));

app.use('/', homeRoute);



db.once('open', () =>{
    console.log(`database open`)
    app.listen(PORT, () =>{
        console.log(`now live on server port ${PORT}`)
    })
})
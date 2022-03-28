const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://imjord:imjord123@cluster0.r8vfn.mongodb.net/LaLunaDB?retryWrites=true&w=majority');


module.exports = mongoose.connection;
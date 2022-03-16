const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://imjord:imjord123@cluster0.i09s7.mongodb.net/laLunaUsers?retryWrites=true&w=majority"
);

module.exports = mongoose.connection;

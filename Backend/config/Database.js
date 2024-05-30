const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gavaskar:V.gu2PSzC7cLWLa@cluster0.jivfwuj.mongodb.net/Product');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error in connecting Database'));
db.once('open',()=>{
    console.log("Database connected successfully");
})
module.exports = db;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

//const Port = process.env.Port || 3000;

/*
app.listen(Port, () => {
    console.log('Server started.')
});
*/

//const uri = `mongodb+srv://veterinaria:<password>@cluster0.moyic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//const ure = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.moyic.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
})


/*
  mongoose.connection.on("error", function(error) {
    console.log(error)
})
*/


//const uri = "mongodb+srv://veterinaria:<password>@cluster0.moyic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
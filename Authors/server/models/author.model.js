const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: [2, "Author name needs to be longer than 2 letters"]
    }
},{timestamps:true})

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author
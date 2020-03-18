const Author = require("../models/author.model")

module.exports.allAuthors = (req, res) =>{
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}
module.exports.createAuthor = (req,res) =>{
    Author.create(req.body)
        .then(success => res.json(success))
        .catch(err => res.status(400).json(err))
}
module.exports.getAuthor = (req, res) =>{
    const {id} = req.params;
    Author.findOne({_id:id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}
module.exports.updateAuthor = (req, res) =>{
    const {id} = req.params;
    Author.findOneAndUpdate({_id:id} , req.body,{runValidators:true})
        .then(success => res.json(success))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
}
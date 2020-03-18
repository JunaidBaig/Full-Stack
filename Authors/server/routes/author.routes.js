const Author = require("../controllers/author.controller")

module.exports = app =>{
    app.get("/api/authors", Author.allAuthors)
    app.post("/api/authors", Author.createAuthor)
    app.get("/api/authors/:id", Author.getAuthor)
    app.put("/api/authors/:id", Author.updateAuthor)
    app.delete("/api/authors/:id", Author.deleteAuthor)
}
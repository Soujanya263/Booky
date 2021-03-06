const express = require("express");
const bodyParser = require("body-parser");      //For post req
//database
const database = require("./database");

const booky = express();
booky.use(bodyParser.urlencoded({extended: true}));      //For post req


booky.get ("/", (req,res) => {
    return res.json({books: database.books});
});


booky.get("/is/:isbn",(req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if (getSpecificBook.length === 0) {
        return res.json({error: `No book found for ISBN of ${req.params.isbn}`});
    }
    return res.json({book: getSpecificBook}); 
});


booky.get("/c/:category",(req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    );
    if (getSpecificBook.length === 0) {
        return res.json({error: `No book found for the category of ${req.params.category}`})
    }
    return res.json({book: getSpecificBook});
});



booky.get("/author", (req,res) => {
    return res.json({authors: database.author});
});

booky.get("/author/book/:isbn", (req,res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    );
    if (getSpecificAuthor.length === 0) {
        return res.json({error: `No author found for the book of ${req.params.isbn}`});
    }
    return res.json({author: getSpecificAuthor});
});

booky.get("/publications", (req,res) => {
    return res.json({publications: database.publication});
});


booky.post("/book/new", (req,res) => {
    const newBook = req.body; 
    database.books.push(newBook);
    return res.json({updatedBooks: database.books});
});

booky.listen(3000, () => {
    console.log("Server is up and running.");
});

/*
books- to get list of books based on languages
author- to get a specific author based on id
pub- to get a specific publication 
    -to get a list of publication based on book
*/
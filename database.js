const books = [
    {
        ISBN: "12345b",
        title: "Tesla",
        pubDate: "2021-08-05",
        language: "en",
        numPage: 250,
        author: [1,2],
        publication: [1],
        category: ["tech", "space", "education"]
    }
]

const author = [
    {
        id: 1,
        name: "Musk",
        books: ["12345b","secretbook"]
    },
    {
        id: 2,
        name: "Elon",
        books: ["12345b"]
    }
]

const publication = [
    {
        id: 1,
        name: "writer",
        books: ["12345b"]
    }
]

module.exports = {books, author, publication};
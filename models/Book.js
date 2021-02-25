const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
    },
    title: String,
    authors: [String],
    publisher: String,
    publisherDate: String,
    infoLink: String,
    description: String,
    pageCount: Number, 
    printedPageCount: Number, 
    categories: [String],
    image: String,
})


module.exports = mongoose.model('Book', BookSchema)
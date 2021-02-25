const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
    }, 
    title: {
        type: String,
        required: true,
    }, 
    // subtitle: {
    //     type: String,
    //     required: true,
    // }, 
    authors: {
        type: [String],
        required: true,
    }, 
    publisher: {
        type: String,
        required: true,
    }, 
    publisherDate: {
        type: String,
        required: true,
    }, 
    infoLink: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
    }, 
    printedPageCount: {
        type: Number,
    }, 
    categories: {
        type: [String],
        required: true,
    }, 
    image: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Book', BookSchema)
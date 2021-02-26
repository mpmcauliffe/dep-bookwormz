const express                           = require('express')
const needle                            = require('needle')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const Book                              = require('../models/Book')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')


const router                            = express.Router()
const API_URL                           = 'https://www.googleapis.com/books/v1/volumes?q='


//verification,
/* SEARCH BOOK USING GOOGLE API */
router.get('/booksearch/:urlSearchString', verification, (req, res) => {
    const { urlSearchString } = req.params
    const searchString = urlSearchString.replace(/_/g, " ")

    needle.get(`${API_URL}${searchString}`, (err, response) => {
        res.json(response.body)
    })
})

/* SAVE BOOK TO PROFILE */
router.post('/addbook/', verification, async (req, res) => {
    // console.log(req.body)
    if (!req.body.bookId) { res.status(400).send({ message: 'Save cannot be completed. Insufficient book info.' }) }

    const { bookId, title, authors, publisher, publisherDate, infoLink, 
        description, pageCount, printedPageCount, categories, image, } = req.body

    const email = getEmail(req.headers['x-auth-token'])

    const book = new Book({ bookId, title, authors, publisher, publisherDate, infoLink, 
        description, pageCount, printedPageCount, categories, image, })

    try {
        const findBook = await Book.findOne({ bookId: book.bookId })
        if (!findBook) { await book.save() }

        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'Save cannot be completed. User not found.' }) }

        user.books.push(book.bookId)
        //console.log(user)
        await user.save()

        res.json(book)

    } catch (e) {
        console.log(e)
        throw e
    }
})

/* GET MY BOOKS */
router.get('/mybooks/', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])

    try {
        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' }) }
        const bookIds = user.books

        const myBooks = await Book.find({ 'bookId': { $in: bookIds } })
        if (myBooks.length < 1) { 
            res.json({ 'myBooks': 'You don\'t have any books in your library at this time.' }) 
            return
        }
        res.json(myBooks)

    } catch (e) {
        console.log(e)
        throw e
    }
})


module.exports = router

const express                           = require('express')
const needle                            = require('needle')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const Book                              = require('../models/Book')
const Club                              = require('../models/Club')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')


const router                            = express.Router()
const API_URL                           = 'https://www.googleapis.com/books/v1/volumes?q='


// verification,
/* SEARCH BOOK USING GOOGLE API */
router.get('/booksearch/:urlSearchString', verification, (req, res) => {
    const { urlSearchString } = req.params
    const searchString = urlSearchString.replace(/_/g, " ")
    // &maxResults=40

    needle.get(`${API_URL}${searchString}&maxResults=20`, (err, response) => {
        // console.log(response.body)
        res.json(response.body)
    })
})

/* SAVE BOOK TO PROFILE */
router.post('/addbook/', verification, async (req, res) => {
    // console.log(req.body)
    if (!req.body.bookId) { res.status(400).send({ message: 'Save cannot be completed. Insufficient book info.' }) 
        return }

    const { bookId, title, authors, publisher, publisherDate, infoLink, 
        description, pageCount, printedPageCount, categories, image, } = req.body

    const email = getEmail(req.headers['x-auth-token'])

    const book = new Book({ bookId, title, authors, publisher, publisherDate, infoLink, 
        description, pageCount, printedPageCount, categories, image, })

    try {
        
        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'Save cannot be completed. User not found.' })
            return }
        
        const findBook = await Book.findOne({ bookId: book.bookId })
        if (!findBook) { await book.save() }

        const doesUserHaveBook = user.books.some(book => book === bookId)
        if (!doesUserHaveBook) {  
            user.books.unshift(book.bookId)
            await user.save()
            res.json(book)
            return
        }
        res.json({ 'message': 'double' })        

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
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' })
            return }

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

/* DELETE ONE OF MY BOOKS */
router.delete('/deletebook/:bookId', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])
    const { bookId } = req.params
    if (!email || !bookId) { res.status(400).send({ message: 'Save cannot be completed. Insufficient book info.' })
        return }

    try {
        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' })
            return }
        
        user.books = user.books.filter(book => book !== bookId)
        await user.save()

        res.json({ 'removed': bookId })
    } catch (e) {
        console.log(e)
        throw e
    }
})

/* GET CLUB BOOKS */
router.get('/getclubbooks/:clubId', verification, async (req, res) => {
    const { clubId } = req.params

    try {
        const club = await Club.findById(clubId)
        if (!club) { 
            res.status(400).send({ message: 'An error occured. Club not found.' }) 
            return
        }
        const clubBookIds = club.books
        const clubBooks = await Book.find({ 'bookId': { $in: clubBookIds } })

        // console.log(clubBooks)
        res.json(clubBooks)

    } catch (e) {
        console.log(e)
    }
})

/* ADD A BOOK TO CLUB */
router.post('/addbooktoclub/:clubId', verification, async (req, res) => {
    const { clubId } = req.params
    const { bookId } = req.body

    if (!clubId || !bookId) { res.status(400).send({ message: 'Insufficient data to complete the request' })
        return }

    try {
        const club = await Club.findById(clubId)
        if (!club) { res.status(400).send({ message: 'An error occured. Club not found.' })
            return }
        
        const findBook = await Book.findOne({ bookId: bookId })
        //console.log(findBook)
        if (!findBook) { res.status(400).send({ message: 'Insufficient data to complete the request' })
            return }

        const doesClubHaveBook = club.books.some(book => book === bookId)
        if (!doesClubHaveBook) {  
            club.books.push(bookId)
            await club.save()
            res.json({ 'message': 'added' })
            return
        }
        res.json({ 'message': 'double' })

    } catch (e) {
        console.log(e)
        throw e
    }
})


module.exports = router

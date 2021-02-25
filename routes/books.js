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
router.get('/booksearch/:urlSearchString', verification, (req, res) => {
    const { urlSearchString } = req.params
    const searchString = urlSearchString.replace(/_/g, " ")

    needle.get(`${API_URL}${searchString}`, (err, response) => {
        res.json(response.body)
    })
})

router.post('/addbook/', verification, async (req, res) => {
    console.log(req.body)
    const { bookId, title, authors, publisher, publisherDate, infoLink, 
        description, pageCount, printedPageCount, categories, image, } = req.body

    const email = getEmail(req.headers['x-auth-token'])

    const book = new Book({ bookId, title, authors, publisher, publisherDate, infoLink, 
        description, pageCount, printedPageCount, categories, image, })

    try {
        const user = await User.findOne({ email })
        user.books.push(bookId)
        await user.save()

        res.json({ id: bookId })

    } catch (e) {
        console.log(e)
        throw e
    }

})


module.exports = router

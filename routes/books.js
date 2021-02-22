const express = require('express')
const needle = require('needle')
const { ensureAuth, ensureGuest, } = require('../middleware/auth')
const verification = require('../middleware/verification')

const router = express.Router()
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='


//verification,
router.get('/booksearch/:urlSearchString', verification, (req, res) => {
    const { urlSearchString } = req.params
    const searchString = urlSearchString.replace(/_/g, " ")

    needle.get(`${API_URL}${searchString}`, (err, response) => {
        res.json(response.body)
    })
})

router.post('/addbook/:bookId', (req, res) => {

})


module.exports = router

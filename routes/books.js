const express = require('express')
const { ensureAuth, ensureGuest, } = require('../middleware/auth')
const verification = require('../middleware/verification')

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
const router = express.Router()


router.get('/booksearch', ensureAuth, verification, (req, res) => {
    //console.log(req.headers['x-auth-token'])
    //const userId = getUserId

    res.send({ "bears": "cute" })
})


module.exports = router

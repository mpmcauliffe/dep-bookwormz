const express = require('express')
const needle = require('needle')
const { ensureAuth, ensureGuest, } = require('../middleware/auth')
const verification = require('../middleware/verification')

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
const router = express.Router()


router.get('/booksearch/:urlSearchString', verification, (req, res) => {
    //console.log(req.headers['x-auth-token'])
    //const userId = getUserId
    console.log(req.params)
    const { urlSearchString } = req.params
    const searchString = urlSearchString.replace(/_/g, " ")

    //res.send({ "bears": "cute" })

    needle.get(`${API_URL}${searchString}`, (err, response) => {
        //console.log(err)
        //console.log(response)
        //console.log(response.body)
        res.json(response.body)
    })
})


module.exports = router

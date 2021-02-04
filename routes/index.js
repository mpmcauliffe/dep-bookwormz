const express = require('express')
const { ensureAuth, ensureGuest, } = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const createJWT = require('../middleware/createJWT')
//const jwt = require('jsonwebtoken')
//const Story = require('../models/Story')

const router = express.Router()


// @desc Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('landing', {
        layout: 'main',
    })
})


// @desc Login/Landing page
// @route GET /dashboard
router.get('/userkey', ensureAuth, async (req, res) => {
    const rawCookies = req.headers.cookie.split('; ')
    //console.log(rawCookies)
    res.send(`<h3>userkey</h3>`)
    
   
    
    
})


module.exports = router

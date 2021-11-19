const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { ensureAuth, ensureGuest, } = require('../middleware/auth')

const router = express.Router()


/* ASSIGN TOKEN */
// @desc sends token
// @route /auth/token
router.get('/token', ensureAuth, (req, res) => {
    const secret      = process.env.JWT_SECRET
    const userId      = req.user._id
console.log(req.user.email)
    try {
        const payload = {
            user: {
                email: req.user.email,
            }
        }
        //res.send({ "bears": "are cute" })
        //console.log(payload)
        const token = jwt.sign(payload, secret, (err, token) => {
            if (err) { console.log(err) }
            //res.send(`<h3>${token}</h3>`)
            //console.log(token)
            res.json({ token })
        })
    } catch (e) {
        console.log(e)
        throw e
    }
})

/* LOGOUT RTE */
// @desc Logout user
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.session.destroy(e => {
        console.error(e)
        res.clearCookie('connect.sid', { path: 'http://localhost:3000/' });
    })
})


/* GOOGLE AUTH RTE */
// @desc Auth with Google
// @route GET /auth/google
// see more here http://www.passportjs.org/packages/passport-google-oauth20/
router.get('/google', passport.authenticate('google', 
    { scope: ['profile', 'email', 'https://www.googleapis.com/auth/books'] }
))

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    
    (req, res) => {
        // res.redirect('https://bookwormz-api.herokuapp.com/userauth')
        res.redirect('http://localhost:3000/userauth')
    }
)


/* FACEBOOK AUTH RTE */
// @desc Auth with Facebook
// @route GET /auth/facebook
// see more here http://www.passportjs.org/packages/passport-facebook/
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('http://localhost:3000')
    // res.redirect('https://agitated-shannon-3f318f.netlify.app/') 
})


/* TWITTER AUTH RTE */
// @desc Auth with Twitter
// @route GET /auth/twitter
// see more here http://www.passportjs.org/packages/passport-twitter/
router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', 
    passport.authenticate('twitter', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000')
        // res.redirect('https://agitated-shannon-3f318f.netlify.app/') 
})


module.exports = router

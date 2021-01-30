const express = require('express')
const passport = require('passport')
const router = express.Router()


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
    res.redirect('http://localhost:3000') 
    // res.redirect('https://agitated-shannon-3f318f.netlify.app/') 
})


/* FACEBOOK AUTH RTE */
// @desc Auth with Facebook
// @route GET /auth/facebook
// see more here http://www.passportjs.org/packages/passport-facebook/
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000')
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


/* LOGOUT RTE */
// @desc Logout user
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000')
})


module.exports = router

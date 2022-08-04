const express                       = require('express')
const passport                      = require('passport')
const jwt                           = require('jsonwebtoken')
const bcrypt                        = require('bcryptjs')   
const User                          = require('../models/User')
const { ensureAuth, ensureGuest, }  = require('../middleware/auth')

const router = express.Router()


/* ASSIGN TOKEN */
// @desc sends token
// @route /auth/token
router.post('/token', async (req, res) => {
    const secret                    = process.env.JWT_SECRET
    const { email, password}        = req.body
    
    try {
        //res.send({ "bears": "are cute" })
        //console.log(payload)
        let user = await User.findOne({ email })

        if (!user) { res.status(400).json({ msg: 'Invalid credentials' }) }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) { return res.status(400).json({ msg: 'Invalid credentials' }) }
        
        const payload = { user: { email, } }
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

/* REGISTER USER */
router.post('/register', async (req, res) => {
    const { displayName, email, password, } = req.body
    

    // validation
    if (!displayName || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields.')
    }

    try {
        // check if User exits
        const userExists = await User.findOne({ email })
        
        if (userExists) { res.json({ message: 'User all ready exists' }).end() }

        // Hash password
        const salt              = await bcrypt.genSalt(10)
        const hashedPassword    = await bcrypt.hash(password, salt)
        
        // Create user
        const user = await User.create({
            displayName,
            email,
            password: hashedPassword,
            image: `${(Math.floor(Math.random() * 7) + 1).toString()}.svg`
        })

        // Build token components
        const secret        = process.env.JWT_SECRET
        const payload       = { user: { email, } }
        
        if (user) {
            const token = jwt.sign(payload, secret, (err, token) => {
                if (err) { console.log(err) }
                //res.send(`<h3>${token}</h3>`)
                //console.log(token)
                res.status(201).json({ token }).end()
            }) 
        }


    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// res.status(201).json({
//     // _id: user._id,
//     displayName: user.displayName,
//     email: user.email,
//     token: generateToken(user._id),
// })


/* LOGOUT RTE */
// @desc Logout user
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.session.destroy(e => {
        console.error(e)
        res.clearCookie('connect.sid', { path: 'http://localhost:3000/' });
    })
})


module.exports = router

// PASSPORT RTEs FOR PREVIOUS VERSION 

/* GOOGLE AUTH RTE */
// @desc Auth with Google
// @route GET /auth/google
// see more here http://www.passportjs.org/packages/passport-google-oauth20/
// router.get('/google', passport.authenticate('google', 
//     { scope: ['profile', 'email', 'https://www.googleapis.com/auth/books'] }
// ))

// // @desc Google auth callback
// // @route GET /auth/google/callback
// //  http://bookwormz-api.herokuapp.com/auth/google/callback
// router.get('/google/callback', 
//     passport.authenticate('google', { failureRedirect: '/' }),
    
//     (req, res) => {
//         res.redirect('https://bookwormz-api.herokuapp.com/userauth')
//         // res.redirect('http://localhost:3000/userauth')
//     }
// )


// /* FACEBOOK AUTH RTE */
// // @desc Auth with Facebook
// // @route GET /auth/facebook
// // see more here http://www.passportjs.org/packages/passport-facebook/
// router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))

// router.get('/facebook/callback',
//     passport.authenticate('facebook', { failureRedirect: '/' }),
    
//     (req, res) => {
//     // Successful authentication, redirect home.
//     // res.redirect('http://localhost:3000/userauth')
 
//     res.redirect('https://bookwormz-api.herokuapp.com/userauth')
// })


// /* TWITTER AUTH RTE */
// // @desc Auth with Twitter
// // @route GET /auth/twitter
// // see more here http://www.passportjs.org/packages/passport-twitter/
// router.get('/twitter', passport.authenticate('twitter'));

// router.get('/twitter/callback', 
//     passport.authenticate('twitter', { failureRedirect: '/' }),
//     function(req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('http://localhost:3000')
//         // res.redirect('https://agitated-shannon-3f318f.netlify.app/') 
// })




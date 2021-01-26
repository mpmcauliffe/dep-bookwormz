const express = require('express')
const { ensureAuth, ensureGuest, } = require('../middleware/auth')
//const jwt = require('jsonwebtoken')
//const Story = require('../models/Story')

const router = express.Router()


const secret = 'GYpcbRhioeeF8t6*gy8&^f47^gYaL&ry^7&FOFykAf*bka.q7gkTyfgDsbEQ&qqY&b6qf)hHk^ref4ofg(fa4qL4argYGeb7qEYuEy,bg44AWr'

// @desc Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('landing', {
        layout: 'main',
    })
})

// @desc Login/Landing page
// @route GET /dashboard
router.get('/dashboard', async (req, res) => {
    // console.log(req.user)
    //const token = jwt.sign({ ...profile.id }, secret, { expiresIn: '7 days' })
    // try {
    //     const stories = await Story.find({ user: req.user.id }).lean()
    //     res.render('dashboard', {
    //         name: req.user.displayName,
    //         stories,
    //     })

    // } catch (e) {
    //     console.error(e)   
    //     res.render('error/500')
    // }
})


module.exports = router

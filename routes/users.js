const express                           = require('express')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')


const router                            = express.Router()


router.get('/myinfo', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])
    if (!email) { res.status(400).send({ message: 'Something went wrong' }) }

    try {
        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'Error: User not found.' }) }
        // console.log(user)

        const userInfo = {
            // email: user.email,
            displayName: user.displayName,
            image: user.image,
            secondDisplayName: user.secondDisplayName, 
            secondaryImage:  user.secondaryImage,
        }

        res.json(userInfo)

    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Server error' })
    }
})


module.exports = router

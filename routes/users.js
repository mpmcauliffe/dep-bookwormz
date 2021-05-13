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

        const userInfo = {
            displayName: user.secondaryDisplayName ? user.secondaryDisplayName : user.displayName,
            image: user.secondaryImage ? user.secondaryImage : user.image,
        }

        res.send(userInfo)

    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Server error' })
    }
})

router.put('/updatinfo', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])
    if (!email) { res.status(400).send({ message: 'Something went wrong' })
        return }

    const { portrait, newDisplayName, } = req.body
    const updatedFields = { }

    if (portrait) updatedFields.secondaryImage                     = portrait
    if (newDisplayName) updatedFields.secondaryDisplayName         = newDisplayName

    try {
        await User.findOneAndUpdate({ email }, 
            { '$set': { 
                'secondaryImage': updatedFields.secondaryImage, 
                'secondaryDisplayName': updatedFields.secondaryDisplayName,
        } })

        const user = await User.findOne({ email })
        const userInfo = {
            displayName: user.secondaryDisplayName,
            image: user.secondaryImage,
        }
        
        res.send(userInfo)

    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Server error' })
    }

})

router.put('/revertinfo', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])
    if (!email) { res.status(400).send({ message: 'Something went wrong' })
        return }

    try {
        await User.findOneAndUpdate({ email }, 
            { '$set': { 
                'secondaryImage': '', 
                'secondaryDisplayName': '',
        } })

        const user = await User.findOne({ email })

        const userInfo = {
            displayName: user.displayName,
            image: user.image,
        }

        res.send(userInfo)

    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Server error' })
    }

})

router.delete('/deleteuser', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])
    if (!email) { res.status(400).send({ message: 'Something went wrong' })
        return }

    try {
        const user = await User.findOne({ email })
        user.remove()

        res.json({ 'user': user.displayName })
    
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Server error' })
    }
    
})


module.exports = router

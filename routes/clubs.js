const express                           = require('express')
const needle                            = require('needle')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const Book                              = require('../models/Book')
const Club                              = require('../models/Club')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')


const router                            = express.Router()

router.get('/getclub/:clubId', verification, async (req, res) => {
    const { clubId } = req.params

    try {
        const club = await Club.findById(clubId)
        console.log(club)
        res.json(club)

    } catch (e) {
        console.log(e)
    }
})

router.get('/getallclubs', verification, async (req, res) => {
    try {
        const clubs = await Club.find()
        res.json(clubs)

    } catch (e) {
        console.log(e)
    }
})

// memberId
// name
// profile
// chiefAdmin

router.post('/createclub', verification, async (req, res) => {
    const { clubName, description, bookNumber } = req.body
    const email = getEmail(req.headers['x-auth-token'])

    

    try {
        const user = await User.findOne({ email })

        const startingMember = {
            memberId: user._id,
            name: user.secondaryDisplayName ? user.secondaryDisplayName : user.displayName,
            profile: user.secondaryImage ? user.secondaryImage : user.image,
            chiefAdmin: true,
        }
        console.log(startingMember)

        const newClub = new Club({
            clubName,
            description,
            bookNumber,
            chiefAdmin: user._id,
            chiefEmail: user.email,
            chiefPortraitURL: user.secondaryImage ? user.secondaryImage : user.image,
            createdBy: user._id,
            members: [startingMember],
        })
        console.log(newClub)
        const created = await newClub.save()

        res.json(created)

    } catch (e) {
        console.log(e)
    }
})

router.post('/fillclub', async (req, res) => {
    
})


module.exports = router

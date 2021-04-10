const express                           = require('express')
const needle                            = require('needle')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const Book                              = require('../models/Book')
const Club                              = require('../models/Club')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')

const astronomy      = require('./db/astronomyClub')
const bear           = require('./db/bearClub')
const horror         = require('./db/horrorClub')
const infinite       = require('./db/infiniteClub')
const picture        = require ('./db/pictureBookClub')
const world          = require('./db/rulesTheWorldClub')
const data           = [astronomy, bear, horror, infinite, picture, world]

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

const fillClubs = async (clubId, dummieData) => {
    const club = await Club.findById({ _id: clubId })
    // let { clubName, members } = club
    if (club.members.length > 1) {
        console.log(`${club.clubName} has already been filled.`)
        return 
    }

    let newMembers = []
    for(let i=0; i<dummieData.length; i++) {
        let newMember = {
            memberId: dummieData[i]._id['$oid'],
            name: dummieData[i].displayName,
            profile: dummieData[i].image,
        }

        club.members.unshift(newMember)
        // newMembers.unshift(newMember)
        // console.log(dummieData[i]._id['$oid'])
    }

    console.log(club.members)
    const savedClub = await club.save()
    console.log(savedClub)
    //const fullClub = [...newMembers, ...members]
    // const updatedClub = await Club.findByIdAndUpdate(
    //     clubId,
    //     { $members: { fullClub } },
    //     { new: true }
    // )
    // console.log(updatedClub)
}

router.post('/fillclubs', async (req, res) => {
    fillClubs('606e8af5285e125fe0551aec', horror)
    
    // const clubs = ['606e8b1d285e125fe0551aee','606e7dc4285e125fe0551aea','606e7dc4285e125fe0551aea',
    //     '606e8b80285e125fe0551af2','606e8ca3285e125fe0551af4','606e8b49285e125fe0551af0']

    // for (let i=0; i<clubs.length; i++) {
    //     fillClubs(clubs[i], data[i])
    // }

    // const filledClubs = await Club.find()
    // res.json(filledClubs)
})


module.exports = router

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
    const email = getEmail(req.headers['x-auth-token'])

    try {
        const club = await Club.findById(clubId)
        if (!club) { 
            res.status(400).send({ message: 'An error occured. Club not found.' }) 
            return
        }
        const clubBookIds = club.books
        const clubBooks = await Book.find({ 'bookId': { $in: clubBookIds } })
        // if (clubBooks.length < 1) { 
        //     res.json({ 'clubBooks': 'Club doesn\'t have any books on its shelf at the moment.' }) 
        //     return
        // }

        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' }) }

        const clubIds = user.clubs
        const isClubMember = clubIds.some(id => clubId === id.toString())

        const clubElements = {
            ...club,
            clubBooks: [...clubBooks],
            isClubMember,
        }

        // console.log(clubElements)
        res.json(clubElements)

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

router.get('/getmyclubs', verification, async (req, res) => {
    const email = getEmail(req.headers['x-auth-token'])

    try {
        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' }) }

        const clubIds = user.clubs
        const myClubs = await Club.find({ '_id': { $in: clubIds } })

        if (myClubs.length < 1) { 
            res.json({ 'myClubs': 'You have\'t joined any clubs yet.' }) 
            return
        }

        res.json(myClubs)


    } catch (e) {
        console.log(e)
        throw e
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
        throw e
    }
})

router.put('/joinclub/:clubId', verification, async (req, res) => {
    const { clubId } = req.params
    const email = getEmail(req.headers['x-auth-token'])

    let joinClubResponse = false

    try {
        const club = await Club.findById(clubId)
        if (!club) { res.status(400).send({ message: 'An error occured. Club not found.' }) }
        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' }) }

        const isUserInClub = user.clubs.some(club => club.toString() === clubId)
        if (isUserInClub) { 
            joinClubResponse = { message: 'User already member in club', isClubMember: true, }
            res.json(joinClubResponse) 
            return
        }
        
        user.clubs.unshift(club._id)
        await user.save()

        const userInfo = {
            chiefAdmin: false,
            memberId: user._id,
            name: user.secondaryDisplayName ? user.secondaryDisplayName : user.displayName,
            profile: user.secondaryImage ? user.secondaryImage : user.image,
        }
        club.members.unshift(userInfo)
        await club.save()

        joinClubResponse = { message: `Successfully joined ${club.clubName}.`, isClubMember: true, }
        res.json(joinClubResponse)

    } catch (e) {
        console.log(e)
        throw e
    }
})

router.get('/getclubbooks/:clubId', async (req, res) => {
    const { clubId } = req.params
    console.log('getting books')

    try {
        const club = await Club.findById({ clubId })
        if (!club) { res.status(400).send({ message: 'An error occured. Club not found.' }) }
        const clubBookIds = club.books

        const clubBooks = await Book.find({ 'bookId': { $in: clubBookIds } })
        if (clubBooks.length < 1) { 
            res.json({ 'clubBooks': 'Club doesn\'t have any books on its shelf at the moment.' }) 
            return
        }

        res.json(clubBooks)

    } catch (e) {
        console.log(e)
        throw e
    }
})


const fillClubs = async (clubId, dummieData) => {
    const club = await Club.findById({ _id: clubId })
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
    }

    //console.log(club.members)
    const savedClub = await club.save()
    //console.log(savedClub)
}

router.post('/fillclubs', async (req, res) => {
    
    const clubs = ['606e8b1d285e125fe0551aee','606e7dc4285e125fe0551aea','606e7dc4285e125fe0551aea',
        '606e8b80285e125fe0551af2','606e8ca3285e125fe0551af4','606e8b49285e125fe0551af0']

    for (let i=0; i<clubs.length; i++) {
        fillClubs(clubs[i], data[i])
    }

    const filledClubs = await Club.find()
    res.json(filledClubs)
})


module.exports = router

const express                           = require('express')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const Club                              = require('../models/Club')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')
const getColor                          = require('../helpers/getColor')

const astronomy      = require('./db/commentFill/astronomyClub')
const bear           = require('./db/commentFill/bearClub')
const horror         = require('./db/commentFill/horrorClub')
const infinite       = require('./db/commentFill/infiniteClub')
const picture        = require ('./db/commentFill/pictureBookClub')
const data           = [astronomy, bear, horror, infinite, picture]

const router                            = express.Router()


router.post('/postcomment/:clubId', verification, async (req, res) => {

})

router.delete('/deletcomment/:clubId/:commentId', verification, async (req, res) => {

})

router.get('/getcomments/:clubId', verification, async (req, res) => {
    const { clubId } = req.params

    try {
        const club = await Club.findById(clubId)
        if (!club) { 
            res.status(400).send({ message: 'An error occured. Club not found.' }) 
            return }
        
        res.json(club.comments)

    } catch (e) {
        console.log(e)
    }
})

router.put('/postcomment/:clubId', verification, async (req, res) => {
    const { clubId } = req.params
    const email = getEmail(req.headers['x-auth-token'])

    const { 
        anchor: { anchorId, anchorMemberId, anchorName, anchorProfile, color, border, }, 
        origin: { originMemberId, originName, originProfile, originAnchorId, },
        content, subject, locator,
    } = req.body
    console.log(color)

    try {
        const club = await Club.findById(clubId)
        if (!club) { 
            res.status(400).send({ message: 'An error occured. Club not found.' }) 
            return }

        const user = await User.findOne({ email })
        if (!user) { res.status(400).send({ message: 'An error occured. User not found.' })
            return }
        
        const newComment = {
            replyTo: anchorName ? [anchorMemberId, anchorName, anchorProfile] : [ ],
            replyToOrigin: originName ? [originMemberId, originName, originProfile, originAnchorId] : [ ],
            name: user.secondaryDisplayName ? user.secondaryDisplayName : user.displayName,
            profile: user.secondaryImage ? user.secondaryImage : user.image,
            // color: color ? color : getColor(club.comments[club.comments.length-1].color, 1),
            // border: border ? border : getColor(club.comments[club.comments.length-1].border, 2),
            color: color ? getColor(color) : '',
            border: border ? getColor(border) : '',
            memberId: user._id,
            content,
            subject,
        }
        console.log(newComment)

    } catch (e) {
        console.log(e)
    }
})

router.put('/updatecomment/:clubId/:commentId', verification, async (req, res) => {
    
})

// STRICTLY TO FILL CLUBS WITH DUMMY COMMENTS
const fillComments = async (clubId, dummyData) => {
    // console.log(dummyData)
    const club = await Club.findById({ _id: clubId })

    console.log(club.clubName, club.comments.length)

    if (club.comments.length > 0) {
        console.log(`${club.clubName} has already been filled.`)
        return 
    }

    let newComments = []
    for(let i=0; i<dummyData.length; i++) {
        let newComment = {
            memberId: dummyData[i].memberId,
            name: dummyData[i].name,
            profile: dummyData[i].profile,
            subject: dummyData[i].subject,
            content: dummyData[i].content,
            replyTo: [],
            replyToOrigin: [],
            createdOn: dummyData[i].createdOn,
            color: dummyData[i].color,
            border: dummyData[i].border,
        }
        console.log(newComment)
        club.comments.push(newComment)
    }
    const savedClub = await club.save()
}

// STRICTLY TO FILL CLUBS WITH DUMMY COMMENTS
router.put('/fillcomments', async (req, res) => {
console.log(data)
    const clubs = ['606e8b1d285e125fe0551aee','606e7dc4285e125fe0551aea','606e8af5285e125fe0551aec',
    '606e8b80285e125fe0551af2','606e8ca3285e125fe0551af4','606e8b49285e125fe0551af0']

    for (let i=0; i<clubs.length; i++) {
        fillComments(clubs[i], data[i])
    }

    const filledClubs = await Club.find()
    res.json(filledClubs)
})

module.exports = router

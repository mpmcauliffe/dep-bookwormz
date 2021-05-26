const express                           = require('express')
const { ensureAuth, ensureGuest, }      = require('../middleware/auth')
const User                              = require('../models/User')
const Club                              = require('../models/Club')
const verification                      = require('../middleware/verification')
const getEmail                          = require('../helpers/getEmail')

const router                            = express.Router()


router.post('/postcomment/:clubId', verification, async (req, res) => {

})

router.delete('/deletcomment/:clubId/:commentId', verification, async (req, res) => {
    
})

router.get('/getcomments/:clubId', verification, async (req, res) => {
    
})

router.put('/updatecomment/:clubId/:commentId', verification, async (req, res) => {
    
})

const fillComments = async (clubId) => {
    const club = await Club.findById({ _id: clubId })
    if (club.comments.length < 1) {
        console.log(`${club.clubName} has already been filled.`)
        return 
    }
}

router.put('/fillcomments', async (req, res) => {

    const clubs = ['606e8b1d285e125fe0551aee','606e7dc4285e125fe0551aea','606e7dc4285e125fe0551aea',
    '606e8b80285e125fe0551af2','606e8ca3285e125fe0551af4','606e8b49285e125fe0551af0']

    for (let i=0; i<clubs.length; i++) {
        fillComments(clubs[i], data[i])
    }

    const filledClubs = await Club.find()
    res.json(filledClubs)
})

module.exports = router

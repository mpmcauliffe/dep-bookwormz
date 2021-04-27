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


module.exports = router

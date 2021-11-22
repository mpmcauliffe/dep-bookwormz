const FacebookStrategy = require('passport-facebook').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const userPass = require('../helpers/userPass')


let trustProxy = false
if (process.env.DYNO) {
    // Apps on heroku are behind a trusted proxy
    trustProxy = true
}

// from http://www.passportjs.org/packages/passport-facebook/
module.exports = function(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'name', 'picture.type(large)', 'email'],
            proxy: trustProxy,
        },
        function(accessToken, refreshToken, profile, cb) {
            userPass(profile, profile._json['email'], cb)
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
      
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}


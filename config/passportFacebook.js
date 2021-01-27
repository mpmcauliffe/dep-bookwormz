const FacebookStrategy = require('passport-facebook')
const mongoose = require('mongoose')
const User = require('../models/User')

// from http://www.passportjs.org/packages/passport-facebook/
module.exports = funtion(passport) {
    passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
        })
    }
    ))
}


const FacebookStrategy = require('passport-facebook').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')


// from http://www.passportjs.org/packages/passport-facebook/
module.exports = function(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'name', 'picture.type(large)', 'email'],
        },
        function(accessToken, refreshToken, profile, cb) {
            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // })
            cb(null, profile)
            console.log(profile)
        }
    ))
}


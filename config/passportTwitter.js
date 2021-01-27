const TwitterStrategy = require('passport-twitter')
const mongoose = require('mongoose')
const User = require('../models/User')


// http://www.passportjs.org/packages/passport-twitter/
module.exports = function(passport) {
    passport.use(new TwitterStrategy({
            consumerKey: process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL: 'http://127.0.0.1:5000/auth/twitter/callback'
        },
        function(token, tokenSecret, profile, cb) {
                User.findOrCreate({ twitterId: profile.id }, function (err, user) {
                    return cb(err, user)
                })
        }
    ))
}

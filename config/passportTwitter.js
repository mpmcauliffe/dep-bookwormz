const TwitterStrategy = require('passport-twitter').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')


let trustProxy = false
if (process.env.DYNO) {
    // Apps on heroku are behind a trusted proxy
    trustProxy = true
}

// http://www.passportjs.org/packages/passport-twitter/
module.exports = function(passport) {
    console.log('twitter strat')
    passport.use(new TwitterStrategy({
            consumerKey: process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL: 'http://127.0.0.1:5000/auth/twitter/callback',
            // callbackURL: '/auth/twitter/callback'
            proxy: trustProxy,
        },
        function(accessToken, tokenSecret, profile, cb) {
                // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
                //     return cb(err, user)
                // })
                console.log(profile)
                return cb(null, profile)
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
      
    
    passport.deserializeUser(function(obj, cb) {
        cb(null, obj)
    })
    
}

const TwitterStrategy = require('passport-twitter').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const userPass = require('../mongoose/userPass')


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
                console.log(profile)
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

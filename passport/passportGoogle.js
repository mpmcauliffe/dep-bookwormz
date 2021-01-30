const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const userPass = require('../mongoose/userPass')


// from http://www.passportjs.org/packages/passport-google-oauth20/
module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID, //|| config.google.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, // || config.google.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        userPass(profile, profile._json['email'], done)
    }))

    // from http://www.passportjs.org/docs/
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
      
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}

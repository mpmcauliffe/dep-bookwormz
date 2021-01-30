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

        //console.log(profile._json['email'])
        // console.log(profile)
        // const newUser = {
        //     googleId: profile.id,
        //     displayName: profile.displayName,
        //     firstName: profile.name.givenName,
        //     lastName: profile.name.familyName,
        //     image: profile.photos[0].value,
        // }

        // try {
        //     let user = await User.findOne({ googleId: profile.id })
            
        //     if (user) { 
        //         done(null, user) 
        //     } else {
        //         user = await User.create(newUser)
        //         done(null, user)
        //     }
        // } catch (e) {
        //     console.error(e)
        // }
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

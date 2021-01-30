const mongoose = require('mongoose')
const User = require('../models/User')


module.exports = async (incomimgUser, email, action) => {
    const userExists = await User.findOne({ email })

    try {
        if (!userExists) {
            console.log('create user')
            const newUser = {
                email,
                googleId: incomimgUser.id,
                displayName: incomimgUser.displayName,
                firstName: incomimgUser.name.givenName,
                lastName: incomimgUser.name.familyName,
                image: incomimgUser.photos[0].value,
            }
            await User.create(newUser)
        }

        action(null, incomimgUser)

    } catch (e) {
        console.log(e)
    }

    

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
}

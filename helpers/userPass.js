const mongoose = require('mongoose')
const User = require('../models/User')


module.exports = async (incomimgUser, email, action) => {
    const userExists = await User.findOne({ email })

    try {
        if (!userExists) {
            console.log('create user')
            const newUser = {
                email,
                userId: incomimgUser.id,
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
}

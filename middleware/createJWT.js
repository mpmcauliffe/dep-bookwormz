const jwt           = require('jsonwebtoken')
const User          = require('../models/User')


module.exports = async user => {
    const secret      = process.env.JWT_SECRET
    
    try {
        const payload = {
            user: {
                mongoId: user._id,
            }
        }
        
        const token = jwt.sign(payload, secret)
    console.log(signedToken)
        return token
    } catch (e) {
        console.log(e)
        throw e
    }
}

// // get token
// const token = req.header('x-auth-token')
// // check if not token
// if (!token) { return res.status(401).json({ msg: 'No token, authorization denied.' }) }


// try {
//     const decoded = jwt.verify(token, secret)

//     req.user = decoded.user
//     next()
// } catch (err) {
//     res.status(401).json({ msg: 'Token not valid' })
// }

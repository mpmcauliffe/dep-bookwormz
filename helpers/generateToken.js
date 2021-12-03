// generateToken, getUserId, hashPassword

const jwt       = require('jsonwebtoken')
const config    = require('config')

const secret    = process.env.JWT_SECRET || config.get('JWT_SECRET')


const generateToken = (userId) => {
    return jwt.sign({ userId }, secret, { expiresIn: '7 days' })
}


module.exports = generateToken

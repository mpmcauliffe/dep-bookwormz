const jwt           = require('jsonwebtoken')
const JwtStrategy   = require('passport-jwt').Strategy
const ExtractJwt    = require('passport-jwt').ExtractJwt

const opts          = {}


opts.jwtFromRequest = (req) => {
    const token = null
    if (req && req.cookies)
    {
        token = req.cookies['jwt']
    }
    return token
}

opts.secretOrKey = process.env.JWT_SECRET


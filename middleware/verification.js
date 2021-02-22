const jwt           = require('jsonwebtoken')

const secret        = process.env.JWT_SECRET

module.exports = function(req, res, next) {
    // get token
    const token = req.header('x-auth-token')
    // check if not token
    console.log(token)
    if (!token) {
        console.log('401 - No token, authorization denied.') 
        return res.status(401).json({ msg: 'No token, authorization denied.' }) }


    try {
        const decoded = jwt.verify(token, secret)

        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token not valid' })
    }
}

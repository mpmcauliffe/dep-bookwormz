const jwt = require('jsonwebtoken')


const secret    = process.env.JWT_SECRET

/* RETRIEVES EMAIL FROM AUTH TOKEN */
module.exports = (token, requireAuth = true) => {
    if (token.length > 0) {
        try {
            const decoded = jwt.verify(token, secret)
            return decoded.user.email

        } catch (e) {
            console.log(e)
            throw new Error('AUTH ERROR!')
        }
        
    }

    if (requireAuth) {
        throw new Error('Authentication required')
    } 
    
    return null
}

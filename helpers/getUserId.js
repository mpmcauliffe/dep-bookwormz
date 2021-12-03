// generateToken, getUserId, hashPassword

const jwt = require('jsonwebtoken')
const config    = require('config')

const secret    = process.env.JWT_SECRET || config.get('JWT_SECRET')


const getUserId = (header, requireAuth = true) => {

    // console.log(request.connection)
    // const header = request.request 
    //     ? request.request.headers.authorization 
    //     : request.connection.context.Authorization

    if (header) {
        const token = header.replace('Bearer ', '')

        try {
            const decoded = jwt.verify(token, secret)
            return decoded.userId

        } catch (e) {
            throw new Error('AUTH ERROR!')
        }
        
    }

    if (requireAuth) {
        throw new Error('Authentication required')
    } 
    
    return null
}


module.exports = getUserId

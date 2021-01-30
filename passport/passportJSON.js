const jwt = require('jsonwebtoken')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


let opts = {  }
opts.jwtFromRequest = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
}
opts.secretOrKey = process.env.JWT_SECRET

module.exports = function(passport) {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            console.log(jwt_payload)
            // if (err) {
            //     return done(err, false);
            // }
            // if (user) {
            //     return done(null, user);
            // } else {
            //     return done(null, false);
            //     // or you could create a new account
            // }
        })
    )
}


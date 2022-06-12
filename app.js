const path              = require('path')
const express           = require('express')
const mongoose          = require('mongoose')
const bodyParser        = require('body-parser')
const dotenv            = require('dotenv')
const morgan            = require('morgan')
const exphbs            = require('express-handlebars')
const passport          = require('passport')
const session           = require('express-session')
const cors              = require('cors')
const colors            = require('colors')
const MongoStore        = require('connect-mongo')(session)

const connectDB         = require('./config/db')

const app               = express()


/* ENVIRONMENT VARIABLE SETUP */
dotenv.config({ path: './config/config.env' })

/* CONNECT TO MONGO */
connectDB()

/* PASSPORT SETUP */
require('./config/passportGoogle')(passport)
require('./config/passportFacebook')(passport)
require('./config/passportTwitter')(passport)

/* CORS */
app.use(cors())

/* BODYPARSER */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// passport
app.use(passport.initialize())
app.use(passport.session())

// set globals
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

app.use('/auth', require('./routes/auth'))
app.use('https://bookwormz-api.herokuapp.com/auth', require('./routes/auth'))
app.use('/books', require('./routes/books'))
app.use('/users', require('./routes/users'))
app.use('/clubs', require('./routes/clubs'))
app.use('/comments', require('./routes/comments'))

/* MORGAN SETUP */
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')) }

/* DEPLOYMENT STATIC SETUP */ /*** FOR HEROKU ***/
app.use(express.static(path.join(__dirname,'bookwormz', 'build')))
if (process.env.NODE_ENV === 'production') { 
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'bookwormz', 'build', 'index.html')))
}


/* PORT SETUP */
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Running in ${process.env.NODE_ENV} mode 🐻 \n. . .on http://localhost:${PORT}`))



// Deploying this app on heroku
// remove cross-env from start script while deploying app on heroku
// this will help

// Add your app uri (domain on which you are going to host your webapp) to Google O auth ' 
// s authorized urls by this change your url is verified to use Google O auth service
//  it will take some time  !!!

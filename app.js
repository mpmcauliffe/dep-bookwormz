const path              = require('path')
const express           = require('express')
const mongoose          = require('mongoose')
const dotenv            = require('dotenv')
const morgan            = require('morgan')
// const exphbs            = require('express-handlebars')
const passport          = require('passport')
const session           = require('express-session')
const MongoStore        = require('connect-mongo')(session)

const connectDB         = require('./config/db')


const app               = express()

/* ENVIRONMENT VARIABLE SETUP */
dotenv.config({ path: './config/config.env' })

/* CONNECT TO MONGO */
connectDB()

/* PASSPORT SETUP */
require('./config/passport')(passport)


/* MIDDLEWARE */
// bodyparser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/* 🍔 helper */
// const { formatDate, truncate, stripTags, editIcon, select, } = require('./helpers/hbs')
// // handlebars
// app.engine(
//     '.hbs', 
//     exphbs({ 
//         helpers: { formatDate, stripTags, truncate, editIcon, select, }, 
//         defaultLayout: 'main', 
//         extname: '.hbs' 
//     }))
// app.set('view engine', '.hbs')

// session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
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

// express
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

/* MORGAN SETUP */
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')) }

/* PORT SETUP */
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Running in ${process.env.NODE_ENV} mode \n. . .on port ${PORT}`))

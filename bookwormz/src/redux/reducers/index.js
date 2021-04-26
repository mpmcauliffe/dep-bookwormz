import { combineReducers } from 'redux'
import authReducer from './authReducer'
import bookReducer from './bookReducer'
import accountReducer from './accountReducer'
import clubReducer from './clubReducer'
import commentReducer from './commentReducer'

export default combineReducers({ 
    auth: authReducer,
    books: bookReducer,
    account: accountReducer,
    clubs: clubReducer,
    comment: commentReducer,
 })

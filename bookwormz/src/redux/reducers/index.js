import { combineReducers } from 'redux'
import authReducer from './authReducer'
import bookReducer from './bookReducer'
import accountReducer from './accountReducer'

export default combineReducers({ 
    auth: authReducer,
    books: bookReducer,
    account: accountReducer,
 })

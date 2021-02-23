import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { LOGIN, LOGOUT, ERROR, TRIGGER_AUTH_ERROR, } from '../types'


/* authenticates user */
export const login = history => async dispatch => {
    try {
        const res = await axios.get('/auth/token')
        // console.log(res)
        if (typeof res.data.token === 'undefined') {
            history.push('/')
            dispatch({ type: ERROR })
            return
        }
        
        localStorage.setItem('token', res.data.token)
        setUser()
        history.push('/dashboard')    
        dispatch({ type: LOGIN })
        
    } catch (e) {
        history.push('/')
        dispatch({ type: ERROR })
    }
}

/* logs out user */
export const logout = history => async dispatch => {
    try {
        localStorage.removeItem('token')
        history.push('/') 
        dispatch({ type: LOGOUT })
        // const name = 'connect.sid'
        // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        const res = await axios.get('/auth/logout')

        console.log(res)
                
    } catch (e) {
        history.push('/dashboard')
        dispatch({ type: ERROR })
    }
}

export const triggerAuthError = (type, message, history) => dispatch => {
    if (type === '1') {
        history.push('/') 
        dispatch({ type: TRIGGER_AUTH_ERROR, payload: message })
    } else {
        dispatch({ type: TRIGGER_AUTH_ERROR, payload: 'Something went wrong.' })
    }
}

/* SET USER */
const setUser = () => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
}



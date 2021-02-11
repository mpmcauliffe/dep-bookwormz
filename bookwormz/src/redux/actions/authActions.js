import axios from 'axios'
import { LOGIN, LOGOUT, ERROR, } from '../types'


/* authenticates user */
export const login = history => async dispatch => {
    try {
        const res = await axios.get('https://bookwormz-api.herokuapp.com/auth/token')
        console.log(res)
        if (typeof res.data.token === 'undefined') {
            history.push('/')
            dispatch({ type: ERROR })
            return
        }
        
        localStorage.setItem('token', res.data.token)
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


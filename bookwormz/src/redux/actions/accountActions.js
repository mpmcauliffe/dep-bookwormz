import axios from 'axios'
import { GET_USER_INFO, UPDATE_PROFILE_PICTURE, UPDATE_DISPLAY_NAME,
    UPDATE_EMAIL_ADDRESS, DELETE_ACCOUNT, USER_MESSAGE, SET_LOADING, } from '../types'


    const config = { headers: { 'Content-Type': 'application/json' } }

    // GET USER INFO
    // GET MY BOOKS
export const getUserInfo = () => async dispatch => {
    setLoading()

    try {
        const res = await axios.get(`/users/myinfo/`)
        // console.log(res)
        if (res.status === 200) {
            dispatch({ 
                type: GET_USER_INFO, 
                payload: { books: res.data } 
            })
            return
        }
        dispatch({ type: USER_MESSAGE, payload: 'Cannot retieve your library at this time.' })
    } catch (e) {
        console.log(e)
        dispatch({ type: USER_MESSAGE, payload: 'Cannot retieve your library at this time.' })
    }
}

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    

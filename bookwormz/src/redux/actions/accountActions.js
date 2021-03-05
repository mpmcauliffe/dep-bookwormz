import axios from 'axios'
import { GET_USER_INFO, UPDATE_USER_INFO, DELETE_ACCOUNT, 
    USER_MESSAGE, SET_LOADING, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

// GET USER INFO
export const getUserInfo = () => async dispatch => {
    setLoading()

    try {
        const res = await axios.get(`/users/myinfo/`)
        // console.log(res.data)
        if (res.status === 200) {
            dispatch({ 
                type: GET_USER_INFO, 
                payload: { userInfo: res.data } 
            })
            return
        }
        dispatch({ type: USER_MESSAGE, payload: 'Couldn\'t retrieve your account information.' })
    } catch (e) {
        console.log(e)
        dispatch({ type: USER_MESSAGE, payload: 'Couldn\'t retrieve your account information.' })
    }
}

// UPDATE
export const updateUserInfo = userInfo => async dispatch => {
    const res = await axios.put(`/users/updatinfo/`, userInfo, config)

    console.log(
        `%cUpdated ONE OR MORE OF THE FOLLOWING: %c${res.data.displayName} %cAND / OR YOUR PROFILE PORTRAIT`,
        'font-weight: bold', 'color: green', 'font-weight: bold')

    if (res.status === 200) {
        dispatch({
            type:   GET_USER_INFO,
            payload: { userInfo: res.data }
        })
        return
    }
}

// REVERT
export const revertUserInfo = () => async dispatch => {
    const res = await axios.put(`/users/revertinfo/`, config)

    console.log(res)
}

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    

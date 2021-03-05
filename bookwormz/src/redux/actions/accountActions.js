import axios from 'axios'
import { GET_USER_INFO, 
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
    try {
        const res = await axios.put(`/users/updatinfo/`, userInfo, config)
        
        console.log(
        `%cUPDATED ONE OR MORE OF THE FOLLOWING: YOUR %cPROFILE PORTRAIT %cAND/OR YOUR %cDISPLAY NAME.`,
        'font-weight: bold', 'color: orange', 'font-weight: bold', 'color: orange',)

        if (res.status === 200) {
            dispatch({
                type: GET_USER_INFO,
                payload: { userInfo: res.data, message: `Account updated successfuly` }
            })
            return
        }
    } catch (e) {
        console.log(e)
        dispatch({ type: USER_MESSAGE, payload: 'Couldn\'t complete request.' })
    }    
}

// REVERT
export const revertUserInfo = () => async dispatch => {
    try {
        const res = await axios.put(`/users/revertinfo/`, config)

        console.log(
            `%cREVERTED YOUR %cPROFILE PORTRAIT %cAND YOUR %cDISPLAY NAME %cTO ORIGINAL GOOGLE SETTING.`,
            'font-weight: bold', 'color: orange', 'font-weight: bold', 'color: orange', 'font-weight: bold')

        if (res.status === 200) {
            dispatch({
                type: GET_USER_INFO,
                payload: { userInfo: res.data, message: `Account reverted successfuly` }
            })
            return
        }
    } catch (e) {
        console.log(e)
        dispatch({ type: USER_MESSAGE, payload: 'Couldn\'t complete request.' })
    }
}

export const deleteUserAccount = () => async dispatch => {
    try {
        const res = await axios.delete(`/users/deleteuser/`, config)

        console.log(`%cDELETED %c${res.data.user}'s %cUSER ACCOUNT`, 
            'font-weight: bold', 'color: red', 'font-weight: bold')

        if (res.status === 200) {            
            dispatch({
                type: USER_MESSAGE,
                payload: `Deleted ${res.data.user}'s account.`
            })
            return
        }
    } catch (e) {
        console.log(e)
        dispatch({ type: USER_MESSAGE, payload: 'Couldn\'t complete request.' })
    }
}

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    

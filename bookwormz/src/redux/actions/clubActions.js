import axios from 'axios'
import {  GET_CLUB, GET_ALL_CLUBS, CREATE_CLUB, SEARCH_CLUBS,
     CLUB_MESSAGE, CLEAR_CLUB_MESSAGE, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

export const getClub = (clubId, history) => async dispatch => {
    try {
        const res = await axios.get(`/clubs/getclub/${clubId}`, config)
    } catch (e) {
        console.log(e)
    }
}

export const createClub = (clubSettings, history) => async dispatch => {       
    try {
        const res = await axios.post(`/clubs/createclub/`, clubSettings, config) 
        console.log(res)

        if (res.status === 200) {
            console.log(`%cCREATED %c${clubSettings.clubName}`, 'font-weight: bold', 'color: orange')
            
            history.push(`/club/${res.data._id}`)
            
            dispatch({ 
                type: CREATE_CLUB, 
                payload: { 
                    club: res.data, 
                    message: `${clubSettings.clubName} created.`, 
                    style: 'green darken-3 rounded', 
                    timeDisplay: 5000 
                } 
            })
            return
        }
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Club could not be created.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })

    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Club could not be created.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

export const sendClubMessage = messageSettings => dispatch => {
    dispatch({ type: CLUB_MESSAGE, payload: { ...messageSettings } })
}

export const clearClubMessage = () => dispatch => { dispatch({ type: CLEAR_CLUB_MESSAGE }) }

import axios from 'axios'
import {  GET_CLUB, GET_ALL_CLUBS, CREATE_CLUB, SEARCH_CLUBS,
     CLUB_MESSAGE, CLEAR_CLUB_MESSAGE, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

export const createClub = clubSettings => async dispatch => {       
    try {
        console.log(clubSettings)
        const res = await axios.post(`/clubs/createclub/`, clubSettings, config) 
        console.log(res)

        if (res.status === 200) {
            console.log(`%cCREATED %c${clubSettings.clubName}`, 'font-weight: bold', 'color: orange')
            dispatch({ 
                type: CREATE_CLUB, 
                payload: { book: res.data, message: `${clubSettings.clubName} added to your books.` } 
            })
            return
        }
        // dispatch({ type: CLUB_MESSAGE, payload: 'Request could not be completed.' })

    } catch (e) {
        // console.log(e)
        // dispatch({ type: CLUB_MESSAGE, payload: 'Request could not be completed.' })
    }
}

export const sendClubMessage = messageSettings => dispatch => {
    dispatch({ type: CLUB_MESSAGE, payload: { ...messageSettings } })
}

export const clearClubMessage = () => dispatch => { dispatch({ type: CLEAR_CLUB_MESSAGE }) }

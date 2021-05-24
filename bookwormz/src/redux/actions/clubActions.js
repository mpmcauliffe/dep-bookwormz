import axios from 'axios'
import {  GET_CLUB, GET_MULTIPLE_CLUBS, CREATE_CLUB, JOIN_CLUB, LEAVE_CLUB, SEARCH_CLUBS, 
    RESET_CLUB, CLUB_MESSAGE, CLEAR_CLUB_MESSAGE, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

export const getAllClubs = () => async dispatch => {
    // console.log('get all clubs')
    try {
        const res = await axios.get('/clubs/getallclubs', config)
        // console.log(res.data)

        dispatch({ type: GET_MULTIPLE_CLUBS, payload: res.data })

    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Cannot load clubs. Please try later.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

export const getClub = (clubId, history) => async dispatch => {
    try {
        const res = await axios.get(`/clubs/getclub/${clubId}`, config)
        // console.log(res.data)

        dispatch({ type: GET_CLUB, payload: res.data })
    
    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Something when wrong. Please try later.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

export const getMyClubs = () => async dispatch => {
    try {
        const res = await axios.get(`/clubs/getmyclubs/`, config)
        // console.log(res.data)
        dispatch({ type: GET_MULTIPLE_CLUBS, payload: res.data })
    
    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Something when wrong. Please try later.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

export const createClub = (clubSettings, history) => async dispatch => {       
    try {
        const res = await axios.post(`/clubs/createclub/`, clubSettings, config) 
        console.log(res)

        if (res.status === 200) {
            console.log(`%cCREATED %c${clubSettings.clubName}`, 'font-weight: bold', 'color: orange')
            console.log(res.data._doc._id)
            history.push(`/club/${res.data._doc._id}`)
            
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

export const joinClub = (clubName, clubId) => async dispatch => {
    try {
        const res = await axios.put(`/clubs/joinclub/${clubId}`, config)
        console.log(`%cJOINED %c${clubName}`, 'font-weight: bold', 'color: green')

        dispatch({ type: JOIN_CLUB, payload: res.data })

    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Could not join group please try again later.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

export const leaveClub = (clubName, clubId, history) => async dispatch => {
    try {
        const res = await axios.put(`/clubs/leaveclub/${clubId}`, config)
        console.log(`%cLEFT %c${clubName}`, 'font-weight: bold', 'color: red')

        history.push(`/dashboard`)

        dispatch({ type: LEAVE_CLUB, payload: res.data })

    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Could not leave group please try again later.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

export const resetClubs = () => dispatch => { dispatch({ type: RESET_CLUB, }) }

export const getClubBookShelf = clubId => async dispatch => {
    
    try {
        const res = await axios.get(`clubs/getclubbooks/${clubId}`)

        console.log(res.data)

    } catch (e) {
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Couldn\'t load club\'s bookshelf.',
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

export const fillClubs = () => async dispatch => {
    try {
        console.log('fill clubs')
        const res = await axios.post(`/clubs/fillclubs/`)
        console.log(res.data)

        if (res.status === 200) {
            dispatch({ 
                type: CLUB_MESSAGE, 
                payload: {
                    message: 'Club members added. Check the database.',
                    style: 'green darken-3 rounded', 
                    timeDisplay: 5000,
                } 
            })
        }

    } catch (e) {
        console.log(e)
        dispatch({ 
            type: CLUB_MESSAGE, 
            payload: {
                message: 'Clubs may not have been filled. Check the database.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

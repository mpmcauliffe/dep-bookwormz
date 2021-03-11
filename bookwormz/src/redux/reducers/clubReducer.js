import { GET_CLUB, GET_ALL_CLUBS, CREATE_CLUB, SEARCH_CLUBS,
    CLUB_MESSAGE, CLEAR_CLUB_MESSAGE, } from '../types'


const initialState = {
    availableClubs: [ ],
    currentClub: null,
    clubMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        
        case CREATE_CLUB:
            return {
                ...state,
                availableClubs: [ ...state.availableClubs, action.payload.club ],
                currentClub: action.payload.club,
                clubMessage: {
                    message: action.payload.message,
                    style: action.payload.style,
                    timeDisplay: action.payload.timeDisplay,
                },
            }

        case CLUB_MESSAGE:
            return {
                ...state,
                clubMessage: {
                    message: action.payload.message,
                    style: action.payload.style,
                    timeDisplay: action.payload.timeDisplay,
                },
            }

        case CLEAR_CLUB_MESSAGE:
            return {
                ...state,
                clubMessage: {
                    message: '',
                    style: '',
                    timeDisplay: null,
                },
            }

        default:
            return state
    }
} 


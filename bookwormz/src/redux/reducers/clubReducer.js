import { GET_CLUB, GET_MULTIPLE_CLUBS, CREATE_CLUB, JOIN_CLUB, LEAVE_CLUB, SEARCH_CLUBS, 
    RESET_CLUB, CLUB_MESSAGE, CLEAR_CLUB_MESSAGE, } from '../types'


const initialState = {
    availableClubs: [ ],
    currentClub: null,
    // clubBooks: [ ],
    clubSearchQuery: '',
    isUserAMember: false,
    clubMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {

        case GET_CLUB:
            // console.log(action.payload)
            return {
                ...state,
                currentClub: { ...action.payload._doc },
                // clubBooks: action.payload.clubBooks,
                isUserAMember: action.payload.isClubMember,
            }

        case GET_MULTIPLE_CLUBS:
            return {
                ...state,
                availableClubs: [...action.payload],
            }
        
        case CREATE_CLUB:
            // console.log(action.payload)
            return {
                ...state,
                availableClubs: [ ...state.availableClubs, action.payload.club._doc ],
                currentClub: { ...action.payload.club._doc },
                isUserAMember: action.payload.club.isClubMember,
                clubMessage: {
                    message: action.payload.message,
                    style: action.payload.style,
                    timeDisplay: action.payload.timeDisplay,
                },
            }

        case JOIN_CLUB:
            return {
                ...state,
                isUserAMember: action.payload.isClubMember,
                clubMessage: {
                    message: action.payload.message,
                    style: 'green darken-3 rounded',
                    timeDisplay: 5000,
                },
            }

        case LEAVE_CLUB:
            
            return {
                ...state,
                isUserAMember: action.payload.isClubMember,
                clubMessage: {
                    message: action.payload.message,
                    style: 'red accent-4 rounded', 
                    timeDisplay: 5000,
                },
            }

        case RESET_CLUB:
            return {
                ...state,
                currentClub: null,
                // clubBooks: [ ],
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


import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, } from '../types'


const initialState = {
    searchQuery: '',
    bookResults: [ ],
    bookError: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_BOOKS: 
            return {
                ...state,
            }

        default:
            return state
    }
} 

import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE,
    BOOK_ERROR, SET_LOADING, } from '../types'


const initialState = {
    bookSearchQuery: '',
    bookResults: [ ],
    bookError: '',
    isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_BOOKS: 
            return {
                ...state,
                bookResults: [...action.payload.books],
                // bookResults: [...Array(7)].map((_, i) => action.payload.books),
                bookSearchQuery: action.payload.searchString,
                isLoading: false,
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case BOOK_ERROR:
            return {
                ...state,
                bookError: 'Something went wrong.',
            }

        default:
            return state
    }
} 

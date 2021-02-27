import { GET_MY_BOOKS, SEARCH_BOOKS, ADD_BOOK_TO_PROFILE,
    BOOK_ERROR, SET_LOADING, } from '../types'

//M.toast({ html: `${bookMessage}`, classes: 'green darken-3 rounded', displayLength: 5000 })
const initialState = {
    bookSearchQuery: '',
    myBooks: [ ],
    bookResults: [ ],
    isLoading: false,
    bookMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    },
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_MY_BOOKS:
            return {
                ...state,
                myBooks: [...action.payload.books],
                isLoading: false,
            }

        case SEARCH_BOOKS: 
            return {
                ...state,
                bookResults: [...action.payload.books],
                // UNCOMMENT FOR SAMPLE TEST bookResults: [...Array(7)].map((_, i) => action.payload.books), 
                bookSearchQuery: action.payload.searchString,
                isLoading: false,
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        
        case ADD_BOOK_TO_PROFILE:
            return {
                ...state,
                myBooks: [...state.myBooks, action.payload.book],
                bookMessage: {
                    message: action.payload.message,
                    style: 'green darken-3 rounded',
                    timeDisplay: 5000,
                },
            }

        case BOOK_ERROR:
            console.log(action.payload)
            return {
                ...state,
                bookMessage: {
                    message: action.payload,
                    style: 'red accent-4 rounded',
                    timeDisplay: 5000,
                }
            }

        default:
            return state
    }
} 

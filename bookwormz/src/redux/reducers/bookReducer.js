import { GET_MY_BOOKS, SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, 
    REMOVE_BOOK_FROM_LIBRARY, GET_CLUB_BOOKS, MESSAGE, BOOK_ERROR, 
    CLEAR_BOOK_MESSAGE, SET_LOADING,  } from '../types'

//M.toast({ html: `${bookMessage}`, classes: 'green darken-3 rounded', displayLength: 5000 })
const initialState = {
    bookSearchQuery: '',
    myBooks: [ ],
    clubBooks: [ ],
    bookResults: [ ],
    isLoading: false,
    shelfHeight: 100,
    bookMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    },
    // myClubs: [ ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_MY_BOOKS:
            // console.log(action.payload)
            return {    
                ...state,
                myBooks: action.payload,
                isLoading: false,
                // myClubs: [...action.payload.userDashboard.myClubs],
            }

        case SEARCH_BOOKS: 
            return {
                ...state,
                bookResults: [...action.payload.books],
                // UNCOMMENT FOR SAMPLE TEST bookResults: [...Array(7)].map((_, i) => action.payload.books), 
                bookSearchQuery: action.payload.searchString,
                isLoading: false,
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

        case REMOVE_BOOK_FROM_LIBRARY:
            return {
                ...state,
                myBooks: state.myBooks.filter(book => book.bookId !== action.payload.book),
                bookMessage: {
                    message: action.payload.message,
                    style: 'green darken-3 rounded',
                    timeDisplay: 5000,
                },
            }

        case GET_CLUB_BOOKS:
            return {
                ...state,
                clubBooks: [...action.payload]
            }

        case MESSAGE:
            return {
                ...state,
                bookMessage: {
                    message: action.payload.message,
                    style: action.payload.style,
                    timeDisplay: 6000,
                },
            }

        case BOOK_ERROR:
            // console.log(action.payload)
            return {
                ...state,
                bookMessage: {
                    message: action.payload,
                    style: 'red accent-4 rounded',
                    timeDisplay: 5000,
                },
            }

        case CLEAR_BOOK_MESSAGE:
            return {
                ...state,
                bookMessage: {
                    message: '',
                    style: '',
                    timeDisplay: null,
                },
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        default:
            return state
    }
} 

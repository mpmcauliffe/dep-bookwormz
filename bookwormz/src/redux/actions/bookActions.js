import axios from 'axios'
import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, 
    BOOK_ERROR, SET_LOADING, } from '../types'
import M from 'materialize-css/dist/js/materialize.min.js'


const config = { headers: { 'Content-Type': 'application/json' } }

// SEARCH BOOKs from google API
export const searchBooks = (searchString) => async dispatch => {
    setLoading()

    const urlSearchString = searchString.replace(/ /g,"_")
    try {
        const res = await axios.get(`/books/booksearch/${urlSearchString}`)
        // console.log(res.data.items)
        if (typeof res.data.items === 'undefined') {
            dispatch({ type: BOOK_ERROR })
            M.toast({ html: `Please search for something else.`, classes: 'red accent-4 rounded', displayLength: 5000 })
            return
        }

        const bundle = {
            books: res.data.items,
            searchString,
        }

        dispatch({ type: SEARCH_BOOKS, payload: bundle })

    } catch (e) {
        let eOut = 'Something went wrong. Please try later.'
        const eMessage = e.message
        console.error(eMessage)

        const eCode = eMessage.match(/\d+/)
        if (eCode !== null) {
            if (eCode[0] === '401') {
                // eOut = 'Something went wrong. Please try logging in again.'
                window.location.replace('/')
                return
            }
        }

        dispatch({ type: BOOK_ERROR, payload: eOut, })     
    }
}

export const addBook = (bookId, title) => async dispatch => {
    console.log(title)
    
    try {
        const res = await axios.post(`/books/addbook/${bookId}`, config) 
        console.log(res)
        dispatch({ type: ADD_BOOK_TO_PROFILE })

    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Something went wrong.', })
    }
}

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    

import axios from 'axios'
import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, 
    BOOK_ERROR, SET_LOADING, } from '../types'
// import M from 'materialize-css/dist/js/materialize.min.js'


// SEARCH BOOKs from google API
export const searchBooks = (searchString) => async dispatch => {
    setLoading()

    const urlSearchString = searchString.replace(/ /g,"_")
    try {
        const res = await axios.get(`/books/booksearch/${urlSearchString}`)
        // console.log(res.data.items)
        if (typeof res.data.items === 'undefined') {
            dispatch({ type: BOOK_ERROR })
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
        if (eCode[0] === '401') {
             eOut = 'Something went wrong. Please try logging in again.'
            //  setTimeout(() => {
            //       M.toast({ html: eOut, classes: 'red accent-4 rounded', displayLength: 5000 })
            //  }, 1000);
            
            window.location.replace('/')
             return
        }

        dispatch({ type: BOOK_ERROR, payload: eOut, })     
    }
}

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    

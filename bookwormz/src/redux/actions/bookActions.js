import axios from 'axios'
import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, 
    BOOK_ERROR, SET_LOADING, } from '../types'
//import { res } from '../../components/bookShelf/sample'


// SEARCH BOOKs from google API
export const searchBooks = searchString => async dispatch => {
    //setLoading()
    //http://localhost:5000
    const urlSearchString = searchString.replace(/ /g,"_")
    try {
        const res = await axios.get(`/books/booksearch/${urlSearchString}`)
        console.log(res.data.items)
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
        const eMessage = e.message
        console.error(eMessage)

        // const eCode = eMessage.match(/\d+/)[0]
        // if (eCode === '401') {
        //     const eOut = 'Something went wrong. Please try logging in again.'
        // }

        dispatch({ type: BOOK_ERROR })     
    }
}

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    


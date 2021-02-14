import axios from 'axios'
import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, 
    BOOK_ERROR, SET_LOADING, } from '../types'


const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

// SEARCH BOOKs from google API
export const searchBooks = searchString => async dispatch => {
    //setLoading()
    
    try {
        const res = await axios.get(`${API_URL}${searchString}`)
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
        console.log(e)
        dispatch({ type: BOOK_ERROR })     
    }
}

export const setLoading = dispatch => dispatch({ type: SET_LOADING })    


import axios from 'axios'
import { SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, BOOK_ERROR, } from '../types'


const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

// SEARCH BOOKs from google API
export const searchBooks = searchQuery => async dispatch => {
    try {
        const res = await axios.get(`${API_URL}${searchQuery}`)
        console.log(res.data)


    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR })     
    }
}

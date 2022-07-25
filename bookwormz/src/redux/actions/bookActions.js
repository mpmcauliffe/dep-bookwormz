import axios from 'axios'
import { GET_MY_BOOKS, SEARCH_BOOKS, ADD_BOOK_TO_PROFILE, 
    REMOVE_BOOK_FROM_LIBRARY, GET_CLUB_BOOKS, ADD_BOOK_TO_CLUB,
    MESSAGE, BOOK_ERROR, CLEAR_BOOK_MESSAGE, SET_LOADING,  } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

// GET MY BOOKS
export const getBooks = () => async dispatch => {
    setLoading()

    try {
        const res = await axios.get(`/books/mybooks/`)
        // console.log(res)
        if (res.status === 200) {
            if (typeof res.data.myBooks === 'string') { 
                dispatch({ 
                    type: MESSAGE,
                    payload: { 
                        message: `You're library is currently empty.`,
                        style: 'amber darken-4 rounded'
                    }  
                })
                return
            }

            dispatch({ type: GET_MY_BOOKS, payload: res.data, })
            return
        }
        dispatch({ type: BOOK_ERROR, payload: 'Cannot retieve your library at this time.' })
    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Cannot retieve your library at this time.' })
    }
}

// SEARCH BOOKS from google API
export const searchBooks = searchString => async dispatch => {
    setLoading()

    const urlSearchString = searchString.replace(/ /g,"_")
    try {
        const res = await axios.get(`/books/booksearch/${urlSearchString}`)
        // console.log(res.data.items)
        if (typeof res.data.items === 'undefined') {
            dispatch({ 
                type: BOOK_ERROR, 
                payload: `Please search for something else.`,
            })
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

// Add book to profile
export const addBook = bookInfo => async dispatch => {       
    try {
        const res = await axios.post(`/books/addbook/`, bookInfo, config) 
        //console.log(res)

        if (res.data.message === 'double') {
            console.log(`%cBOOK ALREADY IN LIBRARY: %c${bookInfo.title}`, 'font-weight: bold', 'color: orange')
            dispatch({ 
                type: MESSAGE, 
                payload: { 
                    book: res.data, 
                    message: `${bookInfo.title} was previously added to your books.`, 
                    style: 'amber darken-4 rounded'
                } 
            })
            return
        }

        if (res.status === 200) {
            console.log(`%cADD: %c${bookInfo.title}`, 'font-weight: bold', 'color: green')
            dispatch({ 
                type: ADD_BOOK_TO_PROFILE, 
                payload: { book: res.data, message: `${bookInfo.title} added to your books.` } 
            })
            return
        }
        // dispatch({ type: BOOK_ERROR, payload: 'Request could not be completed.' })

    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Request could not be completed.' })
    }
}

// REMOVE BOOK
export const removeBook = (bookId, title) => async dispatch => {
    try {
        const res = await axios.delete(`/books/deletebook/${bookId}`)

        if (res.status === 200) {
            console.log(`%cREMOVE: %c${title}`, 'font-weight: bold', 'color: red')
            dispatch({ 
                type: REMOVE_BOOK_FROM_LIBRARY, 
                payload: { book: res.data.removed, message: `${title} was removed from your books.` } 
            })
            return
        }
    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Book could not be deleted at this time.' })
    }
}

// GET CLUB BOOKS
export const getClubBooks = clubId => async dispatch => {
    try {
        const res = await axios.get(`/books/getclubbooks/${clubId}`)

        // console.log(res.data)
        if (res.status === 200) {
            dispatch({ 
                type: GET_CLUB_BOOKS, 
                payload: res.data, 
            })
            return
        }

    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Could not retrieve club library.' })
    }
}

export const addBookToClub = (clubId, book) => async dispatch => {
    try {console.log(book.bookId)
        const res = await axios.post(`/books/addbooktoclub/${clubId}`, { bookId: book.bookId })

        if (res.status === 200) {
            if (res.data.message === 'double') {
                console.log(`%cBOOK ALREADY IN CLUB LIBRARY: %c${book.title}`, 'font-weight: bold', 'color: orange')
                dispatch({ 
                    type: MESSAGE, 
                    payload: { 
                        book: res.data, 
                        message: `${book.title} is already in this club's library.`, 
                        style: 'amber darken-4 rounded'
                    } 
                })
                return
            }
            console.log(`%cADD: %c${book.title} %cto club`,  'font-weight: bold', 'color: green', 'font-weight: normal')
            
            dispatch({ 
                type: ADD_BOOK_TO_CLUB, 
                payload: { book, message: `${book.title} added to club library.` } 
            })
            return
        }

    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Could not add book to library.' })
    }
}

export const removeBookFromClub = (clubId, book) => async dispatch => {
    try {// console.log(book.bookId)
        const res = await axios.put(`/books/removebookfromclub/${clubId}`, { bookId: book.bookId })

        if (res.data.message === 'removed') {
            console.log(`%cREMOVE: %c${book.title} %cfrom club`,  'font-weight: bold', 'color: green', 'font-weight: normal')
            
            dispatch({ 
                type: ADD_BOOK_TO_CLUB, 
                payload: { book, message: `${book.title} removed from club library.` } 
            })
            return
        }

    } catch (e) {
        console.log(e)
        dispatch({ type: BOOK_ERROR, payload: 'Could not remove book to library.' })
    }
}

export const clearBookMessage = () => dispatch => { dispatch({ type: CLEAR_BOOK_MESSAGE }) }

export const setLoading = () => dispatch => { dispatch({ type: SET_LOADING }) }    

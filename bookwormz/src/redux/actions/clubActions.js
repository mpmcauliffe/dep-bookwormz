import axios from 'axios'
import {  GET_CLUB, GET_ALL_CLUBS, CREATE_CLUB, SEARCH_CLUBS,
     CLUB_MESSAGE, CLEAR_CLUB_MESSAGE, } from '../types'


export const sendClubMessage = messageSettings => dispatch => {
    dispatch({ type: CLUB_MESSAGE, payload: { ...messageSettings } })
}

export const clearClubMessage = () => dispatch => { dispatch({ type: CLEAR_CLUB_MESSAGE }) }

// export const addBook = bookInfo => async dispatch => {       
//     try {
//         const res = await axios.post(`/books/addbook/`, bookInfo, config) 
//         //console.log(res)

//         if (res.data.message === 'double') {
//             console.log(`%cBOOK ALREADY IN LIBRARY: %c${bookInfo.title}`, 'font-weight: bold', 'color: orange')
//             dispatch({ 
//                 type: MESSAGE, 
//                 payload: { 
//                     book: res.data, 
//                     message: `${bookInfo.title} was previously added to your books.`, 
//                     style: 'amber darken-4 rounded'
//                 } 
//             })
//             return
//         }

//         if (res.status === 200) {
//             console.log(`%cADD: %c${bookInfo.title}`, 'font-weight: bold', 'color: green')
//             dispatch({ 
//                 type: ADD_BOOK_TO_PROFILE, 
//                 payload: { book: res.data, message: `${bookInfo.title} added to your books.` } 
//             })
//             return
//         }
//         dispatch({ type: BOOK_ERROR, payload: 'Request could not be completed.' })

//     } catch (e) {
//         console.log(e)
//         dispatch({ type: BOOK_ERROR, payload: 'Request could not be completed.' })
//     }
// }

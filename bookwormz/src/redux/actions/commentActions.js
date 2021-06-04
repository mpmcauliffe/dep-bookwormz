import axios from 'axios'
import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS, EDIT_COMMENT, 
    RESET_COMMENTS, COMMENT_MESSAGE, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

export const createComment = () => async dispatch => {

}

export const replyToComment = (anchor, origin) => async dispatch => {

}

export const deleteComment = () => async dispatch => {

}

export const getComments = clubId => async dispatch => {
    try {
        const res = await axios.get(`/comments/getcomments/${clubId}`)

        // console.log(res.data)
        if (res.status === 200) {
            dispatch({ 
                type: GET_COMMENTS, 
                payload: res.data, 
            })
            return
        }

    } catch (e) {
        console.log(e)
        dispatch({ type: COMMENT_MESSAGE, payload: 'Could not retrieve comments.' })
    }
}

export const editComment = () => async dispatch => {
    
}

export const resetComments = () => dispatch => { dispatch({ type: RESET_COMMENTS, }) }


// STRICTLY TO FILL CLUBS WITH DUMMY COMMENTS
export const fillComments = () => async dispatch => {
    try {
        console.log('fill comments')
        const res = await axios.put(`/comments/fillcomments/`)
        console.log(res.data)

        if (res.status === 200) {
            dispatch({ 
                type: COMMENT_MESSAGE, 
                payload: {
                    message: 'Comments added. Check the database.',
                    style: 'green darken-3 rounded', 
                    timeDisplay: 5000,
                } 
            })
        }

    } catch (e) {
        console.log(e)
        dispatch({ 
            type: COMMENT_MESSAGE, 
            payload: {
                message: 'Comments may not have been added. Check the database.',
                style: 'red accent-4 rounded', 
                timeDisplay: 5000,
            } 
        })
    }
}

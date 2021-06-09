import axios from 'axios'
import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS, EDIT_COMMENT, 
    RESET_COMMENTS, COMMENT_MESSAGE, CLEAR_COMMENT_MESSAGE, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

export const createComment = () => async dispatch => {

}

export const postComment = (anchor, origin, content, subject, clubId, locator) => async dispatch => {
    if (!content) {
        dispatch({ 
            type: COMMENT_MESSAGE, 
            payload: { message: `Comments and replies cannot be empty`, style: 'amber darken-4 rounded' }})
        return
    }

    try {
        const commentItems = { anchor, origin, content, subject, locator, }
        // console.log(anchor)
        const res = await axios.put(`/comments/postcomment/${clubId}`, commentItems, config)
        console.log(res.data)
    } catch (e) {
        console.log(e)
        dispatch({ 
            type: COMMENT_MESSAGE, 
            payload: { 
                message: `Comment could not be posted`,
                style: 'red accent-4 rounded'
            }})
    }
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

export const clearCommentMessage = () => dispatch => { dispatch({ type: CLEAR_COMMENT_MESSAGE }) }

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


// payload: { 
//     message: `You're library is currently empty.`,
//     style: 'amber darken-4 rounded'
// }
import axios from 'axios'
import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS, EDIT_COMMENT, COMMENT_MESSAGE, } from '../types'


export const createComment = () => async dispatch => {

}

export const deleteComment = () => async dispatch => {

}

export const getComments = () => async dispatch => {

}

export const editComment = () => async dispatch => {
    
}

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

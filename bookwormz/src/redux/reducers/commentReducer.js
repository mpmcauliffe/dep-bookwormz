import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS, EDIT_COMMENT, 
    RESET_COMMENTS, COMMENT_MESSAGE, CLEAR_COMMENT_MESSAGE, } from '../types'


const initialState = {

    comments: [ ],
    commentMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_COMMENT: 
            return {
                ...state,
                comments: action.payload,
            }
        
        case DELETE_COMMENT: 
            return {
                ...state,
            }

        case GET_COMMENTS: 
            // console.log(action.payload)
            return {
                ...state,
                comments: [...action.payload],
            }

        case RESET_COMMENTS: 
            return {
                ...state,
                comments: [ ],
            }

        case EDIT_COMMENT: 
            return {
                ...state,
            }

        case COMMENT_MESSAGE:
            return {
                ...state,
                commentMessage: {
                    message: action.payload.message,
                    style: action.payload.style,
                    timeDisplay: 6000,
                },
            }

        case CLEAR_COMMENT_MESSAGE:
            return {
                ...state,
                commentMessage: {
                    message: '',
                    style: '',
                    timeDisplay: null,
                },
            }

        default:
            return state
    }
}

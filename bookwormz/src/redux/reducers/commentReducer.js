import { REFRESH_COMMENTS, GET_COMMENTS, RESET_COMMENTS, TOGGLE_NEW_INPUT,
    COMMENT_MESSAGE, CLEAR_COMMENT_MESSAGE, } from '../types'


const initialState = {
    comments: [ ],
    showNewCommentInput: false,
    commentMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case REFRESH_COMMENTS: 
            return {
                ...state,
                comments: action.payload,
                showNewCommentInput: false,
            }

        case GET_COMMENTS: 
            // console.log(action.payload)
            return {
                ...state,
                comments: [...action.payload],
                showNewCommentInput: false,
            }

        case RESET_COMMENTS: 
            return {
                ...state,
                comments: [ ],
                showNewCommentInput: false,
            }

        case TOGGLE_NEW_INPUT:
            return {
                ...state,
                showNewCommentInput: !state.showNewCommentInput,
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

import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS, EDIT_COMMENT, 
    RESET_COMMENTS, COMMENT_MESSAGE, } from '../types'


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

        default:
            return state
    }
}

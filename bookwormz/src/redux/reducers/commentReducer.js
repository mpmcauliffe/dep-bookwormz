import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS, EDIT_COMMENT, } from '../types'


const initialState = { }

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
            return {
                ...state,
            }

        case EDIT_COMMENT: 
            return {
                ...state,
            }

        default:
            return state
    }
}

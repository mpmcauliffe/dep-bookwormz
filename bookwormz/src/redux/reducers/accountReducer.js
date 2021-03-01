import { UPDATE_PROFILE_PICTURE, UPDATE_DISPLAY_NAME,
    UPDATE_EMAIL_ADDRESS, DELETE_ACCOUNT, } from '../types'


const initialState = {

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PROFILE_PICTURE:
            return {
                ...state,
            }

        case UPDATE_DISPLAY_NAME:
            return {
                ...state,
            }

        case UPDATE_EMAIL_ADDRESS:
            return {
                ...state,
            }

        case DELETE_ACCOUNT:
            return {
                ...state,
            }

        default:
            return state
    }
}

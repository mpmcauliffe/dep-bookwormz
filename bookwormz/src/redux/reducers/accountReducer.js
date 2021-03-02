import { GET_USER_INFO, UPDATE_PROFILE_PICTURE, UPDATE_DISPLAY_NAME,
    UPDATE_EMAIL_ADDRESS, DELETE_ACCOUNT, USER_MESSAGE, } from '../types'


const initialState = {
    displayName: '',
    image: '',
    secondDisplayName: '',
    secondaryImage: '',
    message: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                image: action.payload.image,
                secondDisplayName: action.payload.secondDisplayName,
                secondaryImage: action.payload.secondaryImage,
            }

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

import { GET_USER_INFO, UPDATE_USER_INFO, DELETE_ACCOUNT, 
    USER_MESSAGE, } from '../types'


const initialState = {
    displayName: '',
    image: '',
    // secondaryDisplayName: '',
    secondaryImage: '',
    message: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_INFO:
            //console.log(action.payload.userInfo.image)
            return {
                ...state,
                displayName: action.payload.userInfo.displayName,
                image: action.payload.userInfo.image,
                // secondaryDisplayName: action.payload.userInfo.secondaryDisplayName,
                secondaryImage: action.payload.userInfo.secondaryImage,
            }

        case UPDATE_USER_INFO:
            return {
                ...state,
            }

        default:
            return state
    }
}

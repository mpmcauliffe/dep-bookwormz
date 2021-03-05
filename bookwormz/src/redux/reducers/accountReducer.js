import { GET_USER_INFO, DELETE_ACCOUNT, USER_MESSAGE, } from '../types'


const initialState = {
    displayName: '',
    image: '',
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
            }

        case DELETE_ACCOUNT:
            return {
                ...state,
            }

        default:
            return state
    }
}

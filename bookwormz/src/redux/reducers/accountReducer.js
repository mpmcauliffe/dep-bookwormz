import { GET_USER_INFO, USER_MESSAGE, CLEAR_USER_MESSAGE, } from '../types'


const initialState = {
    displayName: '',
    image: '',
    secondaryImage: '',
    userId: '',
    userMessage: {
        message: '',
        style: '',
        timeDisplay: null,
    },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_INFO:
            console.log(action.payload.userInfo)
            return {
                ...state,
                displayName: action.payload.userInfo.displayName,
                image: action.payload.userInfo.image,
                userId: action.payload.userInfo.userId,
                userMessage: {
                    message: action.payload.message,
                    style: 'green darken-3 rounded',
                    timeDisplay: 5000,
                }
            }

        case USER_MESSAGE:
            return {
                ...state,
                userMessage: {
                    message: action.payload,
                    style: 'red accent-4 rounded',
                    timeDisplay: 5000,
                }
            }

        case CLEAR_USER_MESSAGE:
            return {
                ...state,
                userMessage: {
                    message: '',
                    style: '',
                    timeDisplay: null,
                },
            }
        

        default:
            return state
    }
}

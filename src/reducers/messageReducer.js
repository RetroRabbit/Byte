const CURRENT_MESSAGE = 'CURRENT_MESSAGE'
const USERNAME = 'USERNAME'
const TIME_STAMP = 'TIME_STAMP'
const FROM_ME = 'FROM_ME'

const initialState = {
    username: "",
    message: "",
    timeStamp: "",
    fromMe: false
}


export default (state = initialState, action) => {
    switch (action.type){
        case 'CURRENT_MESSAGE':
        
            return {
                ...state,
                username: action.username,
                message: action.currentmessage,
                
            }
        case FROM_ME:
            return {
                ...state,
                fromMe: action.payload.fromMe
            }
        case TIME_STAMP:
            return {
                ...state,
               timeStamp: action.payload.timeStamp
            }
        default:
            return state
    }
}
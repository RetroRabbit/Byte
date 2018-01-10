const LOGIN_TO_HOME = 'LOGIN_TO_HOME'
const SET_PASSWORD = 'SET_PASSWORD'


const initialState = {
    userName: "",
    password: "",
    userImage: ""
}


export function setName(username) { 
    console.log(username)
    return {
        type: LOGIN_TO_HOME,
            payload: username           
    } 
}

export function setPassword(password) {
    return {
        type: SET_PASSWORD,
            payload: password           
    } 
}

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN_TO_HOME:
            return {
                ...state,
                userName: action.payload.username,
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }

        

        default:
            return state
    }
}
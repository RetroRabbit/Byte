const LOGIN_TO_HOME = 'LOGIN_TO_HOME'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_EMAIL = 'SET_EMAIL'

const initialState = {
    userName: "1",
    password: "2",
    userImage: "",
    email: "3"
}


export function setName(username) { 
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

export function setEmail(email) {
    return {
        type: SET_EMAIL,
            payload: email           
    } 
}

export function setValues(username, password) {
    return {
        type: LOGIN_TO_HOME,
        payload: {
            username,
            password
        }
    } 
}

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN_TO_HOME:
            return {
                ...state,
                userName: action.payload.username,
                password: action.payload.password,
                
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }

        

        default:
            return state
    }
}
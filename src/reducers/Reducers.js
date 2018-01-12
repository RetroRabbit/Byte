const LOGIN_TO_HOME = 'LOGIN_TO_HOME'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_EMAIL = 'SET_EMAIL'



const initialState = {
    userName: "GIVE",
    password: "US",
    userImage: "",
    email: "POINTS"
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

export function setValuesE(username, password,email) {
    return {
        type: SET_EMAIL,
        payload: {
            username,
            password,
            email
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
                userName: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
            }

        

        default:
            return state
    }
}
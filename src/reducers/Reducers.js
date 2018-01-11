const LOGIN_TO_HOME = 'LOGIN_TO_HOME'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_EMAIL = 'SET_EMAIL'
const PROFILE_PIC = 'PROFILE_PIC';
const LOG_OUT = 'LOG_OUT'
const CHANGE_DET = 'CHANGE_DET';


const initialState = {
    userName: "GIVE",
    password: "US",
    email: "POINTS",
    userImage: "C:\\Users\\Zac\\Pictures\\Props"
}


// export function setName(username) { 
//     return {
//         type: LOGIN_TO_HOME,
//             payload: username           
//     } 
// }

// export function setPassword(password) {
//     return {
//         type: SET_PASSWORD,
//             payload: password           
//     } 
// }

// export function setEmail(email) {
//     return {
//         type: SET_EMAIL,
//             payload: email           
//     } 
// }

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

export function changesE(username, email) {
    return {
        type: CHANGE_DET,
        payload: {
            username,
            email
        }
    } 
}


export function setImage(userimage) {
    return {
        type: PROFILE_PIC,
        payload: {
            userimage
        }
    } 
}

export function logout() {
    return {
        type: LOG_OUT ,  
        payload: initialState
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
        case PROFILE_PIC:
            return {
                ...state,
                userImage:action.payload.userimage
            }
        case LOG_OUT:
            return {
                initialState
            }
        case CHANGE_DET:
            return {
                ...state,
                userName: action.payload.username,
                email: action.payload.email
            }

        

        default:
            return state
    }
}
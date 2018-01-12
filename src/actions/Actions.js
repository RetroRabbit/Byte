export const LoginToReg = () => {
    return{
        type: 'GO_TO_REG'
    }
 }
 
 export const LoginToHome = (username, password) => {
    return{
        type: 'LOGIN_TO_HOME',
        payload: {
            username,
            password
        }
    }
 }

 export const RegisterThis = (username, password, email) => {
    return{
        type: 'SET_EMAIL',
        payload: {
            username,
            password,
            email
        }
    }
 }

 export const setMessage = (username, current_messagel) => {
    return{
        type: 'CURRENT_MESSAGE',
        payload: {
            username,
            current_messagel
        }
    }
 }

 export const setTimeStamp = (timeStamp) => {
    return{
        type: 'TIME_STAMP',
        payload: {
            timeStamp
        }
    }
 }

 export const setFromMe = (fromMe) => {
    return{
        type: 'FROM_ME',
        payload: {
            fromMe
        }
    }
 }

 export const getMessage = (username, message) => {
    return{
        type: 'CURRENT_MESSAGE',
        payload: {
            username,
            message
        }
    }
 }
 export const PPic = (userimage) => {
     return {
         type: 'PROFILE_PIC',
         payload: {
            userimage
        } 
    }
 }

 export const Friends = (friend) => {
     return {
         type: 'SET_FRIEND',
         payload: {
             friend
         }
     }
 }

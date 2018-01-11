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

 export const PPic = (userimage) => {
     return {
         type: 'PROFILE_PIC',
         payload: {
            userimage
        } 
    }
 }
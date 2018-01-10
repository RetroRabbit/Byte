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
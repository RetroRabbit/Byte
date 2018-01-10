export const LoginToReg = () => {
    return{
        type: 'GO_TO_REG'
    }
 }
 
 export const RegToSecondReg = () => {
    return{
        type: 'GO_TO__SECOND_REG'
    }
 }
 
 export const RegToThirdReg = () => {
    return{
        type: 'GO_TO_THIRD_REG'
    }
 }
 
 export const LoginToHome = (username, password) => {
    return{
        type: 'GO_TO_HOME',
        payload: {
            username,
            password
        }
    }
 }
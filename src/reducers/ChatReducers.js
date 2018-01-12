

const CURRENT_MESSAGE = 'CURRENT_MESSAGE'
const USERNAME = 'USERNAME'
const TIME_STAMP = 'TIME_STAMP'
const FROM_ME = 'FROM_ME'


export const setMessage=(user_name, current_message)=> { 
  
    return dispatch=> {
             dispatch({
            type: 'CURRENT_MESSAGE',
            username:user_name,
            currentmessage:current_message       
        }
        )          
    } 
}

export function setTimeStamp(timeStamp) {
    return {
        type: setTimeStamp,
            payload: timeStamp           
    } 
}
export function setFromMe(fromMe)
{
    return {
        type: FROM_ME,
        payload: fromMe
    }
}

export function getMessage (message){
   return{
       type: CURRENT_MESSAGE,
       payload: 
      
        message
       
   }
}

export function getFromMe(fromMe) {
   return{
       type: FROM_ME,
       payload: 
           fromMe
   }
}


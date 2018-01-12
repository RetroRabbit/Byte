var data = require('../data')

var list = data.chatItem


const initialState = {
    chatsList:list
}


//creating a reducer
export default (state = initialState, action) => {
     console.log('State is Changed')
    switch (action.type) {
            case 'GET_CHAT': {
                //This is where you do yourr rest calls to the api
                   return{
                    ...state,
                    chatsList:list
                    }    
            }
            default:
                    return state;
    }
}
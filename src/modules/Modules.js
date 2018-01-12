import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from '../reducers/Reducers'
import messages from '../reducers/messageReducer'

export default combineReducers({
   routing: routerReducer,
   login: loginReducer,
   messages

})
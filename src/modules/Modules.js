import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from '../reducers/Reducers'
import chats from '../reducers/chatsReducer'

export default combineReducers({
   routing: routerReducer,
   login: loginReducer,
   chats
})
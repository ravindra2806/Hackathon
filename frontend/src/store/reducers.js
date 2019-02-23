import { adminReducer } from '../state/admin'
import { login } from '../state/login';
import { combineReducers } from 'redux'
const rootReducer = combineReducers({adminReducer, login})

export default rootReducer;
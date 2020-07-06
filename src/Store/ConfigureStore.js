import { combineReducers } from 'redux';
import loginReducer from '../Screens/Login/LoginReducer';
const allReducers= combineReducers({
    loginReducer: loginReducer,
  });

export default allReducers;
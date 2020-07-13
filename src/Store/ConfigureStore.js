import { combineReducers } from 'redux';
import loginReducer from '../Screens/Login/LoginReducer';
import searchReducer from '../Screens/AddApartmentBySearch/SearchReducer'
const allReducers= combineReducers({
    loginReducer,
    searchReducer
  });

export default allReducers;
import {MOBILE_NUMBER_CHANGE} from '../Login/constant'
import {Alert} from 'react-native'
const initialState = {
    mobileNumber: "7777"
 };
    const loginReducer = (state = initialState, action) => {
        
        
        switch(action.type) {
        case 'MOBILE_NUMBER_CHANGE':
        return {
        ...state.loginReducer,
        mobileNumber:action.payload
        };
        default:
        return state;
        
        }
    }

    export default loginReducer;
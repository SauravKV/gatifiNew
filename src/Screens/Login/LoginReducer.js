import {MOBILE_NUMBER_CHANGE} from '../Login/constant'
import {Alert} from 'react-native'
const initialState = {
    mobileNumber: "8888888888"

    };
    const loginReducer = (state = initialState, action) => {
        
        
        switch(action.type) {
        case 'MOBILE_NUMBER_CHANGE':
        
        return {
        ...state,
        mobileNumber:action.payload
        };
        default:
        //Alert.alert(state.mobileNumber);
        return state;
        
        }
    }

    export default loginReducer;
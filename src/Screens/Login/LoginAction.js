import {MOBILE_NUMBER_CHANGE} from '../Login/constant'
import {Alert} from 'react-native'

export function mobileNumberChange(mobileNumber) {
   // Alert.alert("Action"+mobileNumber);
    return {
    type: 'MOBILE_NUMBER_CHANGE',
    payload: mobileNumber
    }
}
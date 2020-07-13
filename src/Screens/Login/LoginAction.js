import {MOBILE_NUMBER_CHANGE} from '../Login/constant'

export function mobileNumberChange(mobileNumber) {
    return {
    type: 'MOBILE_NUMBER_CHANGE',
    payload: mobileNumber
    }
}
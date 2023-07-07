import { register } from "../../actions/User/userAction";
import { registerConstants, userConstants , otpConstants} from "../../constant/constant";
import { initState as registerState } from "./registerReducer"

// console.log("r = "  + registerState.registered)

const initState = {
    user:[],
    authenticate:false,
    authenticating:false,
    isRegistered:registerState.registered,
};

export default (state = initState,action)=>{
 
    // console.log(action , action);

    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break;
        case userConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role,
                authenticate: true,
                authenticating:false
            }
            break;
        case userConstants.LOGOUT_REQUEST:
            state={
                ...initState
            }
            break;
        case otpConstants.OTP_SUCCESS:
            state={
                user: {
                    fullname:initState.user.fullname,
                    email:initState.user.email,
                    mobileNumber:initState.user.mobileNumber,
                    company: initState.user.company,
                    postalCode:initState.user.pincode,
                    otpsent:action.payload.otpsent,
                    otp:action.payload.otp
                }
            }
            console.log(state , action.payload.otpsent);
            break;
    }

    return state;
}
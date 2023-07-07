import { registerConstants } from "../../constant/constant"

export const initState = {
    user:[],
    token:"",
    message: '',
    loading: false,
    registered: false,
    otpverified:false
}

export default (state = initState, action) => {
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            state = {
                ...state,
                loading: true,
                registered: false,
            }
            break;
        case registerConstants.REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                registered: true,
                user: action.payload.user,
                token:action.payload.token,
                otpverified:false,
                authenticate: true,
            }
            break;
        case registerConstants.REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                registered: false,
                error: action.payload.error
            }
    }

    return state;
}
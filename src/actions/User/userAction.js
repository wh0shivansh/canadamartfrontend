import { useDispatch } from "react-redux";
import {
  registerConstants,
  userConstants,
  otpConstants,
} from "../../constant/constant";
import axios from "../../helpers/axios";

export const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: userConstants.LOGIN_REQUEST });
    const res = await axios.post(`/signin`, {
      ...user,
    });
    if (res.status === 200) {
      // console.log(res.data);
      const user = res.data;
      const token = user.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);
      // console.log(user.user);
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: userConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};


export const loginWithOTP = (mobileNumber) => {
    const mno = mobileNumber.split("91")[1];
    console.log(mno);
  return async (dispatch) => {
    const res = await axios.post(`/signinotp`, {
      mobileNumber:mno,
    });
    if (res.status === 200) {
      // console.log(res.data);
      const user = res.data;
      const token = user.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);
      // console.log(user.user);
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: userConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const register = (user) => {
    console.log(user);
  return async (dispatch) => {
    dispatch({ type: registerConstants.REGISTER_REQUEST });
    const res = await axios.post(`/signup`, {
      ...user,
    });
    if (res.status === 200) {
      const { user, token } = res.data;
      console.log("registered", res.data);
      dispatch({
        type: registerConstants.REGISTER_SUCCESS,
        payload: {
          user: user,
          token: token,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: registerConstants.REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
          role,
        },
      });
    } else {
      dispatch({
        type: userConstants.LOGIN_FAILURE,
        payload: {
          error: "Failed to login",
        },
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    localStorage.clear();
    
    dispatch({
      type: userConstants.LOGOUT_REQUEST,
    });
  };
};

export const sendotp = (mobileNumber) => {
  console.log(mobileNumber);

  return async (dispatch) => {
    dispatch({ type: otpConstants.OTP_REQUEST });
    const res = await axios.post(`/mobileverification`, {
      mobileNumber: `+91${mobileNumber}`,
    });
    if (res.status === 200) {
      const { otp, message } = res.data;
      dispatch({
        type: otpConstants.OTP_SUCCESS,
        payload: {
          otpsent: true,
          otp: otp,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: otpConstants.OTP_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

// export const sendotp = (mobileNumber) => {
//     const history = useHistory();
//     return async (dispatch) => {
//       dispatch({ type: otpConstants.OTP_REQUEST });

//       try {
//         const res = await axios.post(`/mobileverification`, {
//           mobileNumber: `+91${mobileNumber}`,
//         });

//         if (res.status === 200) {
//           const { otp, message } = res.data;
//           dispatch({
//             type: otpConstants.OTP_SUCCESS,
//             payload: {
//               otpsent: true,
//               otp: otp,
//             },
//           });

//           // Redirect to "/enterotp" after successful dispatch
//           history.push("/enterotp");
//         } else {
//           if (res.status === 400 || res.status === 401) {
//             dispatch({
//               type: otpConstants.OTP_FAILURE,
//               payload: { error: res.data.error },
//             });
//           }
//         }
//       } catch (error) {
//         // Handle any errors that occur during the API request
//         console.log(error);
//       }
//     };
//   };

import React , {useState , useEffect }from "react";
import { useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { register } from "../actions/User/userAction";
import { useNavigate } from "react-router-dom";

const EnterOTP = () => {
  const [otp1,setotp1] = useState();
  const [otp2,setotp2] = useState();
  const [otp3,setotp3] = useState();
  const [otp4,setotp4] = useState();
  const state =  useLocation();
  const {fullname,email,mobileNumber,company, postalCode,otp } = state.state || {};
  const auth = useSelector(state => state.user);
  console.log("state",state)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("OTP = " + auth?.user.otp);

  const handleContinue = ()=> {
    const UserOtp = `${otp1}${otp2}${otp3}${otp4}`
    const user = {
      fullname,
      email,
      mobileNumber,
      company, 
      postalCode,
      otp: auth?.user.otp ? auth?.user.otp : '',
    }

     console.log(user,"0000000000000000");

    if(UserOtp.toString() === user.otp.toString()){
      dispatch(register(user)).then(() => {
        navigate("/", {
          state: {
          },
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the action dispatch
        console.log(error);
      });
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pencil">
        <div className="max-w-md px-7 py-9 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-3 text-left">Enter OTP</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold mb-3">Verification Code</h2>
          <p className="text-center text-lg font-medium leading-6 mb-6">
            Please enter the verification code that we have sent to your mobile number
          </p>
          <div className="flex justify-center space-x-4 mb-3">
            <input
              type="text"
              maxLength={1}
              className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
              onChange={(e)=>{setotp1(e.target.value)}}
            />
            <input
              type="text"
              maxLength={1}
              className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
              onChange={(e)=>{setotp2(e.target.value)}}
            />
            <input
              type="text"
              maxLength={1}
              className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
              onChange={(e)=>{setotp3(e.target.value)}}
            />
            <input
              type="text"
              maxLength={1}
              className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
              onChange={(e)=>{setotp4(e.target.value)}}
            />
          </div>
          <button className="w-full bg-darkblue text-white font-normal py-2 px-4 rounded mt-6" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;

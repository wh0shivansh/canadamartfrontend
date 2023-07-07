import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import GoogleIcon from '../../assets/google.png';
import FbIcon from '../../assets/fb.png';
import Spinner from '../../components/Spinner/Spinner';
import MsgBox from '../../components/MsgBox/MsgBox';
import Visible from '../../assets/visible.png';
import Hidden from '../../assets/hidden.png';

import { login,sendotp } from '../../actions/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import {redirect} from 'react-router-dom';


const Login = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [otpScreen, SetOtpScreen] = useState(false);
    const [otp, SetOtp] = useState("");
    
    const auth = useSelector(state => state.user);
    const auth2 = useSelector(state => state.register);

    const navigate = useNavigate();
    useEffect(()=>{
        if(auth.authenticate){
            navigate('/');
        }
    },[auth.authenticate])
    
    const dispatch = useDispatch();
    
    const userLogin = (e) => {
        e.preventDefault();
        // const user = {
        //     email,
        //     password
        // }
        // dispatch(login(user));
        dispatch(sendotp(mobileNumber))
        .then(() => {
            navigate("/enterloginotp", {
              state: {  
                mobileNumber
              },
            });
          })
          .catch((error) => {
            // Handle any errors that occur during the action dispatch
            console.log(error);
          });
    }


    return (
        <div className='contact-us flex items-center justify-center h-screen bg-whitesmoke'>
            <div id="recaptcha-container"></div>
            {!otpScreen &&
                <div className="flex sm:flex-row-reverse lg:flex-row-reverse flex-col-reverse lg:w-8/12 h-5/6 bg-white shadow-md sm:w-10/12 w-full lg:scale-1 sm:scale-1 scale-90 ">
                    <div className=" w-full lg:w-1/2 sm:w-1/2 h-full flex flex-col items-center justify-center ">
                        <form onSubmit={userLogin} className='flex flex-col items-center justify-center w-8/12'>
                            {/* SUCCESS/ERROR MSG BOX  */}
                            {successMsg &&
                                <MsgBox color={'green'} text={successMsg} />
                            }
                            {errorMsg &&
                                <MsgBox color={'red'} text={errorMsg} />
                            }
                            {/* SUCCESS/ERROR MSG BOX  */}

                            {mobileNumber == "" &&
                                <span className='relative w-full h-12 flex items-center m-4 shadow'>
                                    <input className='h-full w-full bg-blue rounded-md bg-input pl-4' value={email} type="text" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} required/>
                                    <button type='button' onClick={() => { setEmail("") }} className='scale-95 absolute right-4 border h-4 w-4
                            rounded-xl flex items-center justify-center'><p className='mb-1 mt-px'>x</p></button>
                                </span>
                            }
                            {mobileNumber == "" &&
                                <span className='relative  w-full h-12 flex items-center mb-4 shadow'>
                                    <input className='h-full w-full bg-blue rounded-md bg-input pl-4' type={showPassword ? "text" : "password"} placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} required/>
                                    <button type='button' onClick={() => {
                                        setShowPassword(!showPassword);
                                    }} className='absolute right-4'>{showPassword ? <img src={Visible} className='w-5'></img> : <img className='w-5' src={Hidden}></img>}</button>
                                </span>
                            }
                            {(email == "") &&
                                <span className='flex items-center justify-center m-1'>
                                    <span className='bg-gray w-20 h-px mr-2'></span>
                                    <span className='text-sm text-gray mb-2'>or login with</span>
                                    <span className='bg-gray w-20 h-px ml-2'></span>
                                </span>
                            }
                            {email == "" &&
                                <PhoneInput  value={mobileNumber} onChange={setMobileNumber} />
                            }

                            <div className='flex justify-end w-full text mt-2 text-gray'><Link to={'/forgot-password'}>Recover Password?</Link></div>
                            <button type='submit' className='w-full h-12 flex items-center justify-center bg-button text-white rounded-md mt-3' >
                                {loading ? <Spinner /> : (mobileNumber != "" ? "Send Otp and Verify" : "Sign In")}
                            </button>
                            <div className='flex justify-start w-full h-5 items-center mt-2'>Don't have an account?&nbsp;<Link className='text-button' to={'/signup'}>Register here</Link></div>

                        </form>
                        <div className='flex justify-around mt-10 w-8/12'>
                            <button className='flex justify-center items-center h-10 w-5/12 shadow-md rounded-md border border-gray'>
                                <img className='w-7 mr-1' src={GoogleIcon} alt="" />
                                Google
                            </button>
                            <button className='flex justify-center items-center h-10 w-5/12 shadow-md rounded-md border border-gray'>
                                <img className='w-5 mr-2' src={FbIcon} alt="" />

                                Facebook</button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/2 bg-pink flex justify-center items-center font-bold text-5xl sm:h-full lg:h-full h-20 flex sm:flex-col lg:flex-col ">
                        <p className='flex w-full sm:text-left lg:ml-40 sm:text-4xl text-3xl ml-10'>Sign In to</p>
                        <span className='h-2'></span>
                        <p className='flex w-full sm:text-left lg:ml-40 sm:text-4xl text-3xl mr-'>Shop Direct</p>
                    </div>
                </div>
            }


            {
                otpScreen &&
                <div className="flex sm:flex-row-reverse lg:flex-row-reverse flex-col-reverse lg:w-8/12 h-5/6 bg-white shadow-md sm:w-10/12 w-full lg:scale-1 sm:scale-1 scale-90 ">
                    <div className=" w-full lg:w-1/2 sm:w-1/2 h-full flex flex-col items-center justify-center ">
                        <form className='flex flex-col items-center justify-center w-8/12'>
                            <span className='relative  w-full h-12 flex items-center mb-4 shadow'>
                                <input className='h-full w-full bg-blue rounded-md bg-input pl-4' type="text" placeholder='Enter OTP' onChange={(e) => { SetOtp(e.target.value) }} />
                                <button className='absolute right-5'>x</button>
                            </span>
                            <button className='w-full h-12 flex items-center justify-center bg-button text-white rounded-md mt-3' type='submit'>{"Verify OTP"}</button>
                        </form>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/2 bg-pink flex justify-center items-center font-bold text-5xl sm:h-full lg:h-full h-20 flex sm:flex-col lg:flex-col ">
                        <p className='flex w-full sm:text-left lg:ml-40 sm:text-4xl text-3xl ml-10'>Veriy Your Otp</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login
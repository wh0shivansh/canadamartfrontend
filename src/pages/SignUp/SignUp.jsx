import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MsgBox from "../../components/MsgBox/MsgBox";
import Visible from "../../assets/visible.png";
import Hidden from "../../assets/hidden.png";
import { useDispatch, useSelector } from "react-redux";
import { register, sendotp } from "../../actions/User/userAction";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // const [show, setShowPassword] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  // const user = useSelector((state) => state.register); // register = reducer Name
  const state = useSelector((state) => state); // register = reducer Name
  const auth = useSelector((state) => state.user);

  useEffect(() => {
    console.log('state ok',state)
    if(auth.authenticate){
        navigate('/');
    }
  }, []);

  const handleCheckBox = (e) => {
    setCheckbox(!checkbox);
  };
  // console.log(checkbox);

  const dispatch = useDispatch();

  const registerUser = (e) => {
    if (!handleCheckBox) {
      setErrorMsg("Agree to the Terms & Condition");
      return;
    }

    e.preventDefault();

    console.log("auth",auth)
    dispatch(sendotp(parseInt(mobileNumber)))
      .then(() => {
        navigate("/enterotp", {
          state: {
            fullname: userName,
            email: email,
            mobileNumber: mobileNumber,
            company: company,
            postalCode: postalCode,
            otpsent: auth.user.otpsent,
            otp: auth.user.otp,
          },
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the action dispatch
        console.log(error);
      });
  };

  return (
    <div className="contact-us flex items-center justify-center h-screen bg-whitesmoke">
      <div className="flex sm:flex-row lg:flex-row flex-col-reverse lg:w-8/12 h-5/6 bg-white shadow-md sm:w-10/12 w-full lg:scale-1 sm:scale-1 scale-90 ">
        <div className=" w-full lg:w-1/2 sm:w-1/2 h-full flex flex-col items-center justify-center ">
          <form
            onSubmit={registerUser}
            className="flex flex-col items-center justify-center w-8/12"
          >
            {/* SUCCESS/ERROR MSG BOX  */}
            {successMsg && <MsgBox color={"green"} text={successMsg} />}
            {errorMsg && <MsgBox color={"red"} text={errorMsg} />}
            {/* SUCCESS/ERROR MSG BOX  */}

            <span className="relative w-full h-12 flex items-center m-4 shadow">
              <input
                className="h-full w-full rounded-md bg-input pl-4"
                value={userName}
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const validatedValue = inputValue
                    .replace(/[^A-Za-z\s]/g, "")
                    .slice(0, 15); // Remove non-alphabetic characters except space and limit to 15 characters
                  setUserName(validatedValue);
                }}
                maxLength={15} // Set the maximum length to 15
                required
              />
              <button
                type="button"
                onClick={() => {
                  setUserName("");
                }}
                className="scale-95 absolute right-4 border h-4 w-4
              rounded-xl flex items-center justify-center"
              >
                <p className="mb-1 mt-px">x</p>
              </button>
            </span>

            <span className="relative  w-full h-12 flex items-center mb-4 shadow">
              <input
                className="h-full w-full rounded-md bg-input pl-4"
                value={email}
                type="email"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <button
                type="button"
                onClick={() => {
                  setEmail("");
                }}
                className="scale-95 absolute right-4 border h-4 w-4
                            rounded-xl flex items-center justify-center"
              >
                <p className="mb-1 mt-px">x</p>
              </button>
            </span>

            <span className="relative w-full h-12 flex items-center mb-4 shadow">
              <div className="absolute left-4 text-gray-500">( +1 )</div>
              <input
                className="h-full w-full rounded-md bg-input pl-16"
                value={mobileNumber}
                type="tel" // Change the input type to "tel" to enforce numeric input
                pattern="[0-9]{0,10}" // Set the pattern to only accept numbers and limit to 10 digits
                placeholder="Mobile Number"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
                  setMobileNumber(numericValue);
                }}
              />
              <button
                onClick={() => setMobileNumber("")}
                type="button"
                className="scale-95 absolute right-4 border h-4 w-4 rounded-xl flex items-center justify-center"
              >
                <p className="mb-1 mt-px">x</p>
              </button>
            </span>

            <span className="relative  w-full h-12 flex items-center mb-4 shadow">
              <input
                className="h-full w-full rounded-md bg-input pl-4"
                placeholder="Company Name"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                required
              />
              <button
                type="button"
                onClick={() => {
                  setCompany("");
                }}
                className="scale-95 absolute right-4 border h-4 w-4
                            rounded-xl flex items-center justify-center"
              >
                <p className="mb-1 mt-px">x</p>
              </button>
            </span>

            <span className="relative w-full h-12 flex items-center mb-4 shadow">
              <input
                className="h-full w-full rounded-md bg-input pl-4"
                value={postalCode}
                type="text" // Change the input type to "text"
                pattern="[0-9]*" // Use pattern="[0-9]*" to accept only numbers
                placeholder="Postal Code"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
                  setpostalCode(numericValue);
                }}
                required
              />
              <button
                onClick={() => {
                  setpostalCode("");
                }}
                type="button"
                className="scale-95 absolute right-4 border h-4 w-4
                rounded-xl flex items-center justify-center"
              >
                <p className="mb-1 mt-px">x</p>
              </button>
            </span>

            <div className="flex justify-start w-full h-5 items-center mt-2">
              <input
                type="checkbox"
                onChange={handleCheckBox}
                className="mr-2"
                required
              />
              I agree to&nbsp;
              <Link className="text-button">terms and condition</Link>
            </div>
            <div className="flex justify-start w-full h-5 items-center mt-2">
              <input
                type="checkbox"
                onChange={handleCheckBox}
                className="mr-2"
              />
              &nbsp;
              <p className="">Tap to receive updates over WhatsApp</p>
            </div>
            <button
              type="submit"
              className="w-full h-12 flex items-center justify-center bg-button text-white rounded-md mt-3"
            >
              Sign Up
            </button>
            <div className="flex justify-start w-full h-5 items-center mt-4">
              Alread have an account?&nbsp;
              <Link className="text-button" to={"/login"}>
                Sign In.
              </Link>
            </div>
          </form>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 bg-pink flex justify-center items-center font-bold text-4xl sm:h-full lg:h-full h-20">
          Welcome
        </div>
      </div>
    </div>
  );
};

export default SignUp;

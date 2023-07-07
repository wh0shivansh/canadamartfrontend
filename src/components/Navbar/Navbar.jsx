import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiSolidDashboard } from 'react-icons/bi';
import { BiStore } from 'react-icons/bi';
import {TiUser} from "react-icons/ti"
import {RiQuestionnaireLine} from "react-icons/ri"
import {PiNotepadLight} from "react-icons/pi"
import { FaListUl, FaSearch } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { signOut } from "../../actions/User/userAction";
import { useDispatch, useSelector } from "react-redux";
import {getSearchResult} from '../../actions/searchAction';


const Navbar = () => {
  const [input,setInput] = useState("");
  const [searching,setSearching] = useState(false);
  const [loc,setLoc] = useState("");
  const navigate = useNavigate();
  const auth = useSelector(state => state.user);
  const auth2 = useSelector(state => state.register);
  // console.log("auth",auth);
  // console.log("auth2",auth2);
  const initialData = useSelector(state => state.initialData);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown open/close

  // useEffect(()=>{
  //   if(auth){
  //     if(auth.user.role === 'user'){
  //       setLoc("userdash");
  //     }
  //     if(auth.user.role === 'seller'){
  //       setLoc("sellerdash");
  //     }
  //   }
  // },[])


  // console.log(auth2.user.fullname);
  // console.log("STATE = "+auth.authenticate); // user is login
  // console.log("STATE = "+auth2.registered); // user is registered

  const dispatch = useDispatch();

  const logout = () => {
    // console.log("logout");
    dispatch(signOut());
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  localStorage.setItem('s',"ss");

  useEffect(()=>{
    navigate('/',{
      state: {
        key:"",
        searching:false,
      }
  })
  },[])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      implementSearch();
    }
  };


  const implementSearch=()=>{
    dispatch(getSearchResult(`${input}`));

    navigate('/',{
      state:{
        key:input,
        searching:true,
      }
    })

  }


  const renderLoggedInLinks = () => {
    return (
      <div className="w-80 flex justify-between items-center flex-row-reverse">
        <div>
          <FaListUl
            onClick={toggleDropdown}
            className="cursor-pointer hover:text-blue"
          />
          {dropdownOpen && (
            <div className="absolute bg-white mt-8 mr-5 p-3 rounded shadow right-2 w-[254px] h-[270px]">
            <h1 className="flex w-full mb-6">Welcome!</h1>
          
            <Link to="/sellerdash" className="flex items-center">
              <div className="mb-2 ml-9 flex items-center">
                <BiSolidDashboard className="mr-4" size={22}/>
                Dashboard
              </div>
            </Link>
            <Link to="/profile" className="mb-2 ml-9 flex items-center">
              <div className="flex">
                <TiUser className="mr-4" size={22}/>
                Profile</div>
            </Link>
            <Link to="/inquiries" className="mb-2 ml-9 flex items-center">
              <div className="flex">
                <RiQuestionnaireLine className="mr-4" size={22}/>
                Inquiries</div>
            </Link>
            <Link to="/my-membership" className="mb-2 ml-9 flex items-center">
              <div className="flex">
                <PiNotepadLight className="mr-4" size={22}/>
                My Membership</div>
            </Link>
            <button
              className="bg-[#5B98E2] w-[199px] text-white rounded-md h-[39px] mt-5"
              onClick={logout}
            >
              Sign Out
            </button>
          </div>
          
          )}
        </div>
        <div className="">Hi! {auth2.user?.fullname ? auth2.user?.fullname : auth.user?.fullname}</div>
        <div className="border w-[34px] h-[34px] flex items-center justify-center border-[#aaaaaa] ">
        {/* {auth.user?.fullname.split(" ")[0]}
        {auth.user?.fullname.split(" ")[1]} */}
        {/* {auth.user.fullname?.split(" ")[1][0] || auth2.message.user?.fullname.split(" ")[1][0]} */}
        </div>
        <div className="border border-[#5B98E2] rounded-lg mr-3">
          <div className="h-[28px] flex items-center justify-center text-sm">Registered Users</div>
          <div className="bg-[#5B98E2] w-[140px] h-[22px] text-white text-sm flex items-center justify-center rounded-bl-lg rounded-br-lg">{initialData?.totalUsers}</div>
        </div>
      </div>
    );
  };



  const renderNonLoggedInLinks = () => {
    return (
      <div>
        <button className="mr-4 ml-10">
          <Link to={"/login"}>Login</Link>
        </button>
        <Link to={"/signup"}>
          <button className="bg-button rounded-md text-white h-8 w-20">
            Sign Up
          </button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="w-full sm:flex h-16 sm:h-20 justify-between items-center sm:px-10 px-5 hidden">
        <div className="text-xl font-bold">
          <Link to={"/"}>CANMART</Link>
        </div>

        <div className="hidden lg:flex sm:flex items-center flex-1 flex-row-reverse">
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
          <div className="relative flex mr-6"> {/* Added ml-2 for leftward shift */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2" onClick={implementSearch}>
              <FaSearch className="text-gray"  />
            </div>
            <input
              type="text"
              className="text-sm border border-[#5B98E2] rounded-md w-[395px] h-[40px] pl-10 pr-3 mr-3"
              placeholder="Search for product categorie"
              onChange={(e)=>{setInput(e.target.value)}}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

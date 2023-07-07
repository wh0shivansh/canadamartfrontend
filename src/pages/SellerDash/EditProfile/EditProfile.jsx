import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineAppstoreAdd,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "./Avatar (1).png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit , AiOutlineDelete} from "react-icons/ai";

const EditProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen flex flex-col sm:flex-row sm:justify-between">
      {/* Left Section */}
      <div className="lg:w-3/12 lg:pt-20 sm:w-1/4 shadow hidden lg:block md:block">
        <div className="p-4">
          <nav>
            <ul className="space-y-6 text-steelblue">
              <li className="hover:text-button2">
                <Link to="/EditProfile" className="flex items-center space-x-2">
                  <AiOutlineDashboard className="h-6 w-6" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="hover:text-button2">
                <Link to="/sellerproduct" className="flex items-center space-x-2">
                  <AiOutlineAppstoreAdd className="h-6 w-6" />
                  <span>Product Management</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/sellerinventory" className="flex items-center space-x-2">
                  <AiOutlineShoppingCart className="h-6 w-6" />
                  <span>Inventory Management</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/" className="flex items-center space-x-2">
                  <AiOutlineBarChart className="h-6 w-6" />
                  <span>Analytics & Reports</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/" className="flex items-center space-x-2">
                  <AiOutlineQuestionCircle className="h-6 w-6" />
                  <span>Support & Help</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/sellersetting" className="flex items-center space-x-2">
                  <AiOutlineSetting className="h-6 w-6" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center space-x-2">
                  <AiOutlineLogout className="h-6 w-6" />
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/*for hamburger*/}

      <div className="pt-6 pb-2 pl-4 absolute lg:hidden text-left md:hidden block ">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <AiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:w-3/12 lg:pt-20 sm:w-1/4 shadow overflow-hidden">
          <div className="p-4">
            <nav>
              <ul className="space-y-6">
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center mt-8 space-x-2">
                    <AiOutlineDashboard className="h-6 w-6" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineAppstoreAdd className="h-6 w-6" />
                    <span>Product Management</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineShoppingCart className="h-6 w-6" />
                    <span>Inventory Management</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineBarChart className="h-6 w-6" />
                    <span>Analytics & Reports</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineQuestionCircle className="h-6 w-6" />
                    <span>Support & Help</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px pt-6">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineSetting className="h-6 w-6" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineLogout className="h-6 w-6" />
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="lg:max-h-16 max-h-20 lg:w-9/12 sm:w-3/4 shadow bg-white">
        <div className=" p-4 bg-gainsboro">
          <header className="flex justify-between mb-6 items-end">
            <div className="flex pl-8">
              <div className="relative w-96">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <RiSearchLine className="h-5 w-5 text-gray " />
                </span>
                <input
                  type="text"
                  className="Inline w-full pl-12 pr-10 py-2 border border-gray rounded-md bg-white sm:text-sm"
                  placeholder="Search,Product,Supplier,Order"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <IoIosNotificationsOutline className="h-5 w-5 text-gray" />
              <img
                className="h-8 w-8 mr-3 rounded-full object-cover"
                src={profile}
                alt="Profile"
              />
            </div>
          </header>
          <div className="flex bg-offwhitegray flex-col pt-4 lg:pl-10 lg:pr-40 pl-4 pr-4">
        <h1 className="text-2xl mb-2 font-medium text-left">Edit Profile</h1>
        <div className="flex flex-col justify-end md:flex-row">
          <div>
            <img
              className="h-10 w-10 mb-2 rounded-full object-cover"
              src={profile}
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mt-4 md:flex-row">
            <div className="w-full md:w-1/2 text-start md:mb-0 md:mr-12">
              <label htmlFor="firstName" className="text-label font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Aakriti"
                className="w-full px-4 py-1.5 mb-4 border border-mediumgray rounded"
              />
            </div>
            <div className="w-full text-start md:w-1/2">
              <label htmlFor="lastName" className="text-label font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Pandey"
                className="w-full px-4 mb-4 py-1.5 border border-mediumgray rounded"
              />
            </div>
          </div>
          <div className="w-full mb-4 text-start">
            <label htmlFor="email1" className="text-label font-medium">
              Email
            </label>
            <input
              type="email1"
              id="email1"
              placeholder="pandeyaakriti44@gmail.com"
              className="w-full px-4 py-1.5 border border-mediumgray rounded"
            />
          </div>
          <div className="mb-4 w-full text-start">
      <label htmlFor="contactNumber" className="text-label font-medium">
        Contact Number
      </label>
      <div className="flex">
        <div className="flex items-center justify-center w-12 bg-gray-200 border border-gray-400 rounded-l">
          +1
        </div>
        <input
          type="tel"
          id="contactNumber"
          placeholder="9999999999"
          className="w-full pl-4 py-1.5 border border-gray-400 rounded-r"
        />
      </div>
    </div>
          <div className="flex flex-col md:flex-row mb-4 md:mb-4">
            <div className="w-full md:w-1/2 text-start mb-4 md:mb-0 md:mr-12">
              <label htmlFor="city" className="text-label font-medium">
                City
              </label>
              <select
                id="city"
                className="w-full px-4 py-1.5 border border-mediumgray rounded"
              >
                <option>Jabalpur</option>
              </select>
            </div>
            <div className="w-full text-start md:w-1/2">
              <label htmlFor="state" className="text-label font-medium">
                State
              </label>
              <select
                id="state"
                className="w-full px-4 py-1.5 border border-mediumgray rounded"
              >
                <option>Madhya Pradesh</option>
              </select>
            </div>
          </div>
          <div className="w-full mb-4 text-start">
            <label htmlFor="address1" className="text-label font-medium">
              Address
            </label>
            <input
              type="text"
              id="address1"
              placeholder="Vijaynagar,jabalpur"
              className="w-full px-4 py-1.5 border border-mediumgray rounded"
            />
          </div>
          <div className="mb-4 w-full text-start">
            <label htmlFor="password1" className="text-label font-medium">
              Password
            </label>
            <input
              type="password"
              id="password1"
              placeholder="123"
              className="w-full px-4 py-1.5 border border-mediumgray rounded"
            />
          </div>
          <div className="flex justify-center mb-4 md:justify-start">
            <button className="bg-white text-[#4461F2] border border-[#4461F2] px-8 py-1 rounded mr-2">
              Cancel
            </button>
            <button className="bg-[#4461F2] text-white border border-[#4461F2] px-8 py-1 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

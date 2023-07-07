import React, { useState } from 'react';
import SellerBusinessPage from './SellerBusinessPage';
import SellersHeader from './SellersHeader';
import ProductDetailsPage from './ProductDetailsPage';
import AddressDetailsPage from './AddressDetailsPage';
import AddGSTPage from './AddGSTPage';
import image from "../../assets/client.avif";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const SellersPage = () => {
  const navigate = useNavigate();
  const [page1,setPage1] = useState(true);
  const [page2,setPage2] = useState(false);
  const [page3,setPage3] = useState(false);
  const [page4,setPage4] = useState(false);
  const [activePage,setActivePage] = useState(1);
  return (
    <>
      <Navbar/>
    <div className='flex items-center justify-center h-full w-full'>
      <div className='w-1/2'>

        <SellersHeader active={activePage}/>

{/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {page1&&
          <div className="container mx-auto py-4 flex flex-col md:flex-row">
          {/* Seller Information */}
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-4">
              <h2 className="text-4xl font-bold mb-4">Business Details</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">
                  Start adding your business details
                </h3>
                <p className="text-grey font-bold text-lg">
                  Contact Number:+91-2323232323
                </p>
              </div>
  
              {/* Input Fields */}
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2 text-grey">
                  Full Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2 text-grey">
                  Company Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2 text-grey">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                  placeholder="Enter your email"
                />
              </div>
  
              {/* Verify Button */}
                <button onClick={()=>{
                  setActivePage(2);
                  setPage1(false);
                  setPage3(false);
                  setPage4(false);
                  setPage2(true);
                }} className="bg-brown text-black px-4 py-2 rounded-md w-full">
                  Verify Later
                </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="self-center md:w-1/2 mb-4 md:mb-0">
            <img
              src={image}
              alt="Product"
              className="rounded-lg h-48 w-2/3 mx-16"
            />
            <h1 className="text-center font-bold text-2xl my-4">About Seller</h1>
            <p className="text-left px-16 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
}        
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
        {page2&&
         <div className="container mx-auto py-4 flex flex-col md:flex-row">
         {/* Seller Information */}
         <div className="w-full md:w-1/2 px-4">
           <div className="bg-white p-4">
             <h2 className="text-4xl font-bold mb-4">Address Details</h2>
             <div className="mb-4">
               <h3 className="text-xl font-bold mb-2">
                 What is the business address?
               </h3>
               <p className="text-grey font-bold text-lg">Name:abc</p>
               <p className="text-grey font-bold text-lg">
                 Company name:Abc enterprises
               </p>
               <p className="text-grey font-bold text-lg">
                 Contact Number:+91-2323232323
               </p>
               <p className="text-grey font-bold text-lg">
                 Email:-abc@gmail.com
               </p>
             </div>
 
             {/* Input Fields */}
             <div className="mb-4">
               <label className="block text-lg font-bold mb-2 text-grey">
                 Pin Code
               </label>
               <input
                 type="number"
                 className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                 placeholder="Pin Code"
               />
             </div>
             <div className="mb-4">
               <label className="block text-lg font-bold mb-2 text-grey">
                 City
               </label>
               <input
                 type="text"
                 className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                 placeholder="City"
               />
             </div>
             <div className="mb-4">
               <label className="block text-lg font-bold mb-2 text-grey">
                 State
               </label>
               <input
                 type="text"
                 className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                 placeholder="State"
               />
             </div>
 
             {/* Verify Button */}

               <button className="bg-brown text-black px-4 py-2 rounded-md w-full" onClick={()=>{
                setActivePage(3);
                setPage1(false);
                setPage2(false);
                setPage3(true);
                setPage4(false);
               }}>
                 Continue
               </button>
           </div>
         </div>
 
         {/* Image Section */}
         <div className="self-center md:w-1/2 mb-4 md:mb-0">
           <img
             src={image}
             alt="Product"
             className="rounded-lg h-48 w-2/3 mx-16"
           />
           <h1 className="text-center font-bold text-2xl my-4">About Seller</h1>
           <p className="text-left px-16 text-lg">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           </p>
         </div>
       </div>
      }

{/* ////////////////////////////////////////////////////////////////////////////////////////////////*/}
        {page3&&
       <div className="container mx-auto py-4 flex flex-col md:flex-row">
       {/* Seller Information */}
       <div className="w-full md:w-1/2 px-4">
         <div className="bg-white p-4">
           <h2 className="text-4xl font-bold mb-4">Product Details</h2>
           <div className="mb-4">
             <h3 className="text-xl font-bold mb-2">
               Add 3 products you wish to sell
             </h3>
             <p className="text-grey font-bold text-lg">Name:abc</p>
             <p className="text-grey font-bold text-lg">
               Company name:abc enterprises
             </p>
             <p className="text-grey font-bold text-lg">
               Contact Number:+91-2323232323
             </p>
             <p className="text-grey font-bold text-lg">
               Email:-abc@gmail.com
             </p>
           </div>

           {/* Input Fields */}
           <div className="mb-4 text-lg font-bold">
             <h1>Start Adding Products</h1>
           </div>

           {/* Verify Button */}
          
             <button  className="bg-brown text-black px-4 py-2 rounded-md w-full" onClick={()=>{
              setActivePage(4);
              setPage1(false);
              setPage2(false);
              setPage3(false);
              setPage4(true);
             }}>
               Continue
             </button>
         
         </div>
       </div>

       {/* Image Section */}
       <div className="self-center md:w-1/2 mb-4 md:mb-0">
         <img
           src={image}
           alt="Product"
           className="rounded-lg h-48 w-2/3 mx-16"
         />
         <h1 className="text-center font-bold text-2xl my-4">About Seller</h1>
         <p className="text-left px-16 text-lg">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         </p>
       </div>
     </div>
        }   

{/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
        {page4&&
          <div className="container mx-auto py-4 flex flex-col md:flex-row">
        {/* Seller Information */}
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-4">
            <h2 className="text-4xl font-bold mb-4">GST Details</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                Add your statutory details
              </h3>
              <p className="text-grey font-bold text-lg">Your Name:Abc</p>
              <p className="text-grey font-bold text-lg">
                Contact Number:+91-2323232323
              </p>
              <p className="text-grey font-bold text-lg">
                Company Name:-abc enterprises
              </p>
              <p className="text-grey font-bold text-lg">
                Email:-abc@gmail.com
              </p>
              <p className="text-grey font-bold text-lg">
                Address:abc colony jabalpur
              </p>
            </div>

            {/* Input Fields */}

            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 text-grey">
                GST Number
              </label>
              <input
                type="number"
                className="border border-gray-400 bg-input px-3 py-2 rounded-md w-full"
                placeholder="GST Number"
              />
            </div>
            {/* Verify Button */}
              <button onClick={()=>{
                navigate('/userprofile');
              }} className="bg-brown text-black px-4 py-2 rounded-md w-full">
                Start Selling
              </button>
         
          </div>
        </div>

        {/* Image Section */}
        <div className="self-center md:w-1/2 mb-4 md:mb-0">
          <img
            src={image}
            alt="Product"
            className="rounded-lg h-48 w-2/3 mx-16"
          />
          <h1 className="text-center font-bold text-2xl my-4">About Seller</h1>
          <p className="text-left px-16 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
        }
      </div>
    </div>
    </>
  )
}

export default SellersPage
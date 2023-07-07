import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/client.avif";

const ProductDetailsPage = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-pink px-4 py-4 flex justify-around items-center">
        <div className="text-black">
          <Link to="/sellerbusinesspage" className="mr-4 hover:font-semibold">
            Business Details
          </Link>
          <Link to="/addressdetailspage" className="mr-4 hover:font-semibold">
            Address Details
          </Link>
          <Link to="/productdetailspage" className="mr-4 hover:font-semibold">
            Product Details
          </Link>
          <Link to="/addgstpage" className="mr-4 hover:font-semibold">
            Add GST
          </Link>
        </div>
      </nav>

      {/* Content Section */}
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
            <Link to="/addgstpage">
              <button className="bg-brown text-black px-4 py-2 rounded-md w-full">
                Continue
              </button>
            </Link>
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
    </>
  );
};

export default ProductDetailsPage;

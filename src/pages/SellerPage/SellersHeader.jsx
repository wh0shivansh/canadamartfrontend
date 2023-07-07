import React from 'react'
import { Link } from 'react-router-dom'

const SellersHeader = ({active}) => {
  return (
    <nav className="bg-pink h-14 flex w-full items-center ">
      <div  className={`mr-4 flex justify-center items-center w-1/4 h-full hover:font-semibold ${active==1?"bg-brown":""}`}>
        Business Details
      </div>
      <div className={`mr-4 flex justify-center items-center w-1/4 h-full hover:font-semibold ${active==2?"bg-brown":""}`}>
        Address Details
      </div>
      <div className={`mr-4 flex justify-center items-center w-1/4 h-full hover:font-semibold ${active==3?"bg-brown":""}`}>
        Product Details
      </div>
      <div  className={`flex justify-center items-center w-1/4 h-full hover:font-semibold ${active==4?"bg-brown":""}`}>
        Add GST
      </div>
  </nav>
  )
}

export default SellersHeader
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../actions/Product/productAction';
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import './deals.css';
const DealsCarousel = ({ title }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const initialData = useSelector(state => state.initialData);
  // console.log("I = " + initialData.products[0].name);



  return (
    <>
    { initialData.products &&
    <div className='pl-20 mt-5 bg-[#F5F4F4]'>
      <h2 className="text-2xl font-semibold mb-10 text-slate-700 flex mt-2">
        {title}
      </h2>
      <div className="parent">
      <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={false}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          className='deals'
        >
          {initialData?.products.map((p, index) => {
            return (
              <div className="deals-slider" key={index}
              >
                <Link to={`/product/${p._id}`}>
                  <img src={require(`../../uploads/${p.productImages[0]?.img}`)} alt="movie" />
                  <p className='text-lg text-[#000] mt-2 capitalize'>{p.name}</p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>}
    </>
  );
}

export default DealsCarousel
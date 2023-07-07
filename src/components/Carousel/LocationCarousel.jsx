import { useState, useRef, useEffect } from 'react';
import send from '../../assets/send.png';
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import staticdata from './staticdata.json';
import './location.css';
import navigation from "./navigation 1.png"
import {BiSend} from 'react-icons/bi';
// Data

const  LocationCarousel = ({title}) => {

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

  return (
    <div className='pl-20 mt-5'>
        <h2 className="text-2xl font-semibold mb-10 text-slate-700 flex ">
          Search by cities
        </h2>
    <div className="parent">
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={false}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
      className='location'
    >
      {staticdata.resource.map((s, index) => {
        return (
          <div className="location-slider relative" key={index}>
            <img src={require('./goa.jpg')}></img>
            <div className='absolute bottom-0 h-[130px] w-full bg-white shadow-md rounded-br-xl rounded-bl-xl'>
              <p className='w-full flex pl-5 mt-5 text-lg text-[#5E6282]'>{s.name}</p>
              <p className='flex w-full text-[#029BC5] pl-5 mt-4  items-center'><img className='h-4 w-4 mr-2.5' src={navigation} alt="" />View</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  </div>
    </div>
  );
};

export default LocationCarousel;

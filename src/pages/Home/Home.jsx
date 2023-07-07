import React, { useDebugValue, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../assets/bg.png";
import Payment from "../../commonComponents/Payment";
import Footer from "../../commonComponents/Footer";
import CategoriesCarousel from "../../components/Carousel/CategoriesCarousel";
import DealsCarousel from "../../components/Carousel/DealsCarousel";
import LocationCarousel from "../../components/Carousel/LocationCarousel";
import ClientTestimonial from "../../components/Carousel/ClientTestimonial";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData } from "../../actions/initialDataAction";
import { getSellersList } from '../../actions/sellersList';
import TellReqt from "../../components/TellRequirement/TellReqt";
import { useLocation } from "react-router-dom";
import SearchedProducts from "../../components/Product/SearchedProducts";

const Home = () => {
  const { state } = useLocation();
  const { key,searching } = state || {};
  const search = key;
  // const abc = '917974103125';
  // console.log(abc.split("91")[1]);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, [])

  useEffect(() => {
    const data = {
      search
    }
    dispatch(getSellersList(data));
  }, [])


  return (
    <div>
      <Navbar />
{!searching &&
      <>
      <div className="w-full">
        <img className="w-full" src={Bg} alt="" />
      </div>
      <CategoriesCarousel title={"Shop our top categories"} />
      <DealsCarousel title={"Today's deal for you"} />
      <LocationCarousel title={"Search by cities"} />
      </>
}
{searching  && 
  <SearchedProducts/>
}




      <br />
      <TellReqt />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <ClientTestimonial />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Payment />
      <Footer />

    </div>
  );
};
export default Home;

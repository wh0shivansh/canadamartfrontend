import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../assets/bg.png";
import Payment from "../../commonComponents/Payment";
import Footer from "../../commonComponents/Footer";
import CategoriesCarousel from "../../components/Carousel/CategoriesCarousel";
import DealsCarousel from "../../components/Carousel/DealsCarousel";
import LocationCarousel from "../../components/Carousel/LocationCarousel";
import SimilarProducts from "../../components/Product/SimilarProducts";

const SubCategory = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <img className="w-full" src={Bg} alt="" />
      </div>
      <CategoriesCarousel title={"Shop our top categories"} />
      <SimilarProducts />
      <Footer />
    </div>
  );
};
export default SubCategory;

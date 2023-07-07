import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import product1Image from "../../assets/bg.png";
import product2Image from "../../assets/bg.png";
import product3Image from "../../assets/bg.png";
import product4Image from "../../assets/bg.png";
import { useDispatch, useSelector } from "react-redux";
import {getInitialData} from '../../actions/initialDataAction';
const SimilarProducts = ({ title }) => {
  // const products = [
  //   { id: 1, title: "Sports T Shirts", image: product1Image },
  //   { id: 2, title: "Sports T Shirts", image: product2Image },
  //   { id: 3, title: "Sports T Shirts", image: product3Image },
  //   { id: 4, title: "Sports T Shirts", image: product4Image },
  //   { id: 5, title: "Sports T Shirts", image: product1Image },
  //   { id: 6, title: "Sports T Shirts", image: product2Image },
  //   { id: 7, title: "Sports T Shirts", image: product3Image },
  //   { id: 8, title: "Sports T Shirts", image: product4Image },
  //   { id: 9, title: "Sports T Shirts", image: product1Image },
  //   { id: 10, title: "Sports T Shirts", image: product2Image },
  //   { id: 11, title: "Sports T Shirts", image: product3Image },
  //   { id: 12, title: "Sports T Shirts", image: product4Image },
  //   { id: 13, title: "Sports T Shirts", image: product4Image },
  //   { id: 14, title: "Sports T Shirts", image: product1Image },
  //   { id: 15, title: "Sports T Shirts", image: product2Image },
  //   { id: 16, title: "Sports T Shirts", image: product3Image },
  // ];

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getInitialData());
  },[]);

  const initialData = useSelector(state => state.initialData);
  const products = initialData.products;
  // console.log("P = "+products);
  return (
    <>
      <h2 className="text-2xl font-semibold my-12 mx-auto sm:px-20 pl-5 mb-10 ml-5 flex">
        Similar Products
      </h2>
      <div className="grid grid-cols-1 lg:mx-28 md:mx-8 sm:mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.slice(0,4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default SimilarProducts;

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Payment from '../../commonComponents/Payment'
import Footer from '../../commonComponents/Footer'
import Bg from '../../assets/bg.png';
import CategoriesCarousel from '../../components/Carousel/CategoriesCarousel';
import SimilarProducts from '../../components/Product/SimilarProducts';
import SubCategoryCarousel from '../../components/Carousel/SubCategoryCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../actions/Category/categoryAction';
import { useParams } from 'react-router-dom';
import { getInitialData } from '../../actions/initialDataAction';

const SubCategory = () => {

  const [catName,setCatName] = useState("");
  const [categories,setCategories] = useState([]);
  const {catGid} = useParams();

  const category = useSelector(state => state.category);
  // console.log("catg = "+category.categories.length);

  useEffect(()=>{
    if(category.categories){
      for(let i=0; i<category.categories?.length ; i++){
        if(catGid === category.categories[i]._id){
        for(let j=0; j<category.categories[i].subcategor?.length ; j++){
          setCategories(category.categories[i].subcategory);
        }
      }
    }
  }
  },[]);


  useEffect(()=>{
    if(category){
      categories.map((cat)=>{
        if(catGid === cat._id){
          setCatName(cat.name);
          // console.log("C = "+cat.name)
        }
      })
    }
  },[]);

  return (
    <div>
        <Navbar/>
        <div className='w-full'>
            <img className='w-full' src={Bg} alt="" />
        </div>
        <SubCategoryCarousel title={`Top ${catName} categorie`} categories={categories}/>
        <SimilarProducts />
        <Footer/>
    </div>
  )
}

export default SubCategory
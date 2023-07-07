import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../actions/Category/categoryAction';
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';

// Data

const CategoryCarousel = ({ title }) => {

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

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);



  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);




  return (
    <div className='pl-20 mt-5'>
        <h2 className="text-2xl font-semibold mb-10 text-slate-700 flex ">
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
      className='category'
    >
      {category.categories.map((cat, index) => {
        return (
          <div className="slider" key={index}
          >
          <Link to={`/subcategory/${cat._id}`}>
            <img src={require(`../../../../../server/server/src/uploads/${cat.img}`)} alt="movie" />
            {/* <p>{cat.name}</p> */}
          </Link>
          </div>
        );
      })}
    </Carousel>
  </div>
    </div>
  );
};

export default CategoryCarousel;

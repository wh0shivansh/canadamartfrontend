import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const SubCategoryCarousel = ({title,categories}) => {

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
    <div className='pl-24 mt-5'>
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
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
    >
      {categories.map((cat, index) => {
        return (
          <div className="slider" key={index}
          >
          <Link to={`#`}>
            <img src={require(`../../uploads/${cat.img}`)} alt="movie" />
            {/* <p>{cat.name}</p> */}
          </Link>
          </div>
        );
      })}
    </Carousel>

</div>
</div>
  )
}

export default SubCategoryCarousel
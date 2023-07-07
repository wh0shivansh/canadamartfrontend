import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ClientTestimonial.css';

const ClientTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Client 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo lorem eu justo ullamcorper aliquam.',
      image: 'https://picsum.photos/200',
    },
    {
      id: 2,
      name: 'Client 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo lorem eu justo ullamcorper aliquam.',
      image: 'https://picsum.photos/200',
    },
    {
      id: 3,
      name: 'Client 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo lorem eu justo ullamcorper aliquam.',
      image: 'https://picsum.photos/200',
    },
    {
      id: 4,
      name: 'Client 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo lorem eu justo ullamcorper aliquam.',
      image: 'https://picsum.photos/200',
    },
    {
      id: 5,
      name: 'Client 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo lorem eu justo ullamcorper aliquam.',
      image: 'https://picsum.photos/200',
    },
    // Add more testimonials as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel-container relative">
      <div className="testimonial-container bg-cover bg-center">
        <TransitionGroup>
          <CSSTransition key={testimonials[currentSlide].id} timeout={500} classNames="fade">
          <div className="testimonial-card bg-whitesmoke p-8 rounded-lg w-3/5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
              {testimonials.map((testimonial, index) => {
                const isPreviousImage =
                  (index === currentSlide - 1 && currentSlide !== 0) ||
                  (index === testimonials.length - 1 && currentSlide === 0);
                const isNextImage =
                  (index === currentSlide + 1 && currentSlide !== testimonials.length - 1) ||
                  (index === 0 && currentSlide === testimonials.length - 1) ||
                  index === currentSlide;

                return (
                  <div
                    key={testimonial.id}
                    className={`testimonial-image-wrapper w-2 ${
                      isPreviousImage ? 'previous-image' : ''
                    } ${isNextImage ? 'next-image' : ''} ${index === currentSlide ? 'current' : ''}`}
                  >
                    <img src={testimonial.image} alt="Client" className="h-full object-cover" />
                  </div>
                );
              })}
              <div className="flex items-start">
                <div className="w-5/12">
                  <div className="testimonial-image h-full">
                    <img src={testimonials[currentSlide].image} alt="Client" className="h-full object-cover" />
                  </div>
                </div>
                <div className="w-7/12 pl-4">
                  <h3 className="text-xl font-bold mb-4 mt-0">{testimonials[currentSlide].name}</h3>
                  <p>{testimonials[currentSlide].text}</p>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <button
          className="left-arrow absolute top-1/2 transform -translate-y-1/2 left-20 text-gray-500 text-3xl focus:outline-none"
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="right-arrow absolute top-1/2 transform -translate-y-1/2 right-20 text-gray-500 text-3xl focus:outline-none"
          onClick={handleNextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ClientTestimonial;

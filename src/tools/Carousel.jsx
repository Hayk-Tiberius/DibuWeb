import React, { useState, useEffect } from "react";


const images = [
    require("../img/reviews/IMG_2270.JPG"),
    require("../img/reviews/IMG_2272.JPG"),
    require("../img/reviews/IMG_2276.JPG"),
    require("../img/reviews/IMG_2271.JPG"),
    require("../img/reviews/IMG_2282.JPG"),
    require("../img/reviews/IMG_2273.JPG"),
    require("../img/reviews/IMG_2288.JPG"),
    require("../img/reviews/IMG_2278.JPG"),
    require("../img/reviews/IMG_2274.JPG"),
    require("../img/reviews/IMG_2277.JPG"),
    require("../img/reviews/IMG_2284.JPG"),
    require("../img/reviews/IMG_2290.JPG"),  
    require("../img/reviews/IMG_2285.JPG"),
    require("../img/reviews/IMG_2279.JPG"),
    require("../img/reviews/IMG_2275.JPG"),  
    require("../img/reviews/IMG_2280.JPG"), 
    require("../img/reviews/IMG_2283.JPG"),  
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Автопрокрутка, если нужно, раскомментировать
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // автопрокрутка через 3 секунды
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    // Переключение на следующий слайд (по одному)
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Переключение на предыдущий слайд (по одному)
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    // Функция для отображения 4 фото
    const getVisibleImages = () => {
      const endIndex = currentIndex + 4;
      return images.slice(currentIndex, endIndex > images.length ? images.length : endIndex);
    };
  
    return (
      <div className="carousel">
        
        <button className="carousel__button left" onClick={prevSlide}>
          ‹
        </button>
  
        
        <div className="carousel__images">
          {getVisibleImages().map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel__image"
            />
          ))}
        </div>
  

        <button className="carousel__button right" onClick={nextSlide}>
          ›
        </button>
      </div>
    );
  };
  
  export default Carousel;

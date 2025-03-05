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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // автопрокрутка через 3 секунды
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    const getVisibleImages = () => {
      const endIndex = currentIndex + 4;
  
      // Если не выходит за границы массива — просто берём срез
      if (endIndex <= images.length) {
          return images.slice(currentIndex, endIndex);
      } else {
          // Берём оставшиеся и добавляем с начала массива
          return [...images.slice(currentIndex, images.length), ...images.slice(0, endIndex - images.length)];
      }

    };
    
    const openModal = (index) => {
      setIsModalOpen(true);
      setSelectedImageIndex(index);
    } 

    const closeModal = () => {
      setIsModalOpen(false);
    }

    const nextModalSlide = () => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevModalSlide = () => {
      setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  return (
    <>
       
        <div className="carousel">
            <button className="carousel__button left" onClick={prevSlide}>‹</button>

            <div className="carousel__images">
                {getVisibleImages().map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${currentIndex + index + 1}`}
                        className="carousel__image"
                        onClick={() => openModal(currentIndex + index)}
                    />
                ))}
            </div>

            <button className="carousel__button right" onClick={nextSlide}>›</button>

            {isModalOpen && (
                    <div className="modal" onClick={closeModal}>
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal__close" onClick={closeModal}>×</button>
                        <button className="modal__prev" onClick={nextModalSlide}>‹</button>
                        <img src={images[selectedImageIndex]} alt="Увеличенное изображение" className="modal__image" />
                        <button className="modal__next" onClick={prevModalSlide}>›</button>
                    </div>
                </div>
              )
            }
        </div>

        
       
    </>
);
  };
  
  export default Carousel;

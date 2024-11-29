import React, { useState } from 'react';
import './Carousel.css'


const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      src: "https://fotos.perfil.com/2024/05/27/trim/1280/720/dia-internacional-de-la-hamburguesa-1808903.jpg",
      alt: "Hamburguesa especial",
      captionTitle: "¡Bienvenidos a Kiddo's Burgers!",
      captionText: "En Kiddo's, cada bocado es una explosión de sabor. Disfruta de nuestras deliciosas hamburguesas hechas con ingredientes frescos y una pizca de amor, perfectas para grandes y chicos.",
    },
    {
      src: "https://offloadmedia.feverup.com/monterreysecreto.com/wp-content/uploads/2022/05/25134937/Captura-de-pantalla-2024-05-25-134804-1024x683.jpg",
      alt: "Hamburguesa personalizada",
      captionTitle: "Hamburguesas Personalizadas para Todos",
      captionText: "¿Te gusta experimentar? Crea tu hamburguesa perfecta con nuestros ingredientes exclusivos. ¡Tú decides cómo disfrutar de la experiencia Kiddo's!",
    },
    {
      src: "https://s2.abcstatics.com/abc/sevilla/media/gurme/2023/08/31/s/smash-burger.jpg-k0vC--1248x698@abc.jpg",
      alt: "Hamburguesa en familia",
      captionTitle: "Un Lugar Divertido para Toda la Familia",
      captionText: "Ven con tus pequeños y disfruta de un ambiente lleno de color, juegos y risas. En Kiddo's, no solo servimos hamburguesas, ¡hacemos de cada visita una fiesta!",
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={activeSlide === index ? 'active' : ''}
              aria-current={activeSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${activeSlide === index ? 'active' : ''}`}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="d-block w-100"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.captionTitle}</h5>
                <p>{slide.captionText}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

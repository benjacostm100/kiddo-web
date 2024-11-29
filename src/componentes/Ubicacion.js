import React from 'react';
import './Ubicacion.css'; // Archivo de estilos, si tienes uno

const Ubicacion = () => {
  return (
    <section id="locations">
      <h1>Nuestra Ubicación</h1>
      <p>
        Visítanos en nuestra única sucursal en <strong>Arévalo 2882, Las Cañitas - CABA</strong>.
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.2675289587246!2d-58.43415642405557!3d-34.57209667296569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb587a1c0541f%3A0x730040455e6e3bc5!2sKiddo!5e0!3m2!1ses!2sar!4v1731968324367!5m2!1ses!2sar"
          width="100%"
          height= "1000"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Kiddo"
        ></iframe>
      </div>

      <div className="images-container">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNAJTwBwHGWt2XnRcpVgfOPwoUib7YtXBOrvfxk=s680-w680-h510"
          alt="Foto de la fachada de Kiddo"
        />
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMRIH3SAKYqm4O4M_wDvZx1VOeJycWMElMZsU1P=s680-w680-h510"
          alt="Interior de Kiddo"
        />
      </div>
    </section>
  );
};

export default Ubicacion;

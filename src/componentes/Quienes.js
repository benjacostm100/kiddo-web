import React from "react";
import "./Quienes.css"; // Asegúrate de tener los estilos en un archivo CSS separado

const Quienes = () => {
  return (
    <section className="Contenido" id="about">
      <div className="about-container">
        <h1>Quiénes somos</h1>
        <div className="about-content">
          <div className="about-text">
            <p className="text-background">
              En <strong>Kiddo</strong>, vivimos y respiramos hamburguesas. Nuestra historia comienza con Alejandro Roig, mejor conocido como Burger Kid, un apasionado de la gastronomía y pionero en reseñas de hamburguesas en Argentina. Durante años, Alejandro exploró los rincones del mundo buscando los sabores más auténticos y compartiendo su experiencia con miles de seguidores en su canal de YouTube.
            </p>
            <p className="text-background">
              Inspirados por esta pasión, decidimos llevar el amor por las hamburguesas a otro nivel, creando un espacio donde cada bocado sea una experiencia inolvidable. En Kiddo, combinamos ingredientes de alta calidad, recetas innovadoras y un compromiso por ofrecer lo mejor en cada detalle. Nos enorgullece ser un lugar donde la creatividad y el sabor se unen para redefinir lo que significa disfrutar de una buena hamburguesa.
            </p>
            <p className="text-background">
              Somos más que una hamburguesería: somos un punto de encuentro para los amantes de la buena comida, un lugar donde la pasión por lo artesanal y el espíritu de innovación se reflejan en cada plato. ¡Bienvenidos a Kiddo, el lugar donde la hamburguesa se convierte en arte!
            </p>
          </div>
          <div className="about-image-container">
            <img
              src="https://i.ytimg.com/vi/hFmcoeZkws4/maxresdefault.jpg"
              alt="Kiddo - Nuestro equipo"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quienes;

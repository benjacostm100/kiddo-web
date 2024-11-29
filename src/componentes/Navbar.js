// Navbar.js
import React from 'react';
import './Navbar.css'; // Importa el archivo de CSS de la navbar si tienes uno

const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="logo">
          <a href="/home">
            <img src="https://www.kiddo.com.ar/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.90f34a00.png&w=384&q=75" alt="Imagen que lleva a otra página" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/quienes-somos">Quienes somos</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/ubicaciones" className="Ubicaciones">Ubicaciones</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

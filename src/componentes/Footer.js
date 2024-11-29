import React from 'react';
import './Footer.css'; // Asegúrate de que el CSS de Footer esté correctamente importado.

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <h4>Sobre nosotros</h4>
          <p>Kiddo es una hamburguesería dedicada a crear experiencias únicas para toda la familia. Nuestro objetivo es ofrecer hamburguesas innovadoras y deliciosas.</p>
        </div>
        <div className="footer-links">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li>Email: <a href="mailto:info@kiddo.com">info@kiddo.com</a></li>
            <li>Teléfono: <a href="tel:+123456789">+1 234 567 89</a></li>
            <li>Dirección: Arévalo 2882, C1426 Cdad. Autónoma de Buenos Aires</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Síguenos</h4>
          <ul>
            <li><a href="https://facebook.com/kiddo" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/kiddo" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/kiddo" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com/kiddo" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kiddo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

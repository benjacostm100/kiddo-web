import React from 'react';
import './Menu.css'; // Asegúrate de importar el archivo CSS

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Nuestro Menú</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <div className="cheeseburger">
            <img src="/imagenes/cheeseburger.png" alt="CHEESEBURGER" />
            <h3>CHEESEBURGER</h3>
            <p>INGREDIENTES</p>
            <ul className="lista">
              <li>Carne</li>
              <li>Queso</li>
              <li>Ketchup</li>
              <li>Mayonesa</li>
              <li>Cebolla</li>
            </ul>
            <ul className="lista">
              <li>Simple ........$6500</li>
              <li>Doble ........$8500</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="park">
            <img src="/imagenes/park.png" alt="PARK" />
            <h3>PARK</h3>
            <p>INGREDIENTES</p>
            <ul className="lista">
              <li>Carne</li>
              <li>Queso</li>
              <li>Lechuga</li>
              <li>Tomate</li>
              <li>Cebolla</li>
              <li>Aderezo KIDDO</li>
            </ul>
            <ul className="lista">
              <li>Simple ........$6500</li>
              <li>Doble ........$9500</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="melvin">
            <img src="/imagenes/melvin.png" alt="MELVIN" />
            <h3>MELVIN</h3>
            <p>INGREDIENTES</p>
            <ul className="lista">
              <li>Carne</li>
              <li>Queso</li>
              <li>Panceta Ahumada</li>
              <li>Cebolla Crispy</li>
              <li>Aderezo KIDDO</li>
            </ul>
            <ul className="lista">
              <li>Simple ........$7900</li>
              <li>Doble ........$9900</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="veggie">
            <img src="/imagenes/vegetariana.png" alt="VEGGIE" />
            <h3>VEGGIE</h3>
            <p>INGREDIENTES</p>
            <ul className="lista">
              <li>Medallon de Soja</li>
              <li>Queso</li>
              <li>Tomate</li>
              <li>Lechuga</li>
              <li>Aderezo KIDDO</li>
            </ul>
            <ul className="lista">
              <li>Simple ........$7000</li>
              <li>Doble ........$9500</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="vegan">
            <img src="/imagenes/vegana.png" alt="VEGAN" />
            <h3>VEGAN</h3>
            <p>INGREDIENTES</p>
            <ul className="lista">
              <li>Medallon de Hongos</li>
              <li>Queso Vegano</li>
              <li>Lechuga</li>
              <li>Tomate</li>
              <li>Cebolla Crispy</li>
              <li>Ketchup</li>
            </ul>
            <ul className="lista">
              <li>Simple ........$8000</li>
              <li>Doble ........$10000</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="papas">
            <img src="/imagenes/papas.png" alt="PAPAS" />
            <div className="lista">
              <h3>PAPAS</h3>
              <p>$3000</p>
              <p>OPCIONAL</p>
              <p>Sazonador KIDDO</p>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="nuggets">
            <img src="/imagenes/nuggets.png" alt="NUGGETS" />
            <h3>NUGGETS</h3>
            <p>$3500</p>
            <p>CONTIENE</p>
            <ul className="lista">
              <li>X6 unidades</li>
              <li>Aderezo KIDDO</li>
              <li>Ketchup</li>
              <li>Mayonesa</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="white">
            <img src="/imagenes/white.png" alt="WHITE" />
            <h3>WHITE</h3>
            <p>$12500</p>
            <p>CONTIENE</p>
            <ul className="lista">
              <li>Melvin Simple</li>
              <li>Papas</li>
              <li>Nuggets</li>
              <li>Bebida Sin Alcohol</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="chombo">
            <img src="/imagenes/chombo1.png" alt="CHOMBO" />
            <h3>CHOMBO</h3>
            <p>$15700</p>
            <p>CONTIENE</p>
            <ul className="lista">
              <li>Cheeseburger Simple</li>
              <li>VEGGIE</li>
              <li>Papas</li>
              <li>Bebida sin alcohol adicional</li>
            </ul>
          </div>
        </div>

        <div className="menu-item">
          <div className="bebidas">
            <img src="/imagenes/bebidas.png" alt="BEBIDAS" />
            <h3>BEBIDAS</h3>
            <p>CONTIENE</p>
            <ul className="lista">
              <li>Agua ....... $2400</li>
              <li>Coca Cola ........ $2600</li>
              <li>Fanta ........ $2600</li>
              <li>Sprite ........ $2600</li>
              <li>Patagonia ........ $4000</li>
            </ul>
          </div>
        </div>
      </div>
      <a
  href="https://www.pedidosya.com.ar/?utm_source=google&utm_medium=cpc&utm_campaign=740125327&sem_tracker=740125327&gad_source=1&gclid=Cj0KCQiA6Ou5BhCrARIsAPoTxrAbNS_4f4bxb1esah7k8f9SotUClZthIxox9DwmwP4-eXoqXNvnTHgaAo8wEALw_wcB"
  target="_blank"
  rel="noopener noreferrer"
  className="Comprar"
>
  COMPRAR
</a>

    </div>
  );
};

export default Menu;

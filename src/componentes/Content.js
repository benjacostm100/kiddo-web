import React, { useState } from "react";
import './Content.css'

function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {/* Promociones Exclusivas */}
            <section className="product-cards">
                <h1>Promociones exclusivas</h1>
                <div className="cardsContainer">
                    <div className="card">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zg7wtWO0os_wxt1H2Mi5PxAl8IxMPagcCg&s"
                            alt="Promo 1"
                        />
                        <div className="card-overlay">
                            <p>¡Disfruta nuestra promoción 2x1 en hamburguesas clásicas todos los martes!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwr2-5zJF9NELmm9wwPS2evo6yvE0DvvtIqlRzGezMBhoW_NKeRazhhVwHFepUQ1v_MQ&usqp=CAU"
                            alt="Promo 2"
                        />
                        <div className="card-overlay">
                            <p>Combos familiares con un 20% de descuento este fin de semana.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtPB5rRWZvZ8CK7pwUVRys6MNMCDbxQ_7Ytk5tRZyPzq8REDvac-uM2T1iJHFmlW8t5c&usqp=CAU"
                            alt="Promo 3"
                        />
                        <div className="card-overlay">
                            <p>Prueba nuestra nueva hamburguesa BBQ con papas rústicas gratis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tarjeta Kiddo */}
            <section className="kiddo-card-section">
                <div className="kiddo-card-info">
                    <h2>¡Conoce la Tarjeta Kiddo!</h2>
                    <p>Obtén descuentos exclusivos en tus comidas favoritas. Con la Tarjeta Kiddo, cada visita se convierte en una experiencia única y llena de sabor. ¡Únete a nuestra comunidad hoy mismo!</p>
                    <button onClick={openModal}>Pedir Ahora</button>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div id="kiddo-modal" className="modal">
                        <div className="modal-content">
                            <span id="close-modal" className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <h2>Solicita tu Tarjeta Kiddo</h2>
                            <form id="kiddo-form">
                                <div>
                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div>
                                    <label htmlFor="phone">Teléfono:</label>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>
                                <button type="submit">Enviar Solicitud</button>
                            </form>
                        </div>
                    </div>
                )}
            </section>

            {/* Clientes Satisfechos */}
            <section className="clientes-satisfechos">
                <div className="container text-center py-5">
                    <h2 className="mb-4">Clientes Satisfechos</h2>
                    <div className="scroll-container">
                        {/* Opinión 1 */}
                        <div className="cliente-card">
                            <img
                                src="https://img.freepik.com/fotos-premium/primer-plano-persona-ia-generativa-afro_797840-13366.jpg"
                                alt="Cliente 1"
                                className="rounded-circle mb-3"
                            />
                            <h5>María López</h5>
                            <p className="text-muted">"¡La mejor hamburguesa que he probado! El servicio es impecable y siempre tienen promociones increíbles."</p>
                            <div className="estrellas">★★★★★</div>
                        </div>
                        {/* Opinión 2 */}
                        <div className="cliente-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Cliente 2"
                                className="rounded-circle mb-3"
                            />
                            <h5>Carlos Gómez</h5>
                            <p className="text-muted">"El ambiente es perfecto para pasar tiempo con la familia. ¡Recomendado 100%!"</p>
                            <div className="estrellas">★★★★☆</div>
                        </div>
                        {/* Opinión 3 */}
                        <div className="cliente-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Cliente 3"
                                className="rounded-circle mb-3"
                            />
                            <h5>Lucía Fernández</h5>
                            <p className="text-muted">"Las hamburguesas son deliciosas, pero las papas con cheddar son simplemente espectaculares."</p>
                            <div className="estrellas">★★★★★</div>
                        </div>
                        {/* Opinión 4 */}
                        <div className="cliente-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Cliente 4"
                                className="rounded-circle mb-3"
                            />
                            <h5>Juan Pérez</h5>
                            <p className="text-muted">"La atención al cliente es de primera, siempre te hacen sentir especial."</p>
                            <div className="estrellas">★★★★☆</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;

import React from 'react';
import './Products.css';

const Products = () => {
return (
    <section className="productos">
    <h2 className="products-titulo">Nuestros Productos</h2>
    <div className="products-contenedor">
        <div className="product-card">
        <img 
            src="foto" 
            alt="Vans1" 
            className="product-image"
        />
        <h3>Vans</h3>
        <p className="product-description">
            unicas en el mercado, bordados y terminaciones de calidad.
        </p>
        <p className="product-price">$55000</p>
        <button className="product-button">Comprar</button>
        </div>

        <div className="product-card">
        <img 
            src="foto" 
            alt="Nike1" 
            className="product-image"
        />
        <h3>Converse</h3>
        <p className="product-description">
            Zapatillas de primera calidad.
        </p>
        <p className="product-price">$140.00</p>
        <button className="product-button">Comprar</button>
        </div>

        <div className="product-card">
        <img 
            src="foto" 
            alt="Converse1" 
            className="product-image"
        />
        <h3>Converse</h3>
        <p className="product-description">
            Zapatillas de cuerdo, bordadas, y plantilla especiales.
        </p>
        <p className="product-price">$120.00</p>
        <button className="product-button">Comprar</button>
        </div>
    </div>
    </section>
);
};

export default Products;
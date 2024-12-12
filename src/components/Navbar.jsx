import React from 'react';
import './Navbar.css';

const Navbar = () => {
return (
    <nav className="zona-nav">
    <div className="navbar-contenedor">
        <h1>Zapas-Max</h1>
        <ul className="nav-menu">
        <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
            <a href="/servicios" className="nav-link">Vans</a>
        </li>
        <li className="nav-item">
            <a href="/productos" className="nav-link">Nike</a>
        </li>
        <li className="nav-item">
            <a href="/contacto" className="nav-link">Converse</a>
        </li>
        </ul>
    </div>
    </nav>
);
};

export default Navbar;
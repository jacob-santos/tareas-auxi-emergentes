import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Mi Página Web</h1>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

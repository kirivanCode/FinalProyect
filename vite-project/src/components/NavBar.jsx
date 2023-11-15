// NavBar.jsx
import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/" className="active-link">Inicio</NavLink></li>
        <li className="nav-item"><NavLink to="/ProductList" className="active-link">Catálogo</NavLink></li>
        <li className="nav-item"><NavLink to="/AboutUsPage" className="active-link">Sobre Nosotros</NavLink></li>
        <li className="nav-item"><NavLink to="/cart">Carrito ({cartItemCount})</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;


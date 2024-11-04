import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <h2 className="logo">Menu de Escolhas de API</h2>
            <nav className="navbar">
                <Link className="nav-link" to="/">Início</Link>
                <Link className="nav-link" to="/sobre">Sobre</Link>
                <Link className="nav-link" to="/contato">Contato</Link>
            </nav>
        </header>
    );
}

export default Header;

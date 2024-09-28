import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="header">
            <h2 className="logo">Menu de Escolhas de API</h2>
            <nav className="navbar">
                <Link className="nav-link" to="/">Início</Link>
                <Link className="nav-link" to="/JogoDaVelha">Jogo da veia</Link>
                <Link className="nav-link" to="/Nutricionismo">Nutricionismo</Link>
                <Link className="nav-link" to="/Filme">Buscar Filme</Link>
            </nav>
        </header>
    );
}

export default Header;

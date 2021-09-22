import React from "react";
import './Nav.css';
import F1Logo from '../../Images/f1-web.png'

const Nav = () => {
    return(
    <section className="f1-nav-container">
        <nav className="f1-nav">
            <ul>
                <li><a href="#"><span className="nav-item">Noticias</span></a></li>
                <li><a href="#"><span className="nav-item">Esports</span></a></li>
                <li><a href="#"><span className="nav-item">Comunidad</span></a></li>
                <li><img className="imgLogo" src={F1Logo} alt="F1 Logo" /></li>
                <li><a href="#"><span className="nav-item">Gaming</span></a></li>
                <li><a href="#"><span className="nav-item">¡Apóyanos!</span></a></li>
                <li><a href="#"><span className="nav-item">Contacto</span></a></li>
            </ul>
        </nav>
    </section>
    );
};

export { Nav };
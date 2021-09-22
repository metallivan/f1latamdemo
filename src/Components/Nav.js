import React from "react";
import './Nav.css';
import F1Logo from '../Images/f1-web.png'

const Nav = () => {
    return(
    <div className="f1-nav-container">
        <nav className="f1-nav">
            <ul>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Esports</a></li>
                <li><a href="#">Comunidad</a></li>
                <li><a href="#"><img className="imgLogo" src={F1Logo} alt="F1 Logo" /></a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">¡Apóyanos!</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </div>
    );
};

export { Nav };
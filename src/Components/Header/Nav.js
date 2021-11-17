import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import F1Logo from "../../Images/paddockers.svg";
import Burger from "./burger";
import "./Nav.css";

const Nav = () => {

  const [burgerMenuActive, setBurgerMenuActive] = useState('');

  const toggleBurgerMenu = () => {
    !burgerMenuActive ? setBurgerMenuActive('active') : setBurgerMenuActive('')
  }

  return (
    <header className="f1-nav-container">
      <BrowserRouter>
      <nav className="f1-nav">
        <ul>
          <li className="logo">
            <div>
              <img className="imgLogo" src={F1Logo} alt="F1 Logo" />
            </div>
          </li>
          <li className="hamburger" >
            <Burger onClickBurger={toggleBurgerMenu} />
          </li>

          {
            NavItems.map( (item, idx) => 
              <li className="menu-links" key={idx}>
                <Link to={item.url}>
                  <span className="nav-item">{item.item}</span>
                </Link>
              </li>
              )
          }
        </ul>
      </nav>

          <div className={`menu-hamburger ${burgerMenuActive}`}>
          {
            NavItems.map( (item, idx) => 
                <div className="menu-hamburger__item" key={idx}>
                <Link to={item.url}>
                  <span className="nav-item">{item.item}</span>
                </Link>
            </div>
              )

            }
          </div>
      </BrowserRouter>
      <script src="./burger.js"></script>
    </header>
  );
};

export { Nav };

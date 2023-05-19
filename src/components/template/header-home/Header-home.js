import React, { useState } from "react";
import "./header-home.scss";
import { Link } from "react-router-dom";

function HeaderHome (){

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return(
    <>
      <header class="header-home">
        <div className="optimal-width">
            <div className="logo">
              <Link to="/">
                <img className="img-logo" src="./img/autres/logo.png" alt="logo entreprise Titi Burger"/>
              </Link>
            </div>
           
            <nav >
                <div className="boutons">
                    <Link to="/clickandcollect" className="callToAction">Click & Collect</Link>
                    <Link to="" className="callToAction">Livraison</Link>
                </div>
                <div className="navigation">
                    <a href="#ancre-nosburgers">La Carte</a>
                    <a href="#ancre-titiStory">Titi Story</a>
                    <a href="#ancre-leresto">Le Resto</a>
                    <a href="#ancre-actus">Actus</a>
                    <a href="carte">Réserver</a>
                </div>
            </nav>
        </div>
        <div className="toggle" onClick={toggle}>
          <i className="fa-solid fa-bars ouvrir"></i>
        </div>
        <div className={"header-mobile " + (isActive ? 'open' : '')}>
          <div className="toggle" onClick={toggle}>
            <i class="fa-solid fa-x"></i>
          </div>
          <Link to="/clickandcollect" className="callToAction">Click & Collect</Link>
          <Link to="" className="callToAction">Livraison</Link>
          <a href="#ancre-nosburgers">La Carte</a>
          <a href="#ancre-titiStory">Titi Story</a>
          <a href="#ancre-leresto">Le Resto</a>
          <a href="#ancre-actus">Actus</a>
          <a href="carte">Réserver</a>
        </div>
      </header>
    </>
  )
}
export default HeaderHome;
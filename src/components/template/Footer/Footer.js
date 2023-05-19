import React from "react"
import {Link, Outlet} from "react-router-dom"
import "./footer.scss"

function Footer(){

  return(

    <>
      <footer>
        <div className="footer">
          <ul className="mentions">
            <Link to="">Mentions légales</Link>
            <Link to="">CGU</Link>
            <Link to="">CGV</Link>
          </ul>
          <ul className="plandusite">
            <Link to="">Plan du site</Link>
            <Link to="">La carte</Link>
            <Link to="">Titi Story</Link>
            <Link to="">Le resto</Link>
            <Link to="">Actus</Link>
          </ul>
          <div className="map">
            <p>Où nous trouver ?</p>
            <div className="mapouter">
                <div className="gmap_canvas" id="map"></div>
            </div>
          </div>
          <ul className="contact">
              <Link to="">Contact</Link>
              <Link to="">Où nous trouver ?</Link>
              <Link to="">FAQ</Link>
          </ul>
          <ul className="reseaux">
              <Link to="">Instagram</Link>
              <Link to="">Facebook</Link>
              <Link to="">TikTok</Link>
          </ul>
        </div>
      </footer>
    </>
  )
}
export default Footer
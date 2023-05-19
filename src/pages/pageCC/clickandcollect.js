import React from "react"
import "./clickandcollect.scss"
import Header from "../../components/template/header/Header"
import { Link } from "react-router-dom";



function Clickandcollect () {

  
  return(
    <>
      <Header/>
      <div className="click">
        <h2>Click & Collect</h2>
        <h3>Commandez et dégustez</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum saepe ipsum earum consectetur reiciendis inventore non temporibus omnis et? Explicabo, molestiae.</p>
      </div>

      
  
      <div className="suivant">
        <div className="start">
        <Link to="/burgers" className="callToAction">Commencer</Link>
        </div>
      </div>
    </>
  )
}

export default Clickandcollect
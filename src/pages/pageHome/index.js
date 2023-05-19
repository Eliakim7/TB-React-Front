import React from "react";
import "./home.scss"
import Slide from "../../components/slide";
import HeaderHome from "../../components/template/header-home/Header-home"
import { Link } from "react-router-dom";

function Home (){

  return(
    <>
        <HeaderHome/>
      <main>
        <section className="banniere">
        <img className="banniere-img" src="img/Autres/banniere.png" alt="Le Resto"/>

        </section>

        <section className="Titi">
             <div className="resto">
                <h2 id="ancre-leresto">Le Resto</h2>
                <img className="restoIMG" src="img/Autres/restaurant.jpg" alt="Le Resto"/>
            </div>
            <div className="histoire">
                <h2 id="ancre-titiStory">Titi Story</h2>
                <div className="authentique-team">
                    <h3>Une équipe authentique</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum expedita nobis libero alias debitis laboriosam delectus sequi, ea voluptatum voluptatibus saepe quo architecto tenetur iusto repellendus quam ipsam dolore amet.</p>
                </div>
            </div>
        </section>
            <div className="pinkLine"></div>
        <section className="burgers">
            <div id="nosBurgers">
                <h2 id="ancre-nosburgers">Nos Burgers</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum saepe ipsum earum consectetur reiciendis inventore non temporibus omnis et? Explicabo, molestiae. </p>
            </div>
             <div id="slideShow">
                <div className="carousel">
                   <Slide/>
                </div>
            </div>
        </section>
        <div className="pinkLine"></div>
        <section className="actus">
            <h2 id="ancre-actus">Actus</h2>
            <div className="actu optimal-width">
            <div className="actus-item">
                <p className="actus-title">Notre Dark Titi arrive</p>
                <img className="actus-img" src="./img/burgers/hamburger-noir.jpg" alt=""/>
                <p className="actus-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum saepe ipsum earum consectetur reiciendis inventore non temporibus omnis et? Explicabo, molestiae.</p>
                <Link to="" className="callToAction">En savoir +</Link>
            </div>
            <div className="actus-item">
                <p className="actus-title">Des cocktails sur mesure</p>
                <img className="actus-img" src="./img/boissons/limonade.jpg" alt=""/>
                <p className="actus-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum saepe ipsum earum consectetur reiciendis inventore non temporibus omnis et? Explicabo, molestiae.</p>
                <Link to="" className="callToAction">En savoir +</Link>
            </div>
            <div className="actus-item">
                <p className="actus-title">Une ambiance authentique</p>
                <img className="actus-img" src="./img/autres/Open.jpg" alt=""/>
                <p className="actus-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum saepe ipsum earum consectetur reiciendis inventore non temporibus omnis et? Explicabo, molestiae.</p>
                <Link to="" className="callToAction">En savoir +</Link>
            </div>
            </div>
        </section>
        <section className="newsletter">
            <div className="container-newsletter">
                <div id="offres">
                    <p>Des offres et des actus <br></br> chaque semaine sur Titi Burger</p>
                </div>
                <div id="email">
                    <p>Inscription à la newsletter</p>
                    <input type="email" name="email" placeholder="Votre email"></input>
                    <button>Envoyer</button>
                </div>
            </div>
        </section>
    </main>
        
    </>
  )
}
export default Home;
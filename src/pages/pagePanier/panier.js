import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./panier.scss";
import Header from "../../components/template/header/Header";

//URL API

function Panier() {
  const [burger, setBurger] = useState([]);
  const [accompagnement, setAccompagnement] = useState([]);
  const [boisson, setBoisson] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    setBurger(JSON.parse(localStorage.getItem("burger")));
    setAccompagnement(JSON.parse(localStorage.getItem("accompagnement")));
    setBoisson(JSON.parse(localStorage.getItem("boisson")));
    setDessert(JSON.parse(localStorage.getItem("dessert")));
  }, []);

  return (
    <>
      <Header />
      <h1>Votre commande</h1>

      <section>
        <div className="burger">
          <ul id="api">
            <label htmlFor={burger._id}>
              <div className="burger-img">
                <img src={burger.Image} alt="" />
              </div>
              <div className="burger-desc">
                <h2> {burger.Name} </h2>
                <p> {burger.Description} </p>
              </div>
              <div className="burger-price">
                <p> {burger.Price?.$numberDecimal} €</p>
              </div>
            </label>
          </ul>
        </div>
        <div className="side">
          <ul id="api">
            <label htmlFor={accompagnement._id}>
              <div className="side-img">
                <img src={accompagnement.Image} alt="" />
              </div>
              <div className="side-desc">
                <h2> {accompagnement.Name} </h2>
                <p> {accompagnement.Description} </p>
              </div>
              <div className="side-price">
                <p> {accompagnement.Price?.$numberDecimal} €</p>
              </div>
            </label>
          </ul>
        </div>
        <div className="boisson">
          <ul id="api">
            <label htmlFor={boisson._id}>
              <div className="boisson-img">
                <img src={boisson.Image} alt="" />
              </div>
              <div className="boisson-desc">
                <h2> {boisson.Name} </h2>
                <p> {boisson.Description} </p>
              </div>
              <div className="boisson-price">
                <p> {boisson.Price?.$numberDecimal} €</p>
              </div>
            </label>
          </ul>
        </div>
        <div className="dessert">
          <ul id="api">
            <label htmlFor={dessert._id}>
              <div className="dessert-img">
                <img src={dessert.Image} alt="" />
              </div>
              <div className="dessert-desc">
                <h2> {dessert.Name} </h2>
                <p> {dessert.Description} </p>
              </div>
              <div className="dessert-price">
                <p> {dessert.Price?.$numberDecimal} €</p>
              </div>
            </label>
          </ul>
        </div>
      </section>

      <button className="callToAction" /* onClick={next} */>Suivant</button>
    </>
  );
}

export default Panier;

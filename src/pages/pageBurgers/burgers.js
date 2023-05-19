import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./burgers.scss";
import Header from "../../components/template/header/Header";

//URL API
import { URL } from "../../utils/constantes/urls.js";

function Burgers() {
  const [burger, setBurger] = useState([]);
  const [choosedProduct, setChoosedProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    //requete api
    const fetchBurgers = async () => {
      try {
        const { data } = await axios.get(URL.fetchBurger);
        setBurger(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchBurgers();
  }, []); /*pour stopper l'iteration du useEffect et faire qu'il ne s'affiche qu'une fois */

  function handleChange(event) {
    setChoosedProduct(event.target.value);
  }

  async function next() {
    if (choosedProduct !== undefined) {
      const { data } = await axios.get(URL.fetchOneBurger + choosedProduct);
      localStorage.setItem("burger", JSON.stringify(data));
      // JSON.parse() permet de transformer la chaine de caractere en objet
      navigate("/accompagnements");
    }
  }

  return (
    <>
      <Header />
      <section className="burger-cc optimal-width">
        <div className="intro-burger">
          <h2>Nos Burgers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at
            ultrices praesent posuere sit. Pulvinar est sagittis in ultrices.
            Mauris est sed id orci, massa in. Leo duis sed eu lacinia bibendum
            fermentum ac cras.Lorem ipsum
          </p>
        </div>
        <div className="cc-burger">
          <h2>Click & Collect</h2>
          <h3>Commandez et dégustez</h3>
          <div className="filAriane">
            <div class="ariane-vide"></div>
            <div class="ariane-vide"></div>
            <div class="ariane-vide"></div>
            <div class="ariane-vide"></div>
            <p>Paiement</p>
          </div>
        </div>
      </section>
      <div className="burger">
        <ul id="api">
          {burger.map((item) => {
            return (
              <li key={item._id}>
                <input
                  onChange={handleChange}
                  value={item._id}
                  type="radio"
                  name="choix"
                  id={item._id}
                />
                <label htmlFor={item._id}>
                  <div className="burger-img">
                    <img src={item.Image} alt="" />
                  </div>
                  <div className="burger-desc">
                    <h2> {item.Name} </h2>
                    <p> {item.Description} </p>
                  </div>
                  <div className="burger-price">
                    <p> {item.Price.$numberDecimal} €</p>
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="next">
        <button className="callToAction" onClick={next}>
          Suivant
        </button>
      </div>
    </>
  );
}

export default Burgers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./desserts.scss";
import Header from "../../components/template/header/Header";

//URL API
import { URL } from "../../utils/constantes/urls.js";

function Desserts() {
  const [dessert, setDessert] = useState([]);
  const [choosedProduct, setChoosedProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    //requete api
    const fetchDesserts = async () => {
      try {
        const { data } = await axios.get(URL.fetchDessert);
        setDessert(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchDesserts();
  }, []); /*pour stopper l'iteration du useEffect et faire qu'il ne s'affiche qu'une fois */

  function handleChange(event) {
    setChoosedProduct(event.target.value);
  }

  async function next() {
    if (choosedProduct !== undefined) {
      const { data } = await axios.get(URL.fetchOneDessert + choosedProduct);
      localStorage.setItem("dessert", JSON.stringify(data));
      // JSON.parse() permet de transformer la chaine de caractere en objet
      navigate("/panier");
    }
  }

  return (
    <>
      <Header />
      <section className="dessert-cc optimal-width">
        <div className="intro-dessert">
          <h2>Nos Desserts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at
            ultrices praesent posuere sit. Pulvinar est sagittis in ultrices.
            Mauris est sed id orci, massa in. Leo duis sed eu lacinia bibendum
            fermentum ac cras.Lorem ipsum
          </p>
        </div>
        <div className="cc-dessert">
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
      <div className="dessert">
        <ul id="api">
          {dessert.map((item) => {
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
                  <div className="dessert-img">
                    <img src={item.Image} alt="" />
                  </div>
                  <div className="dessert-desc">
                    <h2> {item.Name} </h2>
                    <p> {item.Description} </p>
                  </div>
                  <div className="dessert-price">
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

export default Desserts;

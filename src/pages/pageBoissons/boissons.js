import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./boissons.scss";
import Header from "../../components/template/header/Header";

//URL API
import { URL } from "../../utils/constantes/urls.js";

function Boissons() {
  const [boisson, setBoisson] = useState([]);
  const [choosedProduct, setChoosedProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    //requete api
    const fetchBoissons = async () => {
      try {
        const { data } = await axios.get(URL.fetchBoisson);
        setBoisson(data);
      } catch (error) {
        console.log(error.message());
      }
    };
    fetchBoissons();
  }, []); /*pour stopper l'iteration du useEffect et faire qu'il ne s'affiche qu'une fois */

  function handleChange(event) {
    setChoosedProduct(event.target.value);
  }

  async function next() {
    if (choosedProduct !== undefined) {
      const { data } = await axios.get(URL.fetchOneBoisson + choosedProduct);
      localStorage.setItem("boisson", JSON.stringify(data));
      // JSON.parse() permet de transformer la chaine de caractere en objet
      navigate("/desserts");
    }
  }

  return (
    <>
      <Header />
      <section className="boisson-cc optimal-width">
        <div className="intro-boisson">
          <h2>Nos Boissons</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at
            ultrices praesent posuere sit. Pulvinar est sagittis in ultrices.
            Mauris est sed id orci, massa in. Leo duis sed eu lacinia bibendum
            fermentum ac cras.Lorem ipsum
          </p>
        </div>
        <div className="cc-boisson">
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
      <div className="boisson">
        <ul id="api">
          {boisson.map((item) => {
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
                  <div className="boisson-img">
                    <img src={item.Image} alt="" />
                  </div>
                  <div className="boisson-desc">
                    <h2> {item.Name} </h2>
                    <p> {item.Description} </p>
                  </div>
                  <div className="boisson-price">
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

export default Boissons;

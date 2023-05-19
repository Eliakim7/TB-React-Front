import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { URL } from '../../utils/constantes/urls';
import { Archive  } from 'react-bootstrap-icons'

const BoissonDS = () => {

  const [boissons, setBoissons] = useState([]);
  //connexion à l'api pour récupérer les boissons
  useEffect(()=> {
    const getBoissons = async () => {
      try {
        const {data} = await axios.get(`${URL.fetchBoisson}`)
        setBoissons(data) //met à jour le state avec les données de data (cela va s'enregistrer dans le state)
      } catch (error) {
        console.log(error)
      }       
    }
    getBoissons()
  })

  const deleteBoisson = () =>{
    alert("yoyoyo")
  }
  return (
    <>
      <h1>BOISSON</h1>

      <table className='table' border="1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody className='table-group-divider'>
          {boissons.map(boisson => (
            <tr>
            <th scope="row"></th>
            <td>{boisson.Name}</td>
            <td><img src={boisson.Image} alt="" width="100"/></td>
            <td>{boisson.Description}</td>
            <td>{boisson.Price.$numberDecimal}</td>
            <td><button onClick={deleteBoisson}><Archive color="royalblue" size={50}/></button></td>
          </tr>
          ))}
          
        </tbody>
      </table>

      <form>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" placeholder='name'/>
        <label htmlFor='image'>Image</label>
        <input type="text" id="image" placeholder='image'/>
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" placeholder='description'/>
        <label htmlFor='price'>Price</label>
        <input type="text" id="price" placeholder='price'/>
        <button>Valider</button>
      </form>
    </>
  )
}

export default BoissonDS
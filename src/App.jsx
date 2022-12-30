import { useEffect, useState } from "react";
import axios from "axios";

const CRYPTOCURRENCY_LIST_API_URL = `${import.meta.env.VITE_API_URL}assets`;

function App() {

  const [criptos, setCriptos] = useState();

  useEffect(() => {

    axios.get(CRYPTOCURRENCY_LIST_API_URL)      
      .then((data) => {        
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error('Peticion Fallo');
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({id, name, priceUsd}) => {
          return (
            <li key={id}>
              Nombre: {name} <br />
              Precio: {priceUsd} <br />
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default App

import { useEffect, useState } from "react"

const CRYPTOCURRENCY_LIST_API_URL = 'https://api.coincap.io/v2/assets';

function App() {

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    fetch(CRYPTOCURRENCY_LIST_API_URL)
      .then(response => response.json())
      .then(data => {
        setCriptos(data.data);
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

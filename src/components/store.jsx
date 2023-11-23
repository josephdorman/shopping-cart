import { useState, useEffect } from 'react'
import Card from './card'
import '../styles/store.css'

function Store() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery', {mode: "cors"}) // to fetch men's clothing use "men's%20clothing"
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then(json => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [])

  return (
    <>
      <p>THIS IS THE STORE PAGE</p>
      {error 
      ? <p>A network error was encountered</p> // if error render error
      : loading ? <p>Loading...</p> // if no error check if loading and output loading if loading
      : <Card data={data}/> // if not loading then render the card (data finished fetching)
      }
    </>
  )
}

export default Store
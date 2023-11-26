import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react'
import App from '../App.jsx'
import Store from './store.jsx';
import Home from './home.jsx';
import Cart from './cart.jsx'
import ErrorPage from './errorPage.jsx';
import ProductPage from "./productPage.jsx";

function Router() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=1', {mode: "cors"}) // to fetch men's clothing use "men's%20clothing"
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

  const onProductClick = (product) => {
    setProduct(product)
  }

  const onAddToCart = (product) => {
    setCart(cart => [...cart, product]);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "store", element: <Store data={data} error={error} loading={loading} onProductClick={onProductClick}/>},
        { path: "cart", element: <Cart cart={cart}/> },
        { path: "product/:name", element: <ProductPage product={product} onAddToCart={onAddToCart}/>},
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router
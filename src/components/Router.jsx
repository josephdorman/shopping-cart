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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "store", element: <Store data={data} error={error} loading={loading} />},
        { path: "cart", element: <Cart /> },
        { path: "product/:name", element: <ProductPage />},
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router
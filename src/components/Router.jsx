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
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=3', {mode: "cors"}) // to fetch men's clothing use "men's%20clothing"
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

  // TODO: PROBABLY MAKE A NEW FUNC TO JUST HANDLE DUPLICATION CHECKS
  // AND CONTINUE THE SETQUANTITY FUNCTION TO CHECK IF QUANTITY
  // DECREASES OR INCREASES

  const setQuantity = (item, mode = null) => {
    // if quantity key not in obj, first time being added to cart so give it quantity key init to 1
    if ('quantity' in item === false) {
      product.quantity = 1;
    } // else its already in cart, so just increase quantity
    else if (mode === 'add' || mode === null) {
      const ind = cart.findIndex(obj => obj.id === item.id);
      cart[ind].quantity++;
      setCart([...cart]);
    }
    else if (mode === 'sub') {
      const ind = cart.findIndex(obj => obj.id === item.id);
      cart[ind].quantity--;
      setCart([...cart]);
    }
  }

  // set product for product page to render clicked/focused product
  const onProductClick = (product) => {
    setProduct(product)
  }

  const onAddToCart = (item) => {
    //cart.find(obj => obj.id === item.id) === undefined
    // check if item is in cart
    // if not in cart set initial quantity and add it
    if (cart.find(obj => obj.id === item.id) === undefined) {
      setQuantity(item);
      setCart(cart => [...cart, item])
    } // else already cart just increase quantity
    else {
      setQuantity(item);
    }
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "store", element: <Store data={data} error={error} loading={loading} onProductClick={onProductClick}/>},
        { path: "cart", element: <Cart cart={cart} setQuantity={setQuantity}/> },
        { path: "product/:name", element: <ProductPage product={product} onAddToCart={onAddToCart}/>},
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router
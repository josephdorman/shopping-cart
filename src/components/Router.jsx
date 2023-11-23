import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App.jsx'
import Store from './store.jsx';
import Home from './home.jsx';
import ErrorPage from './errorPage.jsx';

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "store", element: <Store />,},
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router
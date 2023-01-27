import { createBrowserRouter, redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import OrderStatus from "../views/OrderStatus";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    // loader: teamLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/order-status", element: <OrderStatus /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);

export default router;

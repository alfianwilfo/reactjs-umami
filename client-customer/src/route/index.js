import { createBrowserRouter, redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    // loader: teamLoader,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../views/Login";
import Register from "../views/Register";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);

export default router;

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./route/";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { Navigate } from "react-router-dom"; 
import Layout from "../components/Layout.jsx";
import HomePage from "../Pages/HomePage.jsx";
import Colecciones from "../Pages/Colecciones.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import RegisterPage from "../Pages/RegisterPage.jsx";
import InfoPage from "../Pages/InfoPage.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "home", element: <HomePage /> },
      { path: "colecciones", element: <Colecciones /> }, // Ruta para colecciones
      { path: "info", element: <InfoPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

];

export default routes;

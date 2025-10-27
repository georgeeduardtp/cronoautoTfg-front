import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import CocheDetail from "@/pages/Coche-detail";
import Coches from "@/pages/Coches";
import Contacto from "@/pages/Contacto";
import Registro from "@/pages/Registro";
import Login from "@/pages/Login";


export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/coches", element: <Coches /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/registro", element: <Registro /> },
  { path: "/login", element: <Login /> },
  { path: "/Coche-detail", element: <CocheDetail /> },

]);

import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import CocheDetail from "@/pages/Coche-detail";
import Coches from "@/pages/Coches";


export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/coches", element: <Coches /> },
  
  { path: "/Coche-detail.tsx", element: <CocheDetail /> },

]);

import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import CocheDetail from "@/pages/Coche-detail";


export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Coche-detail.tsx", element: <CocheDetail /> },

]);

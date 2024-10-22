import { createBrowserRouter } from "react-router-dom"; 
import HistoricoConsultas from "../pages/HistoricoConsultas";
import MarcarConsulta from "../pages/MarcarConsulta";

const router = createBrowserRouter([
    {path: "/", element: <HistoricoConsultas />},
    {path: "/", element: <MarcarConsulta />},


])

export default router;

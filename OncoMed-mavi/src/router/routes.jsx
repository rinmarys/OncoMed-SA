import { createBrowserRouter } from "react-router-dom"; 

import HistoricoConsultas from "../pages/HistoricoConsultas";
import MarcarConsulta from "../pages/MarcarConsulta";
import SolicitacaoConsulta from "../pages/SolicitacaoConsulta";

const router = createBrowserRouter([
    {path: "/", element: <HistoricoConsultas />},
    {path: "/marcarconsulta", element: <MarcarConsulta />},
    {path: "/solicitacaoconsulta", element: <SolicitacaoConsulta/>}



])

export default router;

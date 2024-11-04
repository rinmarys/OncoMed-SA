import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import TermosUso from "../pages/TermosUso";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";
import Convenio from "../pages/Convenio";
import SobreNos from "../pages/SobreNos";
import MarcarConsulta from "../pages/MarcarConsulta";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/SobreNós", element: <SobreNos />},
    {path: "/TermosUso", element: <TermosUso />},
    {path: "/PoliticaPrivacidade", element: <PoliticaPrivacidade />},
    {path: "/Convênio", element: <Convenio />},
    {path: "/MarcarConsulta", element: <MarcarConsulta />}
])

export default router;

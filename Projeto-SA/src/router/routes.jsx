import { createBrowserRouter } from "react-router-dom"
import MarcarConsulta from "../pages/MarcarConsulta"
import Home from "../pages/Home";
import Sobre_nos from "../pages/Sobre_nos";
import BlogInicio_Paciente from "../pages/BlogInicio_Paciente";
import Cadastro_Paciente from "../pages/Cadastro_Paciente";
import Cadastro_Medico from "../pages/Cadastro_Medico";
import Login from "../pages/Login"

const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/sobrenos", element: <Sobre_nos/>},
    {path: "/blog", element: <BlogInicio_Paciente />},
    {path: "/cadastropaciente", element: <Cadastro_Paciente/>},
    {path: "/cadastromedico", element: <Cadastro_Medico/>},
    {path: "/login", element: <Login/>},
    // {path: "/termosdeuso", element: <Termos_de_uso/>},
    // {path: "/politicadeprivacidade", element: <Politica_de_Privacidade/>}
])

export default router;

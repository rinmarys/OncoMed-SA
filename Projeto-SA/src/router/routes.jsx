import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import BlogInicio_Paciente from "../pages/BlogInicio_Paciente";
import Cadastro_Paciente from "../pages/Cadastro_Paciente";
import Cadastro_Medico from "../pages/Cadastro_Medico";
import Login from "../pages/Login"
import ConteudoBlog from "../pages/ConteudoBlog";
import CriarPostagem from "../pages/CriarPostagem";
import BlogInicio_Admin from "../pages/BlogInicio_Admin";
import SolicitacaoConsulta from "../pages/SolicitacaoConsulta";
import HistoricoConsultas from "../pages/HistoricoConsultas";
import Perfil_paciente from "../pages/Perfil_paciente";
import MarcarConsulta from '../pages/MarcarConsulta'

const router = createBrowserRouter([
    // Header
    {path: "/", element: <Home/>},
    {path: "/blog", element: <BlogInicio_Paciente />},
    {path: "/marcarConsulta", element: <MarcarConsulta />},
    {path: "/perfil_paciente", element: <Perfil_paciente />},
    // Header

    //Cadastro
    {path: "/cadastropaciente", element: <Cadastro_Paciente/>},
    {path: "/cadastromedico", element: <Cadastro_Medico/>},
    {path: "/login", element: <Login/>},
    //Cadastro

    //Blog pacientes
    {path: "/conteudoBlog", element: <ConteudoBlog />},
    //Blog pacientes

    //Blog admin
    {path: "/blogInicioAdmin", element: < BlogInicio_Admin />},
    {path: "/criarPostagem", element: <CriarPostagem />},
    //Blog admin

    //agendamentos
    {path: "/solicitacaoconsulta", element: <SolicitacaoConsulta/>},
    {path: "/historicoconsultas", element: <HistoricoConsultas />},
    //agendamentos


])

export default router;
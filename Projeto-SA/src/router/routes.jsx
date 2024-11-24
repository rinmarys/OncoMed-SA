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
import MeusAgendamentos from "../pages/MeusAgendamentos";
import SobreNos from "../pages/SobreNos";
import EspacoControle_Admin from '../pages/EspacoControle_Admin.jsx'
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade'
import TermosDeUso from '../pages/TermosDeUso'
import Convenio from "../pages/Convenio";
import Perfil_medico from "../pages/Perfil_medico.jsx";

const router = createBrowserRouter([
    // Header
    {path: "/", element: <Home/>},
    {path: "/blog", element: <BlogInicio_Paciente />},
    {path: "/marcarConsulta", element: <MarcarConsulta />},
    {path: "/perfil_paciente", element: <Perfil_paciente />},
    {path: "/meusAgendamentos", element: <MeusAgendamentos />},
    {path: "/historicoConsultas", element: <HistoricoConsultas />},
    // Header

    //Cadastro
    {path: "/cadastropaciente", element: <Cadastro_Paciente/>},
    {path: "/cadastromedico", element: <Cadastro_Medico/>},
    {path: "/login", element: <Login/>},
    //Cadastro

    //Blog pacientes
    {path: "/conteudoBlog", element: <ConteudoBlog />},
    //Blog pacientes

    //Telas Administradores
    {path: "/espacoDeControleAdmin", element: <EspacoControle_Admin />},
    {path: "/blogInicioAdmin", element: < BlogInicio_Admin />},
    {path: "/criarPostagem", element: <CriarPostagem />},
    {path: "/solicitacaoConsulta", element: <SolicitacaoConsulta/>},
    //Telas Administradores

    // Footer
    {path: "/politicaPrivacidade", element: <PoliticaPrivacidade />},
    {path: "/termosDeUso", element: <TermosDeUso />},
    {path: "/convenios", element: <Convenio />},
    {path: "/sobreNos", element: <SobreNos />},
    // Footer

    //Medico
    {path: "/perfilMedico", element: <Perfil_medico />},

])

export default router;
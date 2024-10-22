import { createBrowserRouter } from "react-router-dom"; 
import BlogInicio_Admin from "../pages/BlogInicio_Admin";
import BlogInicio from "../pages/BlogInicio_Paciente";

import ConteudoBlog from "../pages/ConteudoBlog";

const router = createBrowserRouter(
[
    {path: "/", element: <BlogInicio />},
    {path: "/conteudoBlog", element: <ConteudoBlog />},
    {path: "/blogInicioAdmin", element: <BlogInicio_Admin />},
]
)

export default router;
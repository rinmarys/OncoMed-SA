import { createBrowserRouter } from "react-router-dom"; 
import BlogInicio from "../pages/BlogInicio_Paciente";


import ConteudoBlog from "../pages/ConteudoBlog";

const router = createBrowserRouter(
[
    {path: "/", element: <BlogInicio />},
    {path: "/conteudoBlog", element: <ConteudoBlog />},
]
)

export default router;
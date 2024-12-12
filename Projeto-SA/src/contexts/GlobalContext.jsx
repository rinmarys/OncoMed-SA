import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [usuario_logado, set_usuario_logado] = useState([]);
    const [lista_de_pacientes, set_lista_de_pacientes] = useState([]);
    const [lista_de_medicos, set_lista_de_medicos] = useState([]);
    const [lista_de_consultas, set_lista_de_consultas] = useState([]);
    const [usuario_administrador, set_usuario_administrador] = useState([]);
    
    const [objeto_a_armazenar_informacoes_do_blog, set_objeto_a_armazenar_informacoes_do_blog] = useState('');

    const [tempo_do_pop_up_de_boas_vindas, set_tempo_do_pop_up_de_boas_vindas] = useState(false);

    // informações de marcar consulta
    const [selectedDate, setSelectedDate] = useState(null);
    const [array_consultas_do_dia, set_array_consultas_do_dia] = useState([]);
    const [listaInformacoesMarcarConsulta, setListaInformacoesMarcarConsulta] = useState([])

    const [registroBlog, setRegistroBlog] = useState([]);

    const [pop_aberto, set_pop_aberto] = useState(false);
    const [pop_up_de_login, set_pop_up_de_login] = useState(false);
    const [showDeletarSucessoPopup, setShowDeletarSucessoPopup] = useState(false);

    // informações de marcar consulta

    return (
        <GlobalContext.Provider value={{

            pop_aberto,
            set_pop_aberto,
            pop_up_de_login,
            set_pop_up_de_login,

            tempo_do_pop_up_de_boas_vindas,
            set_tempo_do_pop_up_de_boas_vindas,

            usuario_logado,
            set_usuario_logado,
            lista_de_medicos,
            set_lista_de_medicos,
            lista_de_pacientes,
            set_lista_de_pacientes,
            usuario_administrador,
            set_usuario_administrador,

            lista_de_consultas,
            set_lista_de_consultas,

            array_consultas_do_dia,
            set_array_consultas_do_dia,

            //Fecha select
            selectedDate,
            setSelectedDate,
            //Fecha select


            //LISTA BLOG
            registroBlog,
            setRegistroBlog,

            //LISTA BLOG RECENTE
            objeto_a_armazenar_informacoes_do_blog,
            set_objeto_a_armazenar_informacoes_do_blog,
            
            // MARCAR CONSULTA INFORMAÇÔES
            listaInformacoesMarcarConsulta,
            setListaInformacoesMarcarConsulta,
            // MARCAR CONSULTA INFORMAÇÔES

            showDeletarSucessoPopup,
            setShowDeletarSucessoPopup
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

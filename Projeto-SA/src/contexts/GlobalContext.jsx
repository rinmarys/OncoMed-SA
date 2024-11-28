import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [usuario_logado, set_usuario_logado] = useState([]);
    const [lista_de_pacientes, set_lista_de_pacientes] = useState([]);
    const [lista_de_medicos, set_lista_de_medicos] = useState([]);
    const [lista_de_consultas, set_lista_de_consultas] = useState([]);
    const [usuario_administrador, set_usuario_administrador] = useState([{ nome: `Administrador`, email: `administrador@gmail.com`, senha: `1234567` }]);

    const [tempo_do_pop_up_de_boas_vindas, set_tempo_do_pop_up_de_boas_vindas] = useState(false);

    // informações de marcar consulta
    const [selectedDate, setSelectedDate] = useState(null);
    const [array_consultas_do_dia, set_array_consultas_do_dia] = useState([]);
    const [listaInformacoesMarcarConsulta, setListaInformacoesMarcarConsulta] = useState([])

    const [registroBlog, setRegistroBlog] = useState([]);

    // informações de marcar consulta

    return (
        <GlobalContext.Provider value={{

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
            
            // MARCAR CONSULTA INFORMAÇÔES
            listaInformacoesMarcarConsulta,
            setListaInformacoesMarcarConsulta
            // MARCAR CONSULTA INFORMAÇÔES
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [usuario_logado, set_usuario_logado] = useState([]);
    const [lista_de_pacientes, set_lista_de_pacientes] = useState([]);
    const [lista_de_medicos, set_lista_de_medicos] = useState([]);

    return(
        <GlobalContext.Provider value={{

            usuario_logado,
            set_usuario_logado,
            lista_de_medicos,
            set_lista_de_medicos,
            lista_de_pacientes,
            set_lista_de_pacientes
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

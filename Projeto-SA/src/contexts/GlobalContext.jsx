import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [usuario_logado, set_usuario_logado] = useState([]);
    const [lista_de_pacientes, set_lista_de_pacientes] = useState([]);
    const [lista_de_medicos, set_lista_de_medicos] = useState([]);
    const [usuario_administrador, set_usuario_administrador] = useState([{nome: `Administrador`, email: `administrador@gmail.com`, senha: `654321`}]);
    const [selectedDate, setSelectedDate] = useState(null);
    

    return(
        <GlobalContext.Provider value={{

            usuario_logado,
            set_usuario_logado,
            lista_de_medicos,
            set_lista_de_medicos,
            lista_de_pacientes,
            set_lista_de_pacientes,
            usuario_administrador,
            set_usuario_administrador,
            //Fecha select
            selectedDate,
            setSelectedDate
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

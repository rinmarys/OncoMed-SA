import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates, do Mc Donalds'
// let diaDeHoje = "Sexta-feira"
const [diaDeHoje, setDiaDeHoje] = useState('sexta-feira')


    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoje, setDiaDeHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}

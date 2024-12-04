import React from 'react'
import './Pop_up.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
function Pop_up() {

    const navegacao_de_pagina = useNavigate(``);
  
    const {pop_aberto, set_pop_aberto} = useContext(GlobalContext);

    return (

    <div>

        <div className="container_pop_up">

            <div className="alinhamento_de_conteudo_pop_up">

            <div className="coluna_paciente">

            <button onClick={() => navegacao_de_pagina(`/cadastropaciente`)}>
                <img src="Paciente_Popup.svg" alt="Imagem Paciente" className='imagem_paciente'/>
            </button>

                <h4>Priorize sua saúde!</h4>

                <p>Cadastre-se agora e tenha acesso a cuidados médicos personalizados.</p>
            </div>


            <div className="coluna_medico">

            <div className='botao_de_fechar_pop_up_de_cadastro'>

                <button onClick={() => set_pop_aberto(false)}>X</button>

            </div>

            <button onClick={() => navegacao_de_pagina(`/cadastromedico`)}>
                
                <img src="Medico_Popup.svg" alt="Imagem Paciente" />
           
            </button>

                <h4>Junte-se a nós!</h4>

                <p>Cadastre-se e amplie sua rede de cuidados, conectando-se com pacientes que precisam de você.</p>

            </div>

        </div>

    </div>

    </div>
  )
}

export default Pop_up
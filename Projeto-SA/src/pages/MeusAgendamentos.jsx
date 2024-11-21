import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import HamburguerMenu from '../components/HamburgerMenu'
import CalendarioMeusAgendamentos from '../components/CalendarioMeusAgendamentos'
import './MeusAgendamentos.css'
function MeusAgendamentos() {

  const { lista_de_pacientes, array_consultas_do_dia, set_array_consultas_do_dia, usuario_logado } = useContext(GlobalContext);
  const { selectedDate } = useContext(GlobalContext);

  useEffect(() => {

    console.log(`aaaa`, usuario_logado)
    console.log(`cadastroo`, lista_de_pacientes)

    for (let i = 0; i < lista_de_pacientes.length; i++) {

      if (lista_de_pacientes[i].minhas_consulstas == selectedDate && array_consultas_do_dia.includes(usuario_logado) == false) {

        set_array_consultas_do_dia([...array_consultas_do_dia, lista_de_pacientes[i]]);

      };
    };
  }, [lista_de_pacientes]);

  console.log(`Cadastro do dia atual:`, array_consultas_do_dia);

  return (
    <div className='tudo-MeusAgendamentos'>

      <div className="alinhamento-hamburger">
        <HamburguerMenu />
      </div>

      <div className="container-conteudo-meusAgendamentos">
        <div className="alinhamento-texto-mascote-meusAgendamentos">
          <h1>Confira suas próximas consultas e mantenha o cuidado em dia!</h1>
          <img src="JadeMascoteFeliz.png" alt="Jade o mascote felizz" />
        </div>

        <div className="alinhar-meusagendamentos">
          <div className="calendario">
            <CalendarioMeusAgendamentos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeusAgendamentos

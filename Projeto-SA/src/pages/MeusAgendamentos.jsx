import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import Scheduler from '../components/Scheduler'
import HamburguerMenu from '../components/HamburgerMenu'
import Popup_MeusAgendamentos from '../components/Popup_MeusAgendamentos'
import CalendarioMeusAgendamentos from '../components/CalendarioMeusAgendamentos'
import CancelarConsulta from '../components/CancelarConsulta';
import './MeusAgendamentos.css'
function MeusAgendamentos() {

  const { lista_de_pacientes, array_consultas_do_dia, set_array_consultas_do_dia, usuario_logado } = useContext(GlobalContext);
  const { selectedDate, setSelectedDate } = useContext(GlobalContext);

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

      <HamburguerMenu />

      <div className="alinhar-meusagendamentos">
        <img className='imagem-meusagendamentos' src="Imagem_Para_Tela_de_Agendamento.svg" alt="" />

        {/* <Popup_MeusAgendamentos/> */}

        <div className="calendario">
          <CalendarioMeusAgendamentos />
        </div>
      </div>
    </div>
  )
}

export default MeusAgendamentos

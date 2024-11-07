import React from 'react'
import Scheduler from '../components/Scheduler'
import HamburguerMenu from '../components/HamburgerMenu'
import Popup_MeusAgendamentos from '../components/Popup_MeusAgendamentos'
import CalendarioMeusAgendamentos from '../components/CalendarioMeusAgendamentos'
import CancelarConsulta from '../components/CancelarConsulta';
import './MeusAgendamentos.css'
function MeusAgendamentos() {
  return (
    <div className='tudo-MeusAgendamentos'>
      
      <HamburguerMenu />

<div className="alinhar-meusagendamentos">
      <img className='imagem-meusagendamentos' src="img_ofc_meusagendamentos.svg" alt="" />

    <Popup_MeusAgendamentos/>

    <div className="calendario">
       <CalendarioMeusAgendamentos/>
      </div>
      </div>
    </div>
  )
}

export default MeusAgendamentos

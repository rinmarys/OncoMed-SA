import React from 'react'
import Scheduler from '../components/Scheduler'
import HamburguerMenu from '../components/HamburgerMenu'
import Popup_MeusAgendamentos from '../components/Popup_MeusAgendamentos'
import CalendarioMeusAgendamentos from '../components/CalendarioMeusAgendamentos'
import './MeusAgendamentos.css'
function MeusAgendamentos() {
  return (
    <div className='tudo-MeusAgendamentos'>
      
      <HamburguerMenu />

<div className="alinhar-meusagendamentos">
      <img className='imagem-meusagendamentos' src="imagem_meusagendamentos.svg" alt="" />
      <div className="calendario">
       <CalendarioMeusAgendamentos/>
      </div>
      </div>
    <Popup_MeusAgendamentos/>





    </div>
  )
}

export default MeusAgendamentos

import React from 'react'
import Scheduler from '../components/Scheduler'
import HamburguerMenu from '../components/HamburgerMenu'
import Popup_MeusAgendamentos from '../components/Popup_MeusAgendamentos'
import CalendarioMeusAgendamentos from '../components/CalendarioMeusAgendamentos'
function MeusAgendamentos() {
  return (
    <div className='tudo-MeusAgendamentos'>
      
      <HamburguerMenu />

      <div className="calendario">
       <CalendarioMeusAgendamentos/>
      </div>

    <Popup_MeusAgendamentos/>




    </div>
  )
}

export default MeusAgendamentos

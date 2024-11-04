import React from 'react'
import './Popup_MeusAgendamentos.css'

function Popup_MeusAgendamentos() {
  return (
    <div className='tudo-popup-meusagendamentos'>
      <h1 className='titulo-meusagendamentos' >AGENDAMENTOS DO DIA</h1>

      <div className="cada-agendamento-meusagendamentos">
        <div className="todas-infos-meusagendamentos">
          <h1 className='medico-meusagendamentos' >Dr. Jossian Castanho</h1>
          <h2 className='tipo-consulta-meusagendamentos'>MAMOGRAFIA</h2>
          <h2 className='horario-meusagendamentos'>12:45</h2>
          <h3 className='titulo-observacao-meusagendamentos'>SUA OBSERVAÇÃO</h3>
          <h3 className='observacao-meusagendamentos'>isso aquilo aqule outro, paaa amo nuggets</h3>

        </div>
      </div>

    </div>
  )
}

export default Popup_MeusAgendamentos

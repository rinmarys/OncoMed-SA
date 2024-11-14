import React, { useState } from 'react'
import './MarcarConsulta.css'
import HamburguerMenu from '../components/HamburgerMenu.jsx'
import Scheduler from '../components/Scheduler.jsx'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function MarcarConsulta() {

  const { selectedDate } = useContext(GlobalContext)
  const [consultaSelecionada, setConsultaSelecionada] = useState('')
  const [horarioSelecionado, setHorarioSelecionado] = useState('')
  const [observacaoEscrita, setObservacaoEscrita] = useState('')

  function buttonCancelar() {
    alert('vc cancelou')
  }

  function buttonConfirmar() {
    alert('aeeeee vc confirmou')
  }

  return (
    <div className='Container'>

      <div className="alinhamento-hamburger">
        <HamburguerMenu />
      </div>

      <div className="alinhamento-displayFlex">
        <div className="calendario">
          <Scheduler />
        </div>


        <div className="alinhamento-inputs">
          <div className='Tres-partes'>
            <div className='Container-Consulta-Horario'>
              <div className='Selecionar-Consulta'>
                {/* CONSULTAS E EXAMES À REALIZAR */}
                <h2>CONSULTAS E EXAMES À REALIZAR</h2>
                <select className='Select-Consulta'
                  value={consultaSelecionada}
                  onChange={(event) => { setConsultaSelecionada(event.target.value) }}>
                  <option value="" disabled selected>Selecione um tipo de consulta</option>
                  <option value="consulta1">Mamografia</option>
                  <option value="consulta2">Exame de sangue</option>
                  <option value="consulta3">Consultas bakanas</option>
                </select>
              </div>
              {/* CONSULTAS E EXAMES À REALIZAR */}

              {/* SELECIONAR HORARIO */}
              <div className='Selecionar-Horario'>
                <h2>HORÁRIO</h2>
                <select className="Select-Horario" 
                id="opcao-horario"
                value={horarioSelecionado}
                onChange={(event) => { setHorarioSelecionado(event.target.value) }} 
                >
                  <option value="" disabled selected>Selecione um horario</option>
                  <option value="horario1">12:30</option>
                  <option value="horario2">16:20</option>
                  <option value="horario3">20:10</option>
                </select>
              </div>
              {/* SELECIONAR HORARIO */}

            </div>
            {/* OBSERVAÇÕES */}
            <div className='Selecionar-Ob'>
              <h2>OBSERVAÇÕES</h2>
              <textarea 
              id='observacao-usuario' 
              className='Input-Ob' 
              type="text" 
              
              value={observacaoEscrita}
              onChange={(event) => {setObservacaoEscrita(event.target.value)}}/>
            </div>
            {/* OBSERVAÇÕES */}

            <div className='Botões'>
              <button className='Button-cancelar' onClick={buttonCancelar}>CANCELAR</button>
              <button className='Button-confirmar' onClick={buttonConfirmar}>CONFIRMAR</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarcarConsulta
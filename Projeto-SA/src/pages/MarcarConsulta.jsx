import React from 'react'
import './MarcarConsulta.css'
import HamburguerMenu from '../components/HamburgerMenu.jsx'
import Scheduler from '../components/Scheduler.jsx'

function MarcarConsulta() {
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
                <h2>TIPO CONSULTA</h2>
                <select className='Select-Consulta' id="tipo-consulta">
                  <option value="" disabled selected>Selecione um tipo de consulta</option>
                  <option value="consulta1">Mamografia</option>
                  <option value="consulta2">Exame de sangue</option>
                  <option value="consulta3">OIOI</option>
                </select>
              </div>

              <div className='Selecionar-Horario'>
                <h2>HORÁRIO</h2>
                <select className="Select-Horario" id="opcao-horario">
                  <option value="" disabled selected>Selecione um horario</option>
                  <option value="horario1">12:30</option>
                  <option value="horario2">16:20</option>
                  <option value="horario3">20:10</option>
                </select>
              </div>

            </div>

            <div className='Selecionar-Ob'>
              <h2>OBSERVAÇÕES</h2>
              <textarea id='observacao-usuario' className='Input-Ob' type="text" />
            </div>

            <div className='Botões'>
              <button className='Button'>CONFIRMAR</button>
              <button className='Button'>CANCELAR</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarcarConsulta
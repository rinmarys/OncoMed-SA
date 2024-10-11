import React from 'react'
import Scheduler from './Scheduler'
import './Scheduler.css'
import './MarcarConsulta.css'

function MarcarConsulta() {
  return (
    <div className='alinhamentos'>

      <div className="calendario">
        <Scheduler />
      </div>
      <div className="alinhamento-div">

        <div className="alinhamento-um-container">

          <div className="tipo-consulta-div">
            <h2>TIPO CONSULTA</h2>
            <select id="tipo-consulta">
              <option value="" disabled selected>Selecione um tipo de consulta</option>
              <option value="consulta1">Mamografia</option>
              <option value="consulta2">exame de sangue</option>
              <option value="consulta3">hdfjkhsbf</option>
            </select>
          </div>

          <div className="opcao-horario-div">
            <h2>HORARIO</h2>
            <select id="opcao-horario">
              <option value="" disabled selected>Selecione um horario</option>
              <option value="horario1">12:30</option>
              <option value="horario2">16:20</option>
              <option value="horario3">20:10</option>
            </select>
          </div>

        </div>



        <div className="div-observacoes">
          <h2>OBSERVAÇÕES</h2>
          <input id='observacao-usuario' type="text" />
        </div>
      </div>


    </div>
  )
}

export default MarcarConsulta

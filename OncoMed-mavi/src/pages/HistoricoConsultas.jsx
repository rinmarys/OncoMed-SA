// import React from 'react'
// import "./HistoricoConsultas.css"

// function HistoricoConsultas() {
//   return (

//     <div className='tudo'>
//       <img className='logo' src="Logo SA.svg" alt="" />
//       <div className="alinhamento">
//         <div className="titulo">
//           <h1>HISTÓRICO DE AGENDAMENTOS</h1>
//         </div>
//         <div className="consultas">
//           <div className="consulta">
//             <div className='nome-tipo-alinhamento' >
//               <p className='nome-pessoa' >MARILENE JUSSARA PESSOA</p>
//               <div> {/* essa div arruma aposição do fundo branco do tipo de consulta */}
//                 <p className='tipo-consulta'> MAMOGRAFIA </p>
//               </div>
//             </div>
//             <p className='situacao' >AINDA NÃO REALIZADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta' >12:30</p>
//               <p className='data-consulta' >28/09/24</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )


// }

// export default HistoricoConsultas

import React from 'react';
import "./HistoricoConsultas.css";

function HistoricoConsultas() {
  return (
    <div className='tudo'>
      <img className='logo' src="Logo SA.svg" alt="" />
      <div className="alinhamento">
        <div className="titulo">
          <h1>HISTÓRICO DE AGENDAMENTOS</h1>
        </div>
        <div className="consultas">
          {/* Primeira consulta */}
          <div className="consulta">
            <div className='nome-tipo-alinhamento'>
              <p className='nome-pessoa'>MARILENE JUSSARA PESSOA</p>
              <div>
                <p className='tipo-consulta'>MAMOGRAFIA</p>
              </div>
            </div>
            <p className='situacao-ainda-nao-realizado'>AINDA NÃO REALIZADO</p>
            <div className='horario-data-alinhamento'>
              <p className='horario-consulta'>12:30</p>
              <p className='data-consulta'>28/09/24</p>
            </div>
          </div>

          {/* Segunda consulta */}
          <div className="consulta">
            <div className='nome-tipo-alinhamento'>
              <p className='nome-pessoa'>JOÃO DA SILVA</p>
              <div>
                <p className='tipo-consulta'>EXAME DE SANGUE</p>
              </div>
            </div>
            <p className='situacao-realizado'>REALIZADO</p>
            <div className='horario-data-alinhamento'>
              <p className='horario-consulta'>14:00</p>
              <p className='data-consulta'>30/09/24</p>
            </div>
          </div>

           {/* terceira consulta */}
           <div className="consulta">
            <div className='nome-tipo-alinhamento'>
              <p className='nome-pessoa'>MARIANA GOMEZ</p>
              <div>
                <p className='tipo-consulta'>MAMOGRAFIA</p>
              </div>
            </div>
            <p className='situacao-cancelado'>CANCELADO</p>
            <div className='horario-data-alinhamento'>
              <p className='horario-consulta'>14:30</p>
              <p className='data-consulta'>02/10/24</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HistoricoConsultas;

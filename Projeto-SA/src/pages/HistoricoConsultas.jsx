// import React from 'react';
// import FichaCliente from '../components/FIchaCliente';
// import "./HistoricoConsultas.css";

// function HistoricoConsultas() {

//   return (
//     <div className='tudo'>
      
//       <img className='logo' src="Logo SA.svg" alt="" />
//       <div className="alinhamento">
//         <div className="titulo">

//           <h1>HISTÓRICO DE AGENDAMENTOS</h1>
//           <div className="linha"></div>
//         </div>
//         <div className="consultas">
//           {/* Primeira consulta */}
//           <button className='consulta'>
//             <div className='nome-tipo-alinhamento'>
//               <p className='nome-pessoa'>MARILENE JUSSARA PESSOA</p>
//               <div>
//                 <p className='tipo-consulta'>MAMOGRAFIA</p>
//               </div>
//             </div>
//             <p className='situacao-ainda-nao-realizado'>AINDA NÃO REALIZADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta'>12:30</p>
//               <p className='data-consulta'>28/09/24</p>
//             </div>
//           </button>

//           {/* Segunda consulta */}
//           <button className="consulta">
//             <div className='nome-tipo-alinhamento'>
//               <p className='nome-pessoa'>JOÃO DA SILVA</p>
//               <div>
//                 <p className='tipo-consulta'>EXAME DE SANGUE</p>
//               </div>
//             </div>
//             <p className='situacao-realizado'>REALIZADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta'>14:00</p>
//               <p className='data-consulta'>30/09/24</p>
//             </div>
//           </button>

//           {/* terceira consulta */}
//           <button  className="consulta">
//             <div className='nome-tipo-alinhamento'>
//               <p className='nome-pessoa'>MARIANA GOMEZ</p>
//               <div>
//                 <p className='tipo-consulta'>MAMOGRAFIA</p>
//               </div>
//             </div>
//             <p className='situacao-cancelado'>CANCELADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta'>14:30</p>
//               <p className='data-consulta'>02/10/24</p>
//             </div>
//           </button>

//           {/* quarta consulta */}
//           <button className="consulta">
//             <div className='nome-tipo-alinhamento'>
//               <p className='nome-pessoa'>FELIPE DE OLIVEIRA</p>
//               <div>
//                 <p className='tipo-consulta'>QUIMIOTERAPIA</p>
//               </div>
//             </div>
//             <p className='situacao-cancelado'>CANCELADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta'>14:30</p>
//               <p className='data-consulta'>02/10/24</p>
//             </div>
//           </button>

//           {/* QUINTA consulta */}
//           <button  className="consulta">
//             <div className='nome-tipo-alinhamento'>
//               <p className='nome-pessoa'>MATHEUS SILVEIRA</p>
//               <div>
//                 <p className='tipo-consulta'>EXAME DE SANGUE</p>
//               </div>
//             </div>
//             <p className='situacao-realizado'>REALIZADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta'>14:00</p>
//               <p className='data-consulta'>30/09/24</p>
//             </div>
//           </button>

//           {/* sexta consulta */}
//           <button className="consulta">
//             <div className='nome-tipo-alinhamento'>
//               <p className='nome-pessoa'>RINMARYS MARCANO</p>
//               <div>
//                 <p className='tipo-consulta'>RADIOTERAPIA</p>
//               </div>
//             </div>
//             <p className='situacao-ainda-nao-realizado'>AINDA NÃO REALIZADO</p>
//             <div className='horario-data-alinhamento'>
//               <p className='horario-consulta'>12:30</p>
//               <p className='data-consulta'>28/09/24</p>
//             </div>
//           </button>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default HistoricoConsultas;
import React, { useState } from 'react';
import FichaCliente from '../components/FichaCliente';
import './HistoricoConsultas.css';

function HistoricoConsultas() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className='tudo'>
      <img className='logo' src="Logo SA.svg" alt="" />
      <div className="alinhamento-historicoConsulta">
        <div className="titulo-historicoConsultas">
          <h1>HISTÓRICO DE AGENDAMENTOS</h1>
          <div className="linha"></div>
        </div>
        <div className="consultas">
          {/* Primeira consulta */}
          <button className='consulta' onClick={handleOpenPopup}>
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
          </button>

          {/* Segunda consulta */}
          <button className="consulta" onClick={handleOpenPopup}>
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
          </button>

          {/* Terceira consulta */}
          <button className="consulta" onClick={handleOpenPopup}>
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
          </button>

          {/* Quarta consulta */}
          <button className="consulta" onClick={handleOpenPopup}>
            <div className='nome-tipo-alinhamento'>
              <p className='nome-pessoa'>FELIPE DE OLIVEIRA</p>
              <div>
                <p className='tipo-consulta'>QUIMIOTERAPIA</p>
              </div>
            </div>
            <p className='situacao-cancelado'>CANCELADO</p>
            <div className='horario-data-alinhamento'>
              <p className='horario-consulta'>14:30</p>
              <p className='data-consulta'>02/10/24</p>
            </div>
          </button>

          {/* Quinta consulta */}
          <button className="consulta" onClick={handleOpenPopup}>
            <div className='nome-tipo-alinhamento'>
              <p className='nome-pessoa'>MATHEUS SILVEIRA</p>
              <div>
                <p className='tipo-consulta'>EXAME DE SANGUE</p>
              </div>
            </div>
            <p className='situacao-realizado'>REALIZADO</p>
            <div className='horario-data-alinhamento'>
              <p className='horario-consulta'>14:00</p>
              <p className='data-consulta'>30/09/24</p>
            </div>
          </button>

          {/* Sexta consulta */}
          <button className="consulta" onClick={handleOpenPopup}>
            <div className='nome-tipo-alinhamento'>
              <p className='nome-pessoa'>RINMARYS MARCANO</p>
              <div>
                <p className='tipo-consulta'>RADIOTERAPIA</p>
              </div>
            </div>
            <p className='situacao-ainda-nao-realizado'>AINDA NÃO REALIZADO</p>
            <div className='horario-data-alinhamento'>
              <p className='horario-consulta'>12:30</p>
              <p className='data-consulta'>28/09/24</p>
            </div>
          </button>
        </div>
      </div>
      {isOpen && <FichaCliente onClose={handleClosePopup} />}
    </div>
  );
}

export default HistoricoConsultas;

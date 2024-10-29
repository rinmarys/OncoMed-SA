// import { Link } from "react-router-dom"
// import './FichaCliente.css'

// function FichaCliente() {

//   return (
//     <div className="fichacliente">

// <div className="consulta-solicitada-ficha">
//                     <div className="alinhamento-solicitacao-nome-horario-tipo-data-ficha">
//                         <div className="nome-tipo-solicitacao-ficha">
//                             <h1 className='nome-pessoa-solicitacao-ficha' >MARILENE JUSSARA PESSOA</h1>
//                             <h2 className='tipo-consulta-solicitacao-ficha' >MAMOGRAFIA</h2>
//                         </div>
//                         <div className="data-horario-solicitacao-ficha">
//                             <h2 className='data-solicitacao-ficha' >09/12/2024</h2>
//                             <h2 className='horario-consulta-solicitacao-ficha' >12:30</h2>
//                         </div>
//                     </div>
//                     <h2 className='observacao-solicitacao-titulo-ficha' >OBSERVAÇÃO</h2>
//                     <h3 className='observacao-solicitacao-cliente-ficha' >tenho medo mto medo, meu bcacjkjhdsakh socosadjaukjsdhkj a a a  ja aiii</h3>
//                     <div className="designar-botoes-solicitacao-ficha">  {/* tirar dps */}
//                         <div className="botoes-solicitacao-ficha">
//                             <button className='botao-cancela-ficha'>CANCELAR</button>
//                             <button className='botao-ok-ficha' >OK</button>
//                         </div>
//                     </div>
//                 </div>

//     </div>
//   )
// }

// export default FichaCliente

// FichaCliente.js
import React from 'react';
import './FichaCliente.css';

function FichaCliente({ onClose }) {
  return (
    <div className="fichacliente">
      <div className="consulta-solicitada-ficha">
        <div className="alinhamento-solicitacao-nome-horario-tipo-data-ficha">
          <div className="nome-tipo-solicitacao-ficha">
            <h1 className='nome-pessoa-solicitacao-ficha'>MARILENE JUSSARA PESSOA</h1>
            <h2 className='tipo-consulta-solicitacao-ficha'>MAMOGRAFIA</h2>
          </div>
          <div className="data-horario-solicitacao-ficha">
            <h2 className='data-solicitacao-ficha'>09/12/2024</h2>
            <h2 className='horario-consulta-solicitacao-ficha'>12:30</h2>
          </div>
        </div>
        <h2 className='observacao-solicitacao-titulo-ficha'>OBSERVAÇÃO</h2>
        <h3 className='observacao-solicitacao-cliente-ficha'>tenho medo muito medo, meu bcacjkjhdsakh socosadjaukjsdhkj a a a já aiii</h3>
        <div className="designar-botoes-solicitacao-ficha">
          <div className="botoes-solicitacao-ficha">
            {/* <button className='botao-cancela-ficha' onClick={onClose}>CANCELAR</button> */}
            <button className='botao-ok-ficha' onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FichaCliente;

// import React from 'react';
// GTJHUMR4NGTKV
// import './FichaCliente.css';

// function FichaCliente({ onClose, consulta }) {

  // const [listaHistoricoConsulta, setListaHistoricoConsulta] = useState([])

  // const fetch_marcarConsulta = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/marcarconsulta');
  //     setListaHistoricoConsulta(response.data);
  //   } catch (error) {
  //     console.error('Erro ao buscar marcarconsulta:', error);
  //   }
  // };

  // useEffect(() => {

  //   fetch_marcarConsulta()

  // })

//   if (!consulta) return null;

//   return (
//     <div className="fichacliente">
//       <div className="fichacliente">
//         <div className="consulta-solicitada-ficha">
//           <div className="alinhamento-solicitacao-nome-horario-tipo-data-ficha">
//             <div className="nome-tipo-solicitacao-ficha">
//               <h1 className='nome-pessoa-solicitacao-ficha'>{consulta.paciente_nome}</h1>
//               <h2 className='tipo-consulta-solicitacao-ficha'>{consulta.tipo_consulta}</h2>
//             </div>
//             <div className="data-horario-solicitacao-ficha">
//               <h2 className='data-solicitacao-ficha'>{consulta.data_agendamento.slice(0, 10)}</h2>
//               <h2 className='horario-consulta-solicitacao-ficha'>{consulta.horario.slice(0, 5)}</h2>
//             </div>
//           </div>
//           <h2 className='observacao-solicitacao-titulo-ficha'>OBSERVAÇÃO</h2>
//           <h3 className='observacao-solicitacao-cliente-ficha'>{consulta.observacao || "Sem observações"}</h3>
//           <div className="designar-botoes-solicitacao-ficha">
//             <div className="botoes-solicitacao-ficha">
//               <button className='botao-ok-ficha' onClick={onClose}>OK</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FichaCliente;

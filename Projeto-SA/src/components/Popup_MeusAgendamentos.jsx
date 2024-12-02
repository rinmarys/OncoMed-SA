
// // import './Popup_MeusAgendamentos.css'
// // import CancelarConsulta from '../components/CancelarConsulta';
// // import React, { useContext, useState } from 'react';
// // import { GlobalContext } from '../contexts/GlobalContext';
// // import { useEffect } from 'react';

// // function Popup_MeusAgendamentos() {

// //     const [isOpen, setIsOpen] = useState(false);

// //     const handleOpenPopup = () => {
// //       setIsOpen(true);
// //     };
  
// //     const handleClosePopup = () => {
// //       setIsOpen(false);
// //     };
    
// //         const [pop_up_agendamento, set_pop_up_agendamento] = useState(false);
// //         const {lista_de_pacientes, array_consultas_do_dia} = useContext(GlobalContext);
    
// //     useEffect(() => {

      
// //       for(let i = 0; i < lista_de_pacientes.length; i++){
  
// //        if(lista_de_pacientes[i].minhas_consulstas == Date.now() ){
        
// //         [...array_consultas_do_dia, lista_de_pacientes[i]];

// //       };
// //     };
// //     }, [array_consultas_do_dia]);
    

// //   return (
// //     <div className="lifehak">

// //     <div className='tudo-popup-meusagendamentos'>
// //       <h1 className='titulo-meusagendamentos-h1' >AGENDAMENTOS DO DIA</h1>

// //       <div className="cada-agendamento-meusagendamentos">
// //         <div className="todas-infos-meusagendamentos">
// //           <h1 className='medico-meusagendamentos' >Dr. Jossian Castanho</h1>

// //           <div className="tipo-horario-meusagendamentos">
// //             <h2 className='tipo-consulta-meusagendamentos'>MAMOGRAFIA</h2>
// //             <h2 className='horario-meusagendamentos'>12:45</h2>
// //           </div>

// //           <h3 className='titulo-observacao-meusagendamentos'>SUA OBSERVAÇÃO</h3>
// //           <h3 className='observacao-meusagendamentos'>isso aquilo aqule outro, paaa amo nuggets</h3>

// //           <button onClick={handleOpenPopup} className='cancelar-meusagendamentos-popup'>CANCELAR</button>
// //         </div>
// //       </div>
// //     </div>

// //     <div >
// //      {isOpen && <CancelarConsulta onClose={handleClosePopup} />}
// //      </div>
// //     </div>
// //   )
// // }

// // export default Popup_MeusAgendamentos

// import './Popup_MeusAgendamentos.css';
// import CancelarConsulta from '../components/CancelarConsulta';
// import React, { useContext, useState, useEffect } from 'react';
// import { GlobalContext } from '../contexts/GlobalContext';

// function Popup_MeusAgendamentos({ hasAppointment }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const { lista_de_pacientes, array_consultas_do_dia } = useContext(GlobalContext);

//   const handleOpenPopup = () => {
//     setIsOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsOpen(false);
//   };

//   // Busca las consultas que fueron marcadas
//     const fetch_marcarConsulta = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/marcarConsulta`)
//             setSolicitacoesMarcadas(response.data)
//         } catch (error) {
//             console.error('Erro ao buscar cliente por ID:', error)
//         }
//     };

//   //  Busca los medicos cadastrados
//    const fetch_medicos = async () => {
//     try {
//         const response = await axios.get(`http://localhost:3000/medicos`)
//         setMedicos(response.data)
//     } catch (error) {
//         console.error('Erro ao buscar médicos:', error)
//     }
// };

// useEffect(() => {
//     fetch_marcarConsulta()
//     fetch_medicos()
// }, []);

// // Atualiza o array de consultas do dia com base no contexto
// useEffect(() => {
//   if (hasAppointment) {
//     const consultasDoDia = lista_de_pacientes.filter((paciente) =>
//       new Date(paciente.minhas_consultas).toDateString() === new Date().toDateString()
//     );
//     array_consultas_do_dia.push(...consultasDoDia);
//   }
// }, [hasAppointment, lista_de_pacientes, array_consultas_do_dia]);
//   return (
//     <div className="lifehak">
//       {hasAppointment ? (
//         <div className='tudo-popup-meusagendamentos'>
//           <h1 className='titulo-meusagendamentos-h1'>AGENDAMENTOS DO DIA</h1>


//           {array_consultas_do_dia.map((consulta, index) => (
//             <div key={index} className="cada-agendamento-meusagendamentos">
//               <div className="todas-infos-meusagendamentos">

//                 <h1 className='medico-meusagendamentos'>medico klkk</h1>
//                 <div className="tipo-horario-meusagendamentos">
//                   <h2 className='tipo-consulta-meusagendamentos'>{consulta.tipo_consulta}</h2>
//                   <h2 className='horario-meusagendamentos'>{consulta.horario}</h2>
//                 </div>
//                 <h3 className='titulo-observacao-meusagendamentos'>SUA OBSERVAÇÃO</h3>
//                 <h3 className='observacao-meusagendamentos'>{consulta.observacoes}</h3>
//                 <button onClick={handleOpenPopup} className='cancelar-meusagendamentos-popup'>
//                   CANCELAR
//                 </button>
//               </div>
//             </div>


//           ))}
//         </div>
//       ) : (
//         <div className='tudo-popup-meusagendamentos'>
//           <h1 className='titulo-meusagendamentos-h1'>AGENDAMENTOS DO DIA</h1>
//           <h1 className='titulo-meusagendamentos-sem-consulta'>Nenhuma consulta marcada para hoje.</h1>
//         </div>
//       )}

//       <div>
//         {isOpen && <CancelarConsulta onClose={handleClosePopup} />}
//       </div>
//     </div>
//   );
// }

// export default Popup_MeusAgendamentos;
import './Popup_MeusAgendamentos.css';
import CancelarConsulta from '../components/CancelarConsulta';
import React, { useState, useEffect } from 'react';

function Popup_MeusAgendamentos({ selectedDate, agendamentosDoDia }) {
  const [isOpen, setIsOpen] = useState(false);
  const [consultasDoDia, setConsultasDoDia] = useState([]);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!selectedDate || !agendamentosDoDia) return;

    const dataSelecionada = new Date(selectedDate).toISOString().split('T')[0];

    // Filtra consultas do dia
    const consultasFiltradas = agendamentosDoDia.filter((agendamento) =>
      new Date(agendamento.data_agendamento).toISOString().split('T')[0] === dataSelecionada
    );

    setConsultasDoDia(consultasFiltradas);
  }, [selectedDate, agendamentosDoDia]);

  return (
    <div className="lifehak">
      {consultasDoDia.length > 0 ? (
        <div className="tudo-popup-meusagendamentos">
          <h1 className="titulo-meusagendamentos-h1">AGENDAMENTOS DO DIA</h1>
          {consultasDoDia.map((consulta, index) => (
            <div key={index} className="cada-agendamento-meusagendamentos">
              <div className="todas-infos-meusagendamentos">
                <h1 className="medico-meusagendamentos">Dr. {consulta.medico}</h1>
                <div className="tipo-horario-meusagendamentos">
                  <h2 className="tipo-consulta-meusagendamentos">{consulta.tipo_consulta}</h2>
                  <h2 className="horario-meusagendamentos">{consulta.horario.slice(0,5)}</h2>
                </div>
                <h3 className="titulo-observacao-meusagendamentos">SUA OBSERVAÇÃO</h3>
                <h3 className="observacao-meusagendamentos">{consulta.observacoes}</h3>
                <button onClick={handleOpenPopup} className="cancelar-meusagendamentos-popup">
                  CANCELAR
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="tudo-popup-meusagendamentos">
          <h1 className="titulo-meusagendamentos-h1">AGENDAMENTOS DO DIA</h1>
          <h1 className="titulo-meusagendamentos-sem-consulta">Nenhuma consulta marcada para a data selecionada.</h1>
        </div>
      )}
      {isOpen && <CancelarConsulta onClose={handleClosePopup} />}
    </div>
  );
}

export default Popup_MeusAgendamentos;

import React, { useEffect, useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import './HistoricoConsultas.css';
import axios from 'axios';

function HistoricoConsultas() {
  // const [isOpen, setIsOpen] = useState(false);
  const [lista_de_marcarconsulta, set_lista_de_marcarconsulta] = useState([])

  // const handleOpenPopup = () => {
  //   setIsOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsOpen(false);
  // };

  const fetch_marcarConsulta = async () => {
    try {
      const response = await axios.get('http://localhost:3000/marcarconsulta');
      set_lista_de_marcarconsulta(response.data);
    } catch (error) {
      console.error('Erro ao buscar marcarconsulta:', error);
    }
  };

  useEffect(() => {

    fetch_marcarConsulta()

  })

  // useEffect(() => {
  //   if (!selectedDate || !agendamentosDoDia) return;

  //   const dataSelecionada = new Date(selectedDate).toISOString().split('T')[0];

  //   // Filtra consultas do dia
  //   const consultasFiltradas = agendamentosDoDia.filter((agendamento) =>
  //     new Date(agendamento.data_agendamento).toISOString().split('T')[0] === dataSelecionada
  //   );

  //   setConsultasDoDia(consultasFiltradas);
  // }, [selectedDate, agendamentosDoDia]);


  return (
    <div className='tudo'>
      <div className="alinhamento-hamburger">
        <HamburgerMenu />
      </div>

      <div className="alinhamento-historicoConsulta">
        <div className="titulo-historicoConsultas">
          <h1>HISTÓRICO DE AGENDAMENTOS</h1>
          <div className="linha"></div>
        </div>
        <div className="consultas">
          {/* Primeira consulta */}

          {lista_de_marcarconsulta.length > 0 ? (
            lista_de_marcarconsulta.map((historicoConsulta) => (
              <div className='consulta'>
                <div className='nome-tipo-alinhamento'>
                  <p className='nome-pessoa'>{historicoConsulta.medico_designado}</p>
                  <div>
                    <p className='tipo-consulta'>{historicoConsulta.tipo_consulta}</p>
                  </div>
                </div>
                <p className='situacao-ainda-nao-realizado'>AINDA NÃO REALIZADO</p>
                <div className='horario-data-alinhamento'>
                  <p className='horario-consulta'>{historicoConsulta.horario.slice(0, 5)}</p>
                  <p className='data-consulta'>{historicoConsulta.data_agendamento.slice(0, 10)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='semSolicitacoes-texto'>Sem historicos...</p>
          )}
        </div>
      </div>
      {/* {isOpen && <FichaCliente onClose={handleClosePopup} />} */}
    </div>
  );
}

export default HistoricoConsultas;

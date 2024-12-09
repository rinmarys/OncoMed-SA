import React, { useEffect, useState, useContext } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import "./HistoricoConsultas.css";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";

function HistoricoConsultas() {
  const [lista_de_marcarconsulta, set_lista_de_marcarconsulta] = useState([]);
  const [lista_de_medicos, set_Lista_de_medicos] = useState([]);
  const [lista_de_pacientes, set_Lista_de_pacientes] = useState([]);
  const { usuario_logado } = useContext(GlobalContext);

  const fetch_marcarConsulta = async () => {
    try {
      const response = await axios.get("http://localhost:3000/marcarconsulta");
      set_lista_de_marcarconsulta(response.data);
    } catch (error) {
      console.error("Erro ao buscar marcarconsulta:", error);
    }
  };

  const fetch_medicos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/medicos");
      set_Lista_de_medicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  const fetch_pacientes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pacientes");
      set_Lista_de_pacientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  // Função para determinar a situação da consulta
  const getSituacaoConsulta = (dataAgendamento, horarioConsulta) => {
    const dataAtual = new Date();
    const [hora, minutos] = horarioConsulta.split(':');
    const dataConsulta = new Date(dataAgendamento);
    dataConsulta.setHours(hora);
    dataConsulta.setMinutes(minutos);

    if (dataAtual > dataConsulta) {
      return "REALIZADO";
    } else {
      return "AINDA NÃO REALIZADO";
    }
  };

  // Encontrar nome do médico designado
  const getMedicoNome = (id_medico) => {
    const medico = lista_de_medicos.find((med) => med.id_medico === Number(id_medico));
    return medico ? medico.nome : "Médico não encontrado";
  };

  // Encontrar nome do paciente
  const getPacienteNome = (id_paciente) => {
    const paciente = lista_de_pacientes.find((pac) => pac.id_paciente === Number(id_paciente));
    return paciente ? paciente.nome : "Paciente não encontrado";
  };

  // Filtrar as consultas que pertencem ao usuário logado
  const consultasFiltradas = lista_de_marcarconsulta.filter((consulta) => {
    if (usuario_logado.id_paciente) {
      // Verifica se a consulta é do paciente logado e confirmada
      return consulta.id_paciente == Number(usuario_logado.id_paciente) && consulta.medico_designado;
    }
    if (usuario_logado.id_medico) {
      // Verifica se a consulta é do médico logado e confirmada
      return consulta.medico_designado == Number(usuario_logado.id_medico);
    }
    return false;
  });

  useEffect(() => {
    fetch_marcarConsulta();
    fetch_medicos();
    fetch_pacientes();
  }, []);

  return (
    <div className="tudo">
      <div className="alinhamento-hamburger">
        <HamburgerMenu />
      </div>

      <div className="alinhamento-historicoConsulta">
        <div className="titulo-historicoConsultas">
          <h1>HISTÓRICO DE AGENDAMENTOS</h1>
          <div className="linha"></div>
        </div>
        <div className="consultas">
          {consultasFiltradas.length > 0 ? (
            consultasFiltradas.map((consulta) => (
              <div key={consulta.id_consulta} className="consulta">
                <div className="nome-tipo-alinhamento">
                  {/* Renderiza o nome do médico ou paciente */}
                  <p className="nome-pessoa">
                    {usuario_logado.id_paciente
                      ? getMedicoNome(consulta.medico_designado)
                      : getPacienteNome(consulta.id_paciente)}
                  </p>
                  <div>
                    <p className="tipo-consulta">{consulta.tipo_consulta}</p>
                  </div>
                </div>
                {/* Exibe a situação da consulta com base na data e horário */}
                <p className="situacao-ainda-nao-realizado">{getSituacaoConsulta(consulta.data_agendamento, consulta.horario)}</p>
                <div className="horario-data-alinhamento">
                  <p className="horario-consulta">{consulta.horario.slice(0, 5)}</p>
                  <p className="data-consulta">{consulta.data_agendamento.slice(0, 10)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="semSolicitacoes-texto">Sem históricos...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoricoConsultas;

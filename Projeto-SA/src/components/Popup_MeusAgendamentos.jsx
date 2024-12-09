import React, { useState, useEffect, useContext } from "react";
import CancelarConsulta from "./CancelarConsulta";
import "./Popup_MeusAgendamentos.css";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";

function Popup_MeusAgendamentos({ selectedDate }) {
  const [consultasDoDia, setConsultasDoDia] = useState([]);
  const [consultaId, setConsultaId] = useState('')
  const onConsultaCancelada = (idCancelada) => {
    setConsultasDoDia((prevConsultas) =>
      prevConsultas.filter((consulta) => consulta.id_consulta !== idCancelada)
    );
  };

  const [listaDeMedicos, setListaDeMedicos] = useState([]);
  const [listaDePacientes, setListaDePacientes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { usuario_logado } = useContext(GlobalContext);

  // Função para buscar consultas
  const fetch_marcarConsulta = async () => {
    try {
      const response = await axios.get("http://localhost:3000/marcarconsulta");
      setConsultasDoDia(response.data);
    } catch (error) {
      console.error("Erro ao buscar marcarConsulta:", error);
    }
  };

  // Função para buscar médicos
  const fetch_medicos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/medicos");
      setListaDeMedicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar medicos:", error);
    }
  };

  // Função para buscar pacientes
  const fetch_pacientes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pacientes");
      setListaDePacientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  // Função para obter o nome do médico
  const getMedicoNome = (id_medico) => {
    const medico = listaDeMedicos.find((med) => med.id_medico === Number(id_medico));
    return medico ? medico.nome : "Médico não encontrado";
  };

  // Função para obter o nome do paciente
  const getPacienteNome = (id_paciente) => {
    const paciente = listaDePacientes.find((pac) => pac.id_paciente === Number(id_paciente));
    return paciente ? paciente.nome : "Paciente não encontrado";
  };

  // Executa as funções de busca ao carregar o componente
  useEffect(() => {
    fetch_marcarConsulta();
    fetch_medicos();
    fetch_pacientes();
  }, []);

  // Filtrar consultas do dia confirmadas e associadas ao usuário logado
  const dataSelecionada = selectedDate
    ? new Date(selectedDate).toISOString().split("T")[0]
    : null;

  const consultasFiltradas = consultasDoDia.filter((consulta) => {
    const dataConsulta = new Date(consulta.data_agendamento)
      .toISOString()
      .split("T")[0];

    // Verifica se a consulta é do paciente logado e confirmada
    if (usuario_logado.id_paciente) {
      return (
        consulta.id_paciente == Number(usuario_logado.id_paciente) &&
        consulta.medico_designado &&
        dataConsulta == dataSelecionada
      );
    }

    // Verifica se a consulta é do médico logado e confirmada
    if (usuario_logado.id_medico) {
      return (
        consulta.medico_designado == Number(usuario_logado.id_medico) &&
        dataConsulta == dataSelecionada
      );
    }

    return false;
  });

  const handleOpenPopup = (id) => {
    setConsultaId(id);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setConsultaId(null);
    fetch_marcarConsulta();
  };

  return (
    <div className="lifehak">
      {consultasFiltradas.length > 0 ? (
        <div className="tudo-popup-meusagendamentos">
          <h1 className="titulo-meusagendamentos-h1">AGENDAMENTOS DO DIA</h1>
          {consultasFiltradas.map((consulta) => (
            <div key={consulta.id_consulta} className="cada-agendamento-meusagendamentos">
              <div className="todas-infos-meusagendamentos">
                {/* Renderiza o nome do médico ou paciente */}
                <h1 className="medico-meusagendamentos">
                  {usuario_logado.id_paciente
                    ? getMedicoNome(consulta.medico_designado)
                    : getPacienteNome(consulta.id_paciente)}
                </h1>
                <div className="tipo-horario-meusagendamentos">
                  <h2 className="tipo-consulta-meusagendamentos">{consulta.tipo_consulta}</h2>
                  <h2 className="horario-meusagendamentos">{consulta.horario.slice(0, 5)}</h2>
                </div>
                <h3 className="titulo-observacao-meusagendamentos">SUA OBSERVAÇÃO</h3>
                <h3 className="observacao-meusagendamentos">{consulta.observacoes}</h3>
                <button
                  className="cancelar-meusagendamentos-popup"
                  onClick={() => handleOpenPopup(consulta.id_consulta)}
                  type="button"
                >
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
      {isOpen && (
        <CancelarConsulta
          onClose={handleClosePopup}
          consultaId={consultaId}
          fetch_marcarConsulta={fetch_marcarConsulta}
          onConsultaCancelada={onConsultaCancelada}
        />
      )}
    </div>
  );
}

export default Popup_MeusAgendamentos;

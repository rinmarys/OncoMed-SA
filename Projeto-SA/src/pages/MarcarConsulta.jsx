import { useState, useContext, useEffect } from 'react'
import './MarcarConsulta.css'
import HamburguerMenu from '../components/HamburgerMenu.jsx'
import Scheduler from '../components/Scheduler.jsx'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function MarcarConsulta() {

  const navigate = useNavigate()
  const { selectedDate } = useContext(GlobalContext)
  const { usuario_logado, set_lista_de_consultas } = useContext(GlobalContext);
  const [consultaSelecionada, setConsultaSelecionada] = useState('')
  const [horarioSelecionado, setHorarioSelecionado] = useState('')
  const [observacaoEscrita, setObservacaoEscrita] = useState('')

  const [mensagemErroMarcarConsulta, setMensagemErroMarcarConsulta] = useState('')

  const [mostrarPopUpConfirmar, setMostrarPopUpConfirmar] = useState(false)
  const [mostrarPopUpCancelar, setMostrarPopUpCancelar] = useState(false)

  function buttonConfirmar() {

    if (!selectedDate || selectedDate == '') {
      setMensagemErroMarcarConsulta("Por favor, selecione uma data!")
      return false
    }
    if (!consultaSelecionada) {
      setMensagemErroMarcarConsulta("Por favor, selecione um tipo de consulta ou exame!")
      return false
    }
    if (!horarioSelecionado) {
      setMensagemErroMarcarConsulta("Por favor, selecione um horário!")
      return false
    };

    setMostrarPopUpConfirmar(true)
    return true
  }

  function buttonCancelar() {

    setMostrarPopUpCancelar(true)

  };

    // CODIGO DE NICHOLAS

  useEffect(() => {

    fetch_consultas();

  }, []);

  const fetch_consultas = async () => {
    
    try {
      
      const response = await axios.get('http://localhost:3000/marcarConsulta');
      
      set_lista_de_consultas(response.data);
  
    } catch (error) {
  
      console.error('Erro ao buscar consultas:', error);
    };  

  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
  
    const consulta = {

      data_agendamento: selectedDate,
      tipo_consulta: consultaSelecionada,
      horario: horarioSelecionado,
      observacoes: observacaoEscrita,
      medico_designado: "",
      id_paciente: usuario_logado.id_paciente
    };
  
    try {
          // Adicionar nova consulta (POST)
          const response = await axios.post('http://localhost:3000/marcarConsulta', consulta);
          
          if (response.status === 201) {
          
            fetch_consultas(); // Atualiza a lista de consultas após a adição
          };

    } catch (error) {
        
      console.error('Erro ao adicionar uma consulta:', error);
    };

  };



  return (

    <div className='Container-marcarConsulta-alinhamento'>
      <form onSubmit={handleSubmit}>

        <div className="alinhamento-hamburger">
          <HamburguerMenu />
        </div>

        <div className="alinhamento-displayFlex">

          <Scheduler />

          <div className="alinhamento-inputs">
            <div className='Tres-partes'>
              <div className='Container-Consulta-Horario'>
                <div className='Selecionar-Consulta'>
                  {/* CONSULTAS E EXAMES À REALIZAR */}
                  <h2>CONSULTAS E EXAMES À REALIZAR</h2>
                  <select className='Select-Consulta'
                    value={consultaSelecionada}
                    onChange={(event) => { setConsultaSelecionada(event.target.value) }}>
                    <option value="" disabled>Selecione um tipo de consulta</option>
                    <option value="MAMOGRAFIA">Mamografia</option>
                    <option value="EXAME DE SANGUE">Exame de sangue</option>
                    <option value="CONSULTAS BAKANAS">Consultas bakanas</option>
                  </select>

                </div>
                {/* CONSULTAS E EXAMES À REALIZAR */}

                {/* SELECIONAR HORARIO */}
                <div className='Selecionar-Horario'>
                  <h2>HORÁRIO</h2>
                  <input type='time' className="Select-Horario"
                    id="opcao-horario"
                    value={horarioSelecionado}
                    onChange={(event) => { setHorarioSelecionado(event.target.value) }}
                  >
                  </input>
                </div>
                {/* SELECIONAR HORARIO */}

              </div>
              {/* OBSERVAÇÕES */}
              <div className='Selecionar-Ob'>
                <h2>OBSERVAÇÕES</h2>
                <textarea
                  id='observacao-usuario'
                  className='Input-Ob'
                  type="text"

                  value={observacaoEscrita}
                  onChange={(event) => { setObservacaoEscrita(event.target.value) }} />
              </div>
              {/* OBSERVAÇÕES */}

              <div className='Botões'>
                <button className='Button-cancelar' onClick={buttonCancelar} type='button' >CANCELAR</button>
                <button className='Button-confirmar' onClick={buttonConfirmar} type='submit' >CONFIRMAR</button>
              </div>

              <div className="mensagem-erro-marcarConsulta">
                {mensagemErroMarcarConsulta}
              </div>
            </div>
          </div>

          {/* POP UP */}

          {/* pop up de confirmar */}
          {mostrarPopUpConfirmar && (
            <div className="popup-confirmar">
              <div className="popup-confirmar-conteudo">
                <h3>Consulta confirmada com sucesso!</h3>
                <button onClick={() => navigate('/')}>Fechar</button>
              </div>
            </div>
          )}
          {/* pop up de confirmar */}

          {mostrarPopUpCancelar && (
            <div className="popup-cancelar">
              <div className="popup-cancelar-conteudo">
                <h3>Você tem certeza que quer cancelar a consulta?</h3>

                <div className="buttons-popupCancelar-alinhamento">
                  <button onClick={() => setMostrarPopUpCancelar(false)} className='popup-cancelar-fechar-button' type='button'>Não quero! Fechar</button>
                  <button onClick={() => navigate('/')} className='popup-cancelar-confirmar-button' type='button'>Confirmar cancelamento</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </form>
    </div>
  )
}

export default MarcarConsulta
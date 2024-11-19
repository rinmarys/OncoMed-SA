import React, { useState, useContext, useEffect } from 'react'
import './MarcarConsulta.css'
import HamburguerMenu from '../components/HamburgerMenu.jsx'
import Scheduler from '../components/Scheduler.jsx'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


function MarcarConsulta() {

  const navigate = useNavigate()
  const { selectedDate } = useContext(GlobalContext)
  const {lista_de_pacientes, usuario_logado, set_usuario_logado} =  useContext(GlobalContext);
  const [consultaSelecionada, setConsultaSelecionada] = useState('')
  const [horarioSelecionado, setHorarioSelecionado] = useState('')
  const [observacaoEscrita, setObservacaoEscrita] = useState('')

  const [mensagemErroMarcarConsulta, setMensagemErroMarcarConsulta] = useState('')

  const { listaInformacoesMarcarConsulta, setListaInformacoesMarcarConsulta } = useContext(GlobalContext)

  const [mostrarPopUpConfirmar, setMostrarPopUpConfirmar] = useState(false)
  const [mostrarPopUpCancelar, setMostrarPopUpCancelar] = useState(false)

  useEffect(() => {
    console.log(`Lista de informações atualizada:`, listaInformacoesMarcarConsulta)
  }, [listaInformacoesMarcarConsulta])

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
    }

    // Después de la confirmación, navegamos a otra página
    setListaInformacoesMarcarConsulta(prevState => [...prevState,
    {
      selectedDate,
      consultaSelecionada,
      horarioSelecionado,
      observacaoEscrita,
    }
    ])

    for(let i = 0; i < lista_de_pacientes.length; i++){

      if(lista_de_pacientes[i].nome == usuario_logado.nome && lista_de_pacientes[i].email == usuario_logado.email){
      
      lista_de_pacientes[i].minhas_consulstas = [...lista_de_pacientes[i].minhas_consulstas, selectedDate];
      set_usuario_logado(lista_de_pacientes[i]);
      
    };

    };
    console.log(`Lista de pacientes`, lista_de_pacientes);
    console.log(`Usuario logado`, usuario_logado);
    
    setMostrarPopUpConfirmar(true)
    return true
  }

  function buttonCancelar() {

    setMostrarPopUpCancelar(true)

  }

  return (
    <div className='Container-marcarConsulta-alinhamento'>

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
                  <option value="consulta1">Mamografia</option>
                  <option value="consulta2">Exame de sangue</option>
                  <option value="consulta3">Consultas bakanas</option>
                </select>
              </div>
              {/* CONSULTAS E EXAMES À REALIZAR */}

              {/* SELECIONAR HORARIO */}
              <div className='Selecionar-Horario'>
                <h2>HORÁRIO</h2>
                <select className="Select-Horario"
                  id="opcao-horario"
                  value={horarioSelecionado}
                  onChange={(event) => { setHorarioSelecionado(event.target.value) }}
                >
                  <option value="" disabled>Selecione um horario</option>
                  <option value="horario1">12:30</option>
                  <option value="horario2">16:20</option>
                  <option value="horario3">20:10</option>
                </select>
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
              <button className='Button-cancelar' onClick={buttonCancelar}>CANCELAR</button>
              <button className='Button-confirmar' onClick={buttonConfirmar}>CONFIRMAR</button>
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
                <button onClick={() => setMostrarPopUpCancelar(false)} className='popup-cancelar-fechar-button'>Não quero! Fechar</button>
                <button onClick={() => navigate('/')} className='popup-cancelar-confirmar-button'>Confirmar cancelamento</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MarcarConsulta
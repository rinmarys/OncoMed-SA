import './SolicitacaoConsulta.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin'
import CancelarConsultaAdmin from '../components/CancelarConsultaAdmin'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function SolicitacaoConsulta() {
    
    const {listaInformacoesMarcarConsulta, setListaInformacoesMarcarConsulta} = useContext(GlobalContext);
    const {lista_de_medicos, set_lista_de_medicos} = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(false)

    const [opcoes_de_medicos, set_opcoes_de_medicos] = useState(``);
    const {usuario_logado} = useContext(GlobalContext)

    const handleOpenPopup = () => setIsOpen(true);
    const handleClosePopup = () => setIsOpen(false);

    const fetch_marcarConsulta = async () => {
        
        try {
        
            const response = await axios.get(`http://localhost:3000/marcarConsulta`);
            setListaInformacoesMarcarConsulta(response.data)
        
        } catch (error) {
        
            console.error('Erro ao buscar cliente por ID:', error)
        };
    };

    const fetch_medicos = async () => {
        
        try {
        
            const response = await axios.get(`http://localhost:3000/medicos`);
            set_lista_de_medicos(response.data)
        
        } catch (error) {
        
            console.error('Erro ao buscar médicos:', error);
        };
    };

    

    console.log(usuario_logado);

    useEffect(() => {
        fetch_marcarConsulta();
        fetch_medicos()
    }, []);

    return (
        <form onSubmit={'submit'}>
        <div className="tudo-solicitacao">
            <div className="alinhamento-hamburger">
                <HamburgerMenuAdmin />
            </div>
            <div className="titulo-solicitacao">
                <h1>SOLICITAÇÕES DE CONSULTA</h1>
                <div className="linha-solicitacao"></div>
            </div>
            <div className="subtitulo-solicitacao">
                <p>SOLICITAÇÕES NÃO LIDAS</p>
            </div>
            <div className="consultas-solicitacao">
                {listaInformacoesMarcarConsulta.length > 0 ? (
                    listaInformacoesMarcarConsulta.map((consulta) => (
                        <div className="consulta-solicitada" key={consulta.id}>
                            <div className="alinhamento-solicitacao-nome-horario-tipo-data">
                                <div className="nome-tipo-solicitacao">
                                    <h1 className="nome-pessoa-solicitacao">{consulta.paciente}</h1>
                                    <h2 className="tipo-consulta-solicitacao">{consulta.tipo_consulta}</h2>
                                </div>
                                <div className="data-horario-solicitacao">
                                    <h2 className="data-solicitacao">{consulta.data_agendamento.slice(0, 10)}</h2>
                                    <h2 className="horario-consulta-solicitacao">{consulta.horario.slice(0,5)}</h2>
                                </div>
                            </div>
                            <h2 className="observacao-solicitacao-titulo">OBSERVAÇÃO</h2>
                            <h3 className="observacao-solicitacao-cliente">{consulta.observacoes}</h3>
                            <h3 className="designar-profissional-titulo">DESIGNAR PROFISSIONAL</h3>
                            <div className="designar-botoes-solicitacao">
                                <select id="escolha-medico" className="designar-profissional-input" value={opcoes_de_medicos} onChange={e => set_opcoes_de_medicos(e.target.value)}>
                                    <option value="" disabled selected>
                                        Selecione um médico
                                    </option>
                                    {lista_de_medicos.map((medico) => (
                                        <option key={medico.id} value={medico.id}>
                                            {medico.nome}
                                        </option>
                                    ))}
                                </select>
                                <div className="botoes-solicitacao">
                                    <button className="botao-cancela-solicitacao" onClick={handleOpenPopup}>
                                        CANCELAR
                                    </button>
                                    <button className="botao-confirma-solicitacao" type='submit'>CONFIRMAR</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='semSolicitacoes-texto'>Sem solicitações...</p>
                )}
            </div>
            {isOpen && <CancelarConsultaAdmin onClose={handleClosePopup} />}
        </div>
        </form>
    );
}

export default SolicitacaoConsulta;

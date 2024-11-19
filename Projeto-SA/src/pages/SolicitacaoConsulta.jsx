import './SolicitacaoConsulta.css'
import React, { useState } from 'react';
import CancelarConsulta from '../components/CancelarConsulta';
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';

function SolicitacaoConsulta() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
      setIsOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsOpen(false);
    };

    return (
        <div className='tudo-solicitacao'>

            <div className="hamburguer-menu-div-solicitacao">
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
                <div className="consulta-solicitada">

                    <div className="alinhamento-solicitacao-nome-horario-tipo-data">
                        <div className="nome-tipo-solicitacao">
                            <h1 className='nome-pessoa-solicitacao' >MARILENE JUSSARA PESSOA</h1>
                            <h2 className='tipo-consulta-solicitacao' >MAMOGRAFIA</h2>
                        </div>
                        <div className="data-horario-solicitacao">
                            <h2 className='data-solicitacao' >09/12/2024</h2>
                            <h2 className='horario-consulta-solicitacao' >12:30</h2>
                        </div>
                    </div>
                    <h2 className='observacao-solicitacao-titulo' >OBSERVAÇÃO</h2>
                    <h3 className='observacao-solicitacao-cliente' >tenho medo mto medo, meu bcacjkjhdsakh socosadjaukjsdhkj a a a  ja aiii</h3>
                    <h3 className='designar-profissional-titulo' >DESIGNAR PROFISSIONAL</h3>
                    <div className="designar-botoes-solicitacao">
                        <select id="escolha-medico" className='designar-profissional-input'>
                            <option value="" disabled selected></option>
                            <option value="medico1">WALTER CAMARGO</option>
                            <option value="medico2">ANGELICA FREITAS</option>
                            <option value="medico3">GUSTAVO SANTOS</option>
                        </select>
                        <div className="botoes-solicitacao">
                            <button className='botao-confirma-solicitacao'>CONFIRMAR</button>
                            <button className='botao-cancela-solicitacao' onClick={handleOpenPopup}>CANCELAR</button>
                        </div>
                    </div>
                </div>
                {/* segunda solicitacao: */}

                <div className="consulta-solicitada">
                    <div className="alinhamento-solicitacao-nome-horario-tipo-data">
                        <div className="nome-tipo-solicitacao">
                            <h1 className='nome-pessoa-solicitacao' >MARILENE JUSSARA PESSOA</h1>
                            <h2 className='tipo-consulta-solicitacao' >MAMOGRAFIA</h2>
                        </div>
                        <div className="data-horario-solicitacao">
                            <h2 className='data-solicitacao' >09/12/2024</h2>
                            <h2 className='horario-consulta-solicitacao' >12:30</h2>
                        </div>
                    </div>
                    <h2 className='observacao-solicitacao-titulo' >OBSERVAÇÃO</h2>
                    <h3 className='observacao-solicitacao-cliente' >tenho medo mto medo, meu bcacjkjhdsakh socosadjaukjsdhkj a a a  ja aiii</h3>
                    <h3 className='designar-profissional-titulo' >DESIGNAR PROFISSIONAL</h3>
                    <div className="designar-botoes-solicitacao">
                        <select id="escolha-medico" className='designar-profissional-input'>
                            <option value="" disabled selected></option>
                            <option value="medico1">WALTER CAMARGO</option>
                            <option value="medico2">ANGELICA FREITAS</option>
                            <option value="medico3">GUSTAVO SANTOS</option>
                        </select>
                        <div className="botoes-solicitacao">
                            <button className='botao-confirma-solicitacao'>CONFIRMAR</button>
                            <button className='botao-cancela-solicitacao' onClick={handleOpenPopup} >CANCELAR</button>
                        </div>
                    </div>
                </div>


            </div>

            <div>
                {isOpen && <CancelarConsulta onClose={handleClosePopup} />}
            </div>

        </div >
    )
}

export default SolicitacaoConsulta

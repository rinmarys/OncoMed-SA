import React, { useState, useContext } from 'react'
import './CancelarConsultaAdmin.css'
import { GlobalContext } from "../contexts/GlobalContext";


function CancelarConsultaAdmin({ onClose }) {
    const { usuario_administrador } = useContext(GlobalContext)
    const [emailAdministrador, setEmailAdministrador] = useState()
    const [senhaAdministrador, setSenhaAdministrador] = useState()

    const [mensagemErroCancelarConsultaAdmin, setMensagemErroCancelarConsultaAdmin] = useState('')

    const [consultaCanceladaAdmin, setConsultaCanceladaAdmin] = useState(false)

    function CancelarConsultaAdmin_popUp() {

        if (!emailAdministrador) {
            setMensagemErroCancelarConsultaAdmin("Por favor, insira seu email!")

        }
        if (!senhaAdministrador) {
            setMensagemErroCancelarConsultaAdmin("Por favor, insira sua senha!")

        } if (emailAdministrador != usuario_administrador.email && senhaAdministrador != usuario_administrador.senha) {
            setMensagemErroCancelarConsultaAdmin('Dados incorretos, tente novamente!')

        } else {
            setConsultaCanceladaAdmin(true)
        }
    }

    return (
        <div className='alinhamentoTudo-cancelarConsultaAdmin'>
            <div className='container-cancelarConsulta-admin'>
                <div className="titulo-cancelarConsultaAdmin">
                    <h1>CANCELAR CONSULTA - ADMINISTRADOR</h1>
                </div>

                <div className="alinhamento-inputs-cancenlarConsultaAdmin">
                    <div className="inputs-cancelarConsultaAdmin">
                        <h3>Você tem certeza de que deseja cancelar esta consulta?</h3>

                        <div className="inputs">
                            <label>Confirme seu Email</label>
                            <input type="text"
                                placeholder='email@gmail.com'
                                value={emailAdministrador}
                                onChange={(event) => { setEmailAdministrador(event.target.value) }}
                            />
                        </div>

                        <div className="inputs">
                            <label>Confirme sua senha</label>
                            <input type="password"
                                placeholder='********'
                                value={senhaAdministrador}
                                onChange={(event) => { setSenhaAdministrador(event.target.value) }}
                            />
                        </div>

                        <div className="alinhamento-buttons">
                            <button className='style-button-CancelarConsultaAdmin' onClick={CancelarConsultaAdmin_popUp}>CANCELAR CONSULTA</button>
                            <button className='style-button-SairConsultaAdmin' onClick={onClose}>SAIR</button>
                        </div>
                    </div>
                    <div className="alinhamento-img-cancelarConsultaAdmin">
                        <img src="imagem-cancelar-consulta.svg" alt="Imagem de cancelar consulta" />
                    </div>
                </div>

                <div className="mensagemErro-CancelarConsultaAdmin">
                    {mensagemErroCancelarConsultaAdmin}
                </div>

            </div>
        </div>
    )
}

export default CancelarConsultaAdmin

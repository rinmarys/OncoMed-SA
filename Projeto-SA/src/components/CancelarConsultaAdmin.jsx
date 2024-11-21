import React from 'react'
import './CancelarConsultaAdmin.css'

function CancelarConsultaAdmin( {onClose} ) {
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
                            />
                        </div>

                        <div className="inputs">
                            <label>Confirme sua senha</label>
                            <input type="password"
                                placeholder='********'
                            />
                        </div>

                        <div className="alinhamento-buttons">
                            <button className='style-button-CancelarConsultaAdmin'>CANCELAR CONSULTA</button>
                            <button className='style-button-SairConsultaAdmin' onClick={onClose}>SAIR</button>
                        </div>
                    </div>
                    <div className="alinhamento-img-cancelarConsultaAdmin">
                        <img src="imagem-cancelar-consulta.svg" alt="Imagem de cancelar consulta" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CancelarConsultaAdmin

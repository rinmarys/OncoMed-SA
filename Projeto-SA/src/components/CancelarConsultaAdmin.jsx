import React, { useState, useEffect } from 'react';
import './CancelarConsultaAdmin.css';
import axios from 'axios';

function CancelarConsultaAdmin({ onClose, consultaId }) {
    const [usuario_administrador, set_usuario_administrador] = useState({});
    const [emailAdministrador, setEmailAdministrador] = useState('');
    const [senhaAdministrador, setSenhaAdministrador] = useState('');
    const [mensagemErroCancelarConsultaAdmin, setMensagemErroCancelarConsultaAdmin] = useState('');
    const [consultaCanceladaAdmin, setConsultaCanceladaAdmin] = useState(false);

    useEffect(() => {
        const fetch_admin = async () => {
            try {
                const response = await axios.get('http://localhost:3000/admin');
                set_usuario_administrador(response.data[0]); // Asume que hay un único administrador
            } catch (error) {
                console.error('Erro ao buscar administrador:', error);
            }
        };
        fetch_admin();
    }, []);

    const cancelarConsulta = async () => {
        if (!emailAdministrador || !senhaAdministrador) {
            setMensagemErroCancelarConsultaAdmin("Por favor, preencha todos os dados!");
            return;
        }
        if (emailAdministrador !== usuario_administrador.email || senhaAdministrador !== usuario_administrador.senha) {
            setMensagemErroCancelarConsultaAdmin('Dados incorretos, tente novamente!');
            return;
        }
        try {
            console.log('Haciendo solicitud DELETE para cancelar la consulta');
            const response = await axios.delete(`http://localhost:3000/marcarConsulta/${consultaId}`);
            console.log('Respuesta de la cancelación:', response);

            // Si la respuesta es exitosa
            if (response.status === 200) {
                setConsultaCanceladaAdmin(true);
                setMensagemErroCancelarConsultaAdmin('Consulta cancelada com sucesso!');
                onClose(); // Cerrar el popup
            } else {
                setMensagemErroCancelarConsultaAdmin('Erro ao cancelar consulta, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao cancelar consulta:', error);
            setMensagemErroCancelarConsultaAdmin('Erro ao cancelar consulta, tente novamente.');
        }
    };
    

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
                            <input
                                type="text"
                                placeholder='email@gmail.com'
                                value={emailAdministrador}
                                onChange={(event) => setEmailAdministrador(event.target.value)}
                            />
                        </div>

                        <div className="inputs">
                            <label>Confirme sua senha</label>
                            <input
                                type="password"
                                placeholder='****'
                                value={senhaAdministrador}
                                onChange={(event) => setSenhaAdministrador(event.target.value)}
                            />
                        </div>

                        <div className="alinhamento-buttons">
                            <button className='style-button-CancelarConsultaAdmin' onClick={cancelarConsulta} type='button'>CANCELAR CONSULTA</button>
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
    );
}

export default CancelarConsultaAdmin;

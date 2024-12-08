// import './SolicitacaoConsulta.css';
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';
// import CancelarConsultaAdmin from '../components/CancelarConsultaAdmin';
// import { GlobalContext } from '../contexts/GlobalContext';

// function SolicitacaoConsulta() {
//     const { listaInformacoesMarcarConsulta, setListaInformacoesMarcarConsulta } = useContext(GlobalContext);
//     const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);
//     const [isOpen, setIsOpen] = useState(false);
//     const [consultaId, setConsultaId] = useState('');
//     const [medicoId, setMedicoId] = useState(null); // Estado para el médico seleccionado
//     const { usuario_logado } = useContext(GlobalContext);

//     useEffect(() => {
//         fetch_marcarConsulta();
//         fetch_medicos();
//     }, []);

//     const handleOpenPopup = (id) => {
//         setConsultaId(id);
//         setIsOpen(true);
//     };

//     const handleClosePopup = () => {
//         setIsOpen(false);
//         setConsultaId(null);
//         fetch_marcarConsulta();
//     };

//     const fetch_marcarConsulta = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/marcarConsulta');
//             setListaInformacoesMarcarConsulta(response.data);
//         } catch (error) {
//             console.error('Erro ao buscar marcarConsulta por ID:', error);
//         }
//     };

//     const fetch_medicos = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/medicos');
//             set_lista_de_medicos(response.data);
//         } catch (error) {
//             console.error('Erro ao buscar médicos:', error);
//         }
//     };

//     const handleConfirmarConsulta = async (consultaId, medicoId) => {
//         try {
//             if (!medicoId) {
//                 alert('Por favor, selecione um médico');
//                 return;
//             }

//             // Enviar la consulta confirmada al backend con el médico asignado
//             const response = await axios.put(`http://localhost:3000/marcarConsulta/${consultaId}`, {
//                 medico_designado: medicoId,
//             });

//             if (response.status === 200) {
//                 // Eliminar la consulta confirmada de la lista en el frontend
//                 setListaInformacoesMarcarConsulta((prevList) =>
//                     prevList.filter((consulta) => consulta.id_consulta !== consultaId)
//                 );
//                 alert('Consulta confirmada com sucesso!');
//             } else {
//                 alert('Erro ao confirmar a consulta');
//             }
//         } catch (error) {
//             console.error('Erro ao confirmar consulta:', error);
//             alert('Erro ao confirmar consulta');
//         }
//     };

//     return (
//         <form onSubmit={'submit'}>
//             <div className="tudo-solicitacao">
//                 <div className="alinhamento-hamburger">
//                     <HamburgerMenuAdmin />
//                 </div>
//                 <div className="titulo-solicitacao">
//                     <h1>SOLICITAÇÕES DE CONSULTA</h1>
//                     <div className="linha-solicitacao"></div>
//                 </div>
//                 <div className="subtitulo-solicitacao">
//                     <p>SOLICITAÇÕES NÃO LIDAS</p>
//                 </div>
//                 <div className="consultas-solicitacao">
//                     {listaInformacoesMarcarConsulta.length > 0 ? (
//                         listaInformacoesMarcarConsulta
//                             .filter((consulta) => consulta.paciente_id === usuario_logado.id) // Filtrar por paciente logado
//                             .map((consulta) => (
//                                 <div className="consulta-solicitada" key={consulta.id_consulta}>
//                                     <div className="alinhamento-solicitacao-nome-horario-tipo-data">
//                                         <div className="nome-tipo-solicitacao">
//                                             <h1 className="nome-pessoa-solicitacao">{consulta.paciente_nome}</h1>
//                                             <h2 className="tipo-consulta-solicitacao">{consulta.tipo_consulta}</h2>
//                                         </div>
//                                         <div className="data-horario-solicitacao">
//                                             <h2 className="data-solicitacao">{consulta.data_agendamento.slice(0, 10)}</h2>
//                                             <h2 className="horario-consulta-solicitacao">{consulta.horario.slice(0, 5)}</h2>
//                                         </div>
//                                     </div>
//                                     <h2 className="observacao-solicitacao-titulo">OBSERVAÇÃO</h2>
//                                     <h3 className="observacao-solicitacao-cliente">{consulta.observacoes}</h3>
//                                     <h3 className="designar-profissional-titulo">DESIGNAR PROFISSIONAL</h3>
//                                     <div className="designar-botoes-solicitacao">
//                                         <select
//                                             id="escolha-medico"
//                                             className="designar-profissional-input"
//                                             onChange={(e) => setMedicoId(e.target.value)} // Actualizar el estado del médico seleccionado
//                                         >
//                                             <option value="" disabled selected>
//                                                 Selecione um médico
//                                             </option>
//                                             {lista_de_medicos.map((medico) => (
//                                                 <option key={medico.nome} value={medico.nome}>
//                                                     {medico.nome}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                         <div className="botoes-solicitacao">
//                                             <button
//                                                 className="botao-cancela-solicitacao"
//                                                 onClick={() => handleOpenPopup(consulta.id_consulta)}
//                                                 type="button"
//                                             >
//                                                 CANCELAR
//                                             </button>
//                                             <button
//                                                 className="botao-confirma-solicitacao"
//                                                 type="button"
//                                                 onClick={() => handleConfirmarConsulta(consulta.id_consulta, medicoId)}
//                                             >
//                                                 CONFIRMAR
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                     ) : (
//                         <p className="semSolicitacoes-texto">Sem solicitações...</p>
//                     )}
//                 </div>

//                 {isOpen && (
//                     <CancelarConsultaAdmin
//                         onClose={handleClosePopup}
//                         consultaId={consultaId}
//                         fetch_marcarConsulta={fetch_marcarConsulta}
//                     />
//                 )}
//             </div>
//         </form>
//     );
// }

// export default SolicitacaoConsulta;

import './SolicitacaoConsulta.css';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';
import CancelarConsultaAdmin from '../components/CancelarConsultaAdmin';
import { GlobalContext } from '../contexts/GlobalContext';

function SolicitacaoConsulta() {
    const { listaInformacoesMarcarConsulta, setListaInformacoesMarcarConsulta } = useContext(GlobalContext);
    const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(false);
    const [consultaId, setConsultaId] = useState('');
    const [medicoId, setMedicoId] = useState(null); // Estado para el médico seleccionado
    const { usuario_logado } = useContext(GlobalContext);

    useEffect(() => {
        fetch_marcarConsulta();
        fetch_medicos();
    }, []);

    const handleOpenPopup = (id) => {
        setConsultaId(id);
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
        setConsultaId(null);
        fetch_marcarConsulta();
    };

    const fetch_marcarConsulta = async () => {
        try {
            const response = await axios.get('http://localhost:3000/marcarConsulta');
            setListaInformacoesMarcarConsulta(response.data);
        } catch (error) {
            console.error('Erro ao buscar marcarConsulta por ID:', error);
        }
    };

    const fetch_medicos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/medicos');
            set_lista_de_medicos(response.data);
        } catch (error) {
            console.error('Erro ao buscar médicos:', error);
        }
    };

    const handleConfirmarConsulta = async (consultaId, medicoId) => {
        try {
            if (!medicoId) {
                alert('Por favor, selecione um médico');
                return;
            }

            // Enviar la consulta confirmada al backend con el médico asignado
            const response = await axios.put(`http://localhost:3000/marcarConsulta/${consultaId}`, {
                medico_designado: medicoId,
            });

            if (response.status === 200) {
                // Eliminar la consulta confirmada de la lista en el frontend
                setListaInformacoesMarcarConsulta((prevList) =>
                    prevList.filter((consulta) => consulta.id_consulta !== consultaId)
                );
                alert('Consulta confirmada com sucesso!');
            } else {
                alert('Erro ao confirmar a consulta');
            }
        } catch (error) {
            console.error('Erro ao confirmar consulta:', error);
            alert('Erro ao confirmar consulta');
        }
    };

    const handleCancelarConsulta = async (consultaId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/marcarConsulta/${consultaId}`);

            if (response.status === 200) {
                // Eliminar la consulta cancelada de la lista en el frontend
                setListaInformacoesMarcarConsulta((prevList) =>
                    prevList.filter((consulta) => consulta.id_consulta !== consultaId)
                );
                alert('Consulta cancelada com sucesso!');
            } else {
                alert('Erro ao cancelar a consulta');
            }
        } catch (error) {
            console.error('Erro ao cancelar consulta:', error);
            alert('Erro ao cancelar consulta');
        }
    };

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
                        listaInformacoesMarcarConsulta
                            .filter((consulta) => consulta.paciente_id === usuario_logado.id) // Filtrar por paciente logado
                            .map((consulta) => (
                                <div className="consulta-solicitada" key={consulta.id_consulta}>
                                    <div className="alinhamento-solicitacao-nome-horario-tipo-data">
                                        <div className="nome-tipo-solicitacao">
                                            <h1 className="nome-pessoa-solicitacao">{consulta.paciente_nome}</h1>
                                            <h2 className="tipo-consulta-solicitacao">{consulta.tipo_consulta}</h2>
                                        </div>
                                        <div className="data-horario-solicitacao">
                                            <h2 className="data-solicitacao">{consulta.data_agendamento.slice(0, 10)}</h2>
                                            <h2 className="horario-consulta-solicitacao">{consulta.horario.slice(0, 5)}</h2>
                                        </div>
                                    </div>
                                    <h2 className="observacao-solicitacao-titulo">OBSERVAÇÃO</h2>
                                    <h3 className="observacao-solicitacao-cliente">{consulta.observacoes}</h3>
                                    <h3 className="designar-profissional-titulo">DESIGNAR PROFISSIONAL</h3>
                                    <div className="designar-botoes-solicitacao">
                                        <select
                                            id="escolha-medico"
                                            className="designar-profissional-input"
                                            onChange={(e) => setMedicoId(e.target.value)} // Actualizar el estado del médico seleccionado
                                        >
                                            <option value="" disabled selected>
                                                Selecione um médico
                                            </option>
                                            {lista_de_medicos.map((medico) => (
                                                <option key={medico.nome} value={medico.id}>
                                                    {medico.nome}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="botoes-solicitacao">
                                            <button
                                                className="botao-cancela-solicitacao"
                                                onClick={() => handleOpenPopup(consulta.id_consulta)}
                                                type="button"
                                            >
                                                CANCELAR
                                            </button>
                                            <button
                                                className="botao-confirma-solicitacao"
                                                type="button"
                                                onClick={() => handleConfirmarConsulta(consulta.id_consulta, medicoId)}
                                            >
                                                CONFIRMAR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <p className="semSolicitacoes-texto">Sem solicitações...</p>
                    )}
                </div>

                {isOpen && (
                    <CancelarConsultaAdmin
                        onClose={handleClosePopup}
                        consultaId={consultaId}
                        fetch_marcarConsulta={fetch_marcarConsulta}
                        handleCancelarConsulta={handleCancelarConsulta}
                    />
                )}
            </div>
        </form>
    );
}

export default SolicitacaoConsulta;


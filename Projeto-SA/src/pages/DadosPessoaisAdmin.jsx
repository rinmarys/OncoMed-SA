import React, { useEffect, useState } from 'react';
import './DadosPessoaisAdmin.css';
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';
import axios from 'axios';

function DadosPessoaisAdmin() {
    const [dadosAdmin, setDadosAdmin] = useState({})
    const [editando, setEditando] = useState(false)
    const [estado_do_olhinho_senha, set_estado_olinho_senha] = useState(false)
    const [tipo_do_input_senha, set_tipo_do_senha] = useState(`password`);
    const [mensagemDadosSalvosSucesso, setMensagemDadosSalvosSucesso] = useState()
    const [mensagemErro, setMensagemErro] = useState()

    useEffect(() => {

        editando ? set_tipo_do_senha(`text`) : set_tipo_do_senha(`password`);
    }, [editando]);

    useEffect(() => {
        const fetch_admin = async () => {
            try {
                const response = await axios.get('http://localhost:3000/admin')
                setDadosAdmin(response.data[0])
            } catch (error) {
                console.error('Erro ao buscar administrador:', error)
            }
        }
        fetch_admin()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setDadosAdmin((prevDados) => ({
            ...prevDados,
            [name]: value,
        }))
    }

    const salvarDados = async () => {
        try {
            const response = await axios.put(
                `http://localhost:3000/admin/${dadosAdmin.id_admin}`,
                { nome: dadosAdmin.nome, email: dadosAdmin.email, senha: dadosAdmin.senha }
            )
            setMensagemDadosSalvosSucesso('Dados atualizados com sucesso!')
            setTimeout(() => setMensagemDadosSalvosSucesso(''), 1200)
        } catch (error) {
            console.error('Erro ao salvar dados:', error)
            setMensagemErro('Erro ao salvar os dados.')
            setTimeout(() => setMensagemErro(''), 1200)
        }
    }

    const toggleSenhaVisivel = () => {
        set_estado_olinho_senha(!estado_do_olhinho_senha)
    };

    return (
        <div>
            <div className="alinhamento-dadosPessoaisAdmin">
                <div className="alinhamento-titulo-hamburger-dadosPessoaisAdmin">
                    <div className="alinhamento-titulo-dadosPessoaisAdmin">
                        <h1>PERFIL ADMINISTRADOR</h1>
                        <div className="line-dadosPessoaisAdmin"></div>
                    </div>

                    <div className="hamburger-alinhamento-dadosPessoaisAdmin">
                        <HamburgerMenuAdmin />
                    </div>
                </div>

                <div className="alinhamento-inputs-dadosPessoaisAdmin">
                    <div className="input-button-dadosPessoais">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Nome completo"
                            name="nome"
                            value={dadosAdmin.nome || ''}
                            onChange={handleChange}
                            disabled={!editando}
                        />

                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="email@gmail.com"
                            name="email"
                            value={dadosAdmin.email || ''}
                            onChange={handleChange}
                            disabled={!editando}
                        />

                        <label>Senha</label>
                        <input
                            type={estado_do_olhinho_senha ? 'text' : 'password'}
                            placeholder="Digite a sua senha"
                            name="senha"
                            value={dadosAdmin.senha || ''}
                            onChange={handleChange}
                            disabled={!editando}
                            minLength={5} maxLength={12}
                        />
                        <img src={estado_do_olhinho_senha ? 'input_olho_aberto.png' : 'input_olho_fechado.png'}
                            alt='olinho' onClick={toggleSenhaVisivel}
                            style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '21vw', position: 'absolute', top: '29.7vw' }} />

                        <button
                            className="button-editar-perfil"
                            onClick={() => {
                                if (editando) {
                                    salvarDados()
                                }
                                setEditando(!editando)
                            }}
                        >
                            {editando ? 'SALVAR' : 'EDITAR'}
                        </button>

                        <div className="mensagemDadosSalvosSucesso">
                            {mensagemDadosSalvosSucesso}
                        </div>

                        <div className="mensagemErro">
                            {mensagemErro}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DadosPessoaisAdmin;

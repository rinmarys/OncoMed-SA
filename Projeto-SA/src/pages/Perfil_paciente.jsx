import React, { useContext, useEffect, useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import { GlobalContext } from '../contexts/GlobalContext';
import './Perfil_paciente.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

function Perfil_paciente() {
  const [imagemPerfilPaciente, setImagemPerfilPaciente] = useState('icon_user.png');
  const [tipo_do_input_senha, set_tipo_do_senha] = useState(`password`);
  const [estado_do_olhinho_senha, set_estado_olinho_senha] = useState(false)

  const { usuario_logado, set_usuario_logado } = useContext(GlobalContext);
  const { lista_de_pacientes, set_lista_de_pacientes } = useContext(GlobalContext);
  const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);

  const [cep_ou_crm, set_cep_ou_crm] = useState(``);
  const [valor_inpt_cep_ou_crm, set_valor_inpt_cep_ou_crm] = useState(``);
  const [mascara_do_inpt, set_mascara_do_inpt] = useState(``);
  const [paciente_ou_medico_titulo, set_paciente_ou_medico_titulo] = useState(``);
  const [editando, setEditando] = useState(false);
  const [especializacao, setEspecializacao] = useState('')
  const [mensagem, setMensagem] = useState('')
  let email_ja_cadastrado = false;
  let cpf_ja_cadastrado = false;
  let crm_ja_cadastrado = false;
  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);

  const [showEditarSucessoPopup, setShowEditarSucessoPopup] = useState(false);
  const { showDeletarSucessoPopup, setShowDeletarSucessoPopup } = useContext(GlobalContext);
  const [showCertezaDeletarPopup, setShowCertezaDeletarPopUp] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

    if (usuario_logado && usuario_logado.genero) {
      if (usuario_logado.genero === 'Feminino') {
        setImagemPerfilPaciente('./imagemPerfilFemale.svg');
      } else if (usuario_logado.genero === 'Masculino') {
        setImagemPerfilPaciente('./imagemPerfilMale.svg');
      }
    }

    if (usuario_logado.crm) {
      setEspecializacao(usuario_logado.especializacao || '')
    }
  }, [usuario_logado]);

  useEffect(() => {

    editando ? set_tipo_do_senha(`text`) : set_tipo_do_senha(`password`);
  }, [editando]);

  useEffect(() => {

    fetch_pacientes();
    fetch_medicos();

  }, []);

  useEffect(() => {

    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].email == usuario_logado.email) {

        set_paciente_ou_medico_titulo(`MÉDICO`);
      } else {

        set_paciente_ou_medico_titulo(`PACIENTE`);
      };
    };
  }, []);

  useEffect(() => {

    for (let i = 0; i < lista_de_pacientes.length; i++) {

      if (lista_de_pacientes[i].nome == usuario_logado.nome && lista_de_pacientes[i].email == usuario_logado.email) {

        set_cep_ou_crm(`CEP`);
        set_valor_inpt_cep_ou_crm(usuario_logado.cep);

      };
    };

    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].nome == usuario_logado.nome && lista_de_medicos[i].email == usuario_logado.email) {

        set_cep_ou_crm(`CRM`);
        set_valor_inpt_cep_ou_crm(usuario_logado.crm);

      };
    };
  }, [cep_ou_crm]);

  useEffect(() => {

    cep_ou_crm == `CRM` ? set_mascara_do_inpt(`CRM/aa 999999`) : set_mascara_do_inpt(`99999-999`);
  }, [cep_ou_crm])

  const fetch_pacientes = async () => {

    try {

      const pegar_lista = await axios.get(`http://localhost:3000/pacientes`);
      set_lista_de_pacientes(pegar_lista.data);

    } catch (err) {

      console.error(`Erro ao buscar tabela`, err);
    };
  };

  const fetch_medicos = async () => {

    try {

      const pegar_lista = await axios.get(`http://localhost:3000/medicos`);
      set_lista_de_medicos(pegar_lista.data);

    } catch (err) {

      console.error(`Erro ao buscar médicos`, err);
    };
  };

  const salvarDados = async () => {
    try {

      const usuario_atualizado = await { ...usuario_logado, [usuario_logado.crm ? 'crm' : 'cep']: valor_inpt_cep_ou_crm };

      for (let i = 0; i < lista_de_pacientes.length; i++) {

        if (usuario_atualizado.cpf == lista_de_pacientes[i].cpf) {

          cpf_ja_cadastrado = true;
        };

        if (usuario_atualizado.email == lista_de_pacientes[i].email) {

          email_ja_cadastrado = true;
        };
      };

      for (let i = 0; i < lista_de_medicos.length; i++) {

        if (usuario_atualizado.cpf == lista_de_medicos[i].cpf) {

          cpf_ja_cadastrado = true;
        };

        if (usuario_atualizado.email == lista_de_medicos[i].email) {

          email_ja_cadastrado = true;
        };

        if (usuario_atualizado.crm == lista_de_medicos[i].crm) {

          crm_ja_cadastrado = true;
        };
      };

      for (let i = 0; i < lista_de_pacientes.length; i++) {

        if (lista_de_pacientes[i].id_paciente == usuario_atualizado.id_paciente && email_ja_cadastrado == false && cpf_ja_cadastrado == false) {

          const response = axios.put(
            `http://localhost:3000/pacientes/${usuario_atualizado.id_paciente}`,
            usuario_atualizado
          );

          setShowEditarSucessoPopup(true);

          if (response.status === 200) {
            setMensagem('Dados atualizados com sucesso!')
            setEditando(false);

            set_usuario_logado(usuario_atualizado);

            fetch_pacientes();
          } else {
            throw new Error("Erro ao atualizar os dados.");
          }
        };
      };

      for (let i = 0; i < lista_de_medicos.length; i++) {

        if (lista_de_medicos[i].id_medico == usuario_atualizado.id_medico && email_ja_cadastrado == false && cpf_ja_cadastrado == false && crm_ja_cadastrado == false) {

          const response = axios.put(
            `http://localhost:3000/medicos/${usuario_atualizado.id_medico}`,
            usuario_atualizado
          );

          setShowEditarSucessoPopup(true);
          mensagem_de_erro = ``;

          if (response.status === 200) {

            set_usuario_logado(usuario_atualizado);

            fetch_medicos();
          } else {
            throw new Error("Erro ao atualizar os dados.");
          }
        };
      };

      switch (true) {

        case cpf_ja_cadastrado == true && email_ja_cadastrado == false && crm_ja_cadastrado == false:

          set_mensagem_de_erro(`CPF já cadastrado!`);
          break;

        case cpf_ja_cadastrado == false && email_ja_cadastrado == true && crm_ja_cadastrado == false:

          set_mensagem_de_erro(`Email já cadastrado!`);
          break;

        case cpf_ja_cadastrado == false && email_ja_cadastrado == false && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`CRM já cadastrada!`);
          break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == true && crm_ja_cadastrado == false:

          set_mensagem_de_erro(`CPF e Email já cadastrados!`);
          break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == false && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`CPF e CRM já cadastrados!`);
          break;

        case cpf_ja_cadastrado == false && email_ja_cadastrado == true && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`Email e CRM já cadastrados!`);
          break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == true && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`CPF, Email e CRM já cadastrados!`);
          break;
      }
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      setMensagem("Não foi possível atualizar os dados. Tente novamente.");
    }
  };

  const sairDaConta = () => {
    set_usuario_logado({})

    localStorage.removeItem('usuario_logado')
    sessionStorage.removeItem('usuario_logado')

    navigate('/login')
  }

  const deletarConta = async () => {
    setShowCertezaDeletarPopUp(true)
  }

  const certezaDeletarTrue = async () => {
    try {
      if (usuario_logado.id_paciente) {
        const response = await axios.delete(`http://localhost:3000/pacientes/${usuario_logado.id_paciente}`);
        if (response.status === 200) {
          limparSessao();
          setShowDeletarSucessoPopup(true);
          navigate('/');
        }
      } else if (usuario_logado.id_medico) {
        const response = await axios.delete(`http://localhost:3000/medicos/${usuario_logado.id_medico}`);
        if (response.status === 200) {
          limparSessao();
          setShowDeletarSucessoPopup(true);
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      setErroDeletar('Não foi possível deletar sua conta. Tente novamente mais tarde.');
    }
  };

  const limparSessao = () => {
    localStorage.removeItem('usuario_logado');
    sessionStorage.removeItem('usuario_logado');
    set_usuario_logado({});
  };


  // const handleConfirmarDeletar = async () => {
  //   await deletarConta();
  //   setMostrarPopDeletarPerfil(false);
  // }

  // const handleCancelarDeletar = () => {
  //   setMostrarPopDeletarPerfil(false)
  // }

  const toggleSenhaVisivel = () => {
    set_estado_olinho_senha(!estado_do_olhinho_senha)
  };

  return (
    <div>
      <div className="conteudo-perfil">
        <div className="alinhamento-titulo-perfil">
          <div className="titulo-perfil">
            <h1>PERFIL {paciente_ou_medico_titulo}</h1>
            <div className="line-perfil"></div>
          </div>

          <div className="hamburger-alinhamento">
            <HamburgerMenu />
          </div>
        </div>

        <div className="alinhamento-containers-perfil">
          <div className="container-um-perfil">
            <img src={imagemPerfilPaciente} alt="imagem de perfil" />

            <div className="buttons-alinhamento">
              <button className="button-editar-perfil"
                onClick={() => {
                  if (editando) {
                    salvarDados(); // Guarda los cambios cuando se presiona "SALVAR"
                  } else {
                  }
                  setEditando(!editando);
                }}>
                {editando ? "SALVAR" : "EDITAR"}
              </button>

              <button className="button-sair-perfil"
                onClick={sairDaConta}>SAIR DA CONTA</button>

              <button className="button-deletar-perfil"
                onClick={deletarConta}
              >DELETAR CONTA</button>
            </div>

            <div className="mensagem-erro-perfil-paciente">
              {mensagem_de_erro}
            </div>
          </div>

          {/* <ConfirmarDeletarPopUp

            show={mostrarPopDeletar}
            onConfirmar={handleConfirmarDeletar}
            onCancelar={handleCancelarDeletar}
            titulo='Tem certeza que deseja deletar a sua conta?' />

          <ConfimarContaExcluidaPopUp
            show={mostrarPopUpExcluir}
            onClose={() => {
              setMostrarPopUpExcluirPerfil(false)
              navigate('/')
            }}
            mensagem='Conta Deletada com sucesso!' /> */}

          <div className="container-dois-perfil">
            <label>Nome</label>
            <input type="text"
              placeholder="Digite seu nome"
              value={usuario_logado.nome}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, nome: e.target.value })} />

            <label>Email</label>
            <input type="text"
              placeholder="email@gmail.com"
              value={usuario_logado.email}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, email: e.target.value })} />

            <label>Telefone (com DDD)</label>
            <InputMask mask='+99 (99) 99999-9999'
              placeholder='+55 (55) 55555-5555'
              disabled={!editando}
              value={usuario_logado.telefone}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, telefone: e.target.value })} />

            <label>Gênero</label>
            <select disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, genero: e.target.value })}>
              <option disabled selected>{usuario_logado.genero}</option>
              <option>Feminino</option>
              <option>Masculino</option>
            </select>
          </div>

          <div className="container-tres-perfil">
            <label>CPF</label>
            <InputMask mask='999.999.999-99'
              placeholder='012.345.678-91'
              disabled={!editando}
              value={usuario_logado.cpf}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, cpf: e.target.value })} />

            <label>{cep_ou_crm}</label>
            <InputMask mask={mascara_do_inpt}
              placeholder='Insira seu CEP ou CRM'
              disabled={!editando}
              value={valor_inpt_cep_ou_crm}
              onChange={e => set_valor_inpt_cep_ou_crm(e.target.value)} />

            <label>Senha atual</label>
            <input type={estado_do_olhinho_senha ? 'text' : 'password'}
              placeholder="digite sua senha atual"
              value={usuario_logado.senha}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, senha: e.target.value })}
              minLength={7} maxLength={12} />
            <img src={estado_do_olhinho_senha ? 'input_olho_aberto.png' : 'input_olho_fechado.png'}
              alt='olinho' onClick={toggleSenhaVisivel}
              style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '21vw', position: 'absolute', top: '30vw' }} />

            {usuario_logado.crm && (
              <>
                <label>Especialização</label>
                <input type='text' placeholder='Digite sua especialização'
                  value={especializacao}
                  disabled={!editando}
                  onChange={(e) => {
                    setEspecializacao(e.target.value)
                    set_usuario_logado({
                      ...usuario_logado, especializacao: e.target.value
                    })
                  }} />
              </>
            )}
          </div>
        </div>
      </div>

      {showEditarSucessoPopup && (
        <div className="popup-confirmar">
          <div className="popup-confirmar-conteudo">
            <div className="titulo-cancelarConsulta-popup">
              <h3>Perfil editado com sucesso!</h3>
              <img src="jade-feliz.png" alt="jade feliz" className='jade-feliz-popup' />
            </div>
            <button type="button" onClick={() => setShowEditarSucessoPopup(false)}>Fechar</button>
          </div>
        </div>
      )}

      {showCertezaDeletarPopup && (
        <div className="popup-cancelar">
          <div className="popup-cancelar-conteudo">
            <div className="titulo-marcarconsulta-popup">
              <h3>Você tem certeza que quer deletar a sua conta?</h3>
              <img src="jade-duvida.png" alt="o mascote em duvida" className='jade-duvida' />
            </div>
            <div className="buttons-popupCancelar-alinhamento">
              <button
                onClick={() => setShowCertezaDeletarPopUp(false)}
                className="popup-cancelar-fechar-button"
                type="button"
              >
                Não, fechar
              </button>
              <button
                onClick={certezaDeletarTrue}
                className="popup-cancelar-confirmar-button"
                type="button"
              >
                Sim, deletar
              </button>
            </div>
          </div>
        </div>
      )}
    </div >
  )
}

export default Perfil_paciente;

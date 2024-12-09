import React, { useContext, useEffect, useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import { GlobalContext } from '../contexts/GlobalContext';
import './Perfil_paciente.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Perfil_paciente() {
  const [imagemPerfilPaciente, setImagemPerfilPaciente] = useState('icon_user.png');
  const [tipo_do_input_senha, set_tipo_do_senha] = useState(`password`);
  
  const { usuario_logado, set_usuario_logado } = useContext(GlobalContext);
  const {lista_de_pacientes, set_lista_de_pacientes} = useContext(GlobalContext);
  const {lista_de_medicos, set_lista_de_medicos} = useContext(GlobalContext);

  const [cep_ou_crm, set_cep_ou_crm] = useState(``);
  const [valor_inpt_cep_ou_crm, set_valor_inpt_cep_ou_crm] = useState(``);
  const [paciente_ou_medico_titulo, set_paciente_ou_medico_titulo] = useState(``);
  const [editando, setEditando] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {

    if (usuario_logado && usuario_logado.genero) {
      if (usuario_logado.genero === 'Feminino') {
        setImagemPerfilPaciente('./imagemPerfilFemale.svg');
      } else if (usuario_logado.genero === 'Masculino') {
        setImagemPerfilPaciente('./imagemPerfilMale.svg');
      }
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

    for(let i = 0; i < lista_de_medicos.length; i ++){

      if(lista_de_medicos[i].email == usuario_logado.email){

        set_paciente_ou_medico_titulo(`MÉDICO`);
      } else {

        set_paciente_ou_medico_titulo(`PACIENTE`);
      };
    };
  }, []);

  useEffect(() => {

    for(let i = 0; i < lista_de_pacientes.length; i++){

      if(lista_de_pacientes[i].nome == usuario_logado.nome && lista_de_pacientes[i].email == usuario_logado.email){

        set_cep_ou_crm(`CEP`);
        set_valor_inpt_cep_ou_crm(usuario_logado.cep);

      };
    };

    for(let i = 0; i < lista_de_medicos.length; i++){

      if(lista_de_medicos[i].nome == usuario_logado.nome && lista_de_medicos[i].email == usuario_logado.email){

        set_cep_ou_crm(`CRM`);
        set_valor_inpt_cep_ou_crm(usuario_logado.crm);

      };
    };
  }, [cep_ou_crm]);

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

       const usuario_atualizado = await { ...usuario_logado, [usuario_logado.crm ? 'crm' : 'cep'] : valor_inpt_cep_ou_crm };

      for(let i = 0; i < lista_de_pacientes.length; i++){

        if(lista_de_pacientes[i].id_paciente == usuario_atualizado.id_paciente){

          const response = await axios.put(
            `http://localhost:3000/pacientes/${usuario_atualizado.id_paciente}`,
            usuario_atualizado
            );
            
            if (response.status === 200) {
              alert("Dados atualizados com sucesso!");
              setEditando(false);

              set_usuario_logado(usuario_atualizado);
            
              fetch_pacientes();
            } else {
              throw new Error("Erro ao atualizar os dados.");
            }
          };
        };

        for(let i = 0; i < lista_de_medicos.length; i++){

          if(lista_de_medicos[i].id_medico == usuario_atualizado.id_medico){
  
            const response = await axios.put(
              `http://localhost:3000/medicos/${usuario_atualizado.id_medico}`,
              usuario_atualizado
              );
              
              if (response.status === 200) {
                alert("Dados atualizados com sucesso!");
                setEditando(false);

                set_usuario_logado(usuario_atualizado);

                fetch_medicos();
              } else {
                throw new Error("Erro ao atualizar os dados.");
              }
            };
          };
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Não foi possível atualizar os dados. Tente novamente.");
    }
  };
 
  const sairDaConta = () => {
    set_usuario_logado({})

    localStorage.removeItem('usuario_logado')
    sessionStorage.removeItem('usuario_logado')

    navigate('/login')
  }

  const deletarConta = async () => {
    try {
      console.log('Haciendo solicitud DELETE para deletar la cuenta');
      const response = await axios.delete(`http://localhost:3000/pacientes/${usuario_logado.id_paciente}`);
      console.log('Respuesta de delete:', response);

  } catch (error) {
      console.error('Erro ao cancelar consulta:', error);
  }

    localStorage.removeItem('usuario_logado')
    sessionStorage.removeItem('usuario_logado')

    navigate('/')
}

  // Deletar conta
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
              onClick={deletarConta}>DELETAR CONTA</button>
            </div>
          </div>

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
            <input type="text"
              placeholder="+00 (00) 0000-0000"
              value={usuario_logado.telefone}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, telefone: e.target.value })} />

        {/* <div className="container-alinhamento-tres-perfil">
          <div className="container-foto-usuario">
            <label>Escolha sua foto de perfil</label>
            <img src="icon_user.png" alt="foto de usuario" />
          </div>

          <div className="alinhamento-buttons-perfis">
            <button className="button-editar-perfis" onClick={editar} disabled={loading}>
              {editando ? 'SALVAR' : 'EDITAR'}
            </button>
            <button className="button-deletar-perfis" onClick={confirmarDeletarConta} disabled={loading}>
              DELETAR
            </button>
          </div>
        </div>
      </div >

      {mostrarPopSalvoPerfil && (
        <div className="container-PopSalvarPerfilPaciente">
          <h2 className="FontePopPerfilPacienteSalvo">Salvo com sucesso!</h2>
          <button className="buttonOkPerfilPaciente" onClick={() => setMostrarPopSalvoPerfil(false)}>OK</button>
        </div>
      )
      }

      {
        mostrarPopDeletarPerfil && (
          <div className="Container-PopPerfilPaciente">
            <h3 className="FontePopPerfilPaciente">Tem certeza que deseja deletar a sua conta?</h3>
            <div className="ButtonsPopPerfilPaciente">
              <button className="buttonDeletarPerfilPaciente" onClick={handleConfirmarDeletar}>SIM</button>
              <button className="buttonNaoDeletarPerfilPaciente" onClick={handleCancelarDeletar}>NÃO</button>
            </div>
          </div>
        )
      }
    </div > */}

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
            <input type="text"
              placeholder="000.000.000-00"
              value={usuario_logado.cpf}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, cpf: e.target.value })} />

            <label>{cep_ou_crm}</label>
            <input type="text"
              placeholder="00000-000"
              value={valor_inpt_cep_ou_crm}
              disabled={!editando}
              onChange={e => set_valor_inpt_cep_ou_crm(e.target.value)} />

            <label>Senha atual</label>
            <input type={tipo_do_input_senha}
              placeholder="digite sua senha atual"
              value={usuario_logado.senha}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, senha: e.target.value })} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil_paciente;

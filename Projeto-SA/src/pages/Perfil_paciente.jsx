// import React, { useState, useEffect, useContext } from 'react';
// import { GlobalContext } from '../contexts/GlobalContext';
// import axios from 'axios';
// import './Perfil_paciente.css';
// import ConfirmarDeletarPopUp from '../components/ConfirmarDeletarPopUp';
// import ConfirmarSalvoPopUp from '../components/ConfirmarSalvoPopUp';
// import { useNavigate } from 'react-router-dom';
// import HamburgerMenu from '../components/HamburgerMenu';

// function PerfilPaciente() {
//   const { usuario_logado, set_usuario_logado } = useContext(GlobalContext);
//   const [nome, setNome] = useState(usuario_logado.nome || '');
//   const [email, setEmail] = useState(usuario_logado.email || '');
//   const [telefone, setTelefone] = useState(usuario_logado.telefone || '');
//   const [senha, setSenha] = useState('');
//   const [confirmarSenha, setConfirmarSenha] = useState('');
//   const [cep, setCep] = useState(usuario_logado.cep || '');
//   const [CPF, setCPF] = useState(usuario_logado.cpf || '')

//   const [editando, setEditando] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();
//   const [mostrarPopDeletarPerfil, setMostrarPopDeletarPerfil] = useState(false);
//   const [mostrarPopSalvoPerfil, setMostrarPopSalvoPerfil] = useState(false);

//   const [estado_do_olhinho_senha, setEstadoOlhoSenha] = useState(false);
//   const [estado_do_olhinho_confirmar_senha, setEstadoOlhoConfirmarSenha] = useState(false);

//   const toggleSenhaVisivel = () => setEstadoOlhoSenha(!estado_do_olhinho_senha);
//   const toggleConfirmarSenhaVisivel = () => setEstadoOlhoConfirmarSenha(!estado_do_olhinho_confirmar_senha);

//   useEffect(() => {
//     if (!usuario_logado.id_paciente) return;

//     const fetchUsuarioPaciente = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5173/perfil_paciente/${usuario_logado.id_paciente}`);
//         const { nome, email, telefone, cep, descricao } = response.data;

//         set_usuario_logado(prev => ({ ...prev, nome, email, telefone, cep, descricao }));
//         setNome(nome);
//         setEmail(email);
//         setTelefone(telefone);
//         setCep(cep);
//         setDescricao(descricao);
//       } catch (err) {
//         console.error(err);
//         setError('Erro ao carregar os dados do usuário.');
//       }
//     };

//     fetchUsuarioPaciente();
//   }, [usuario_logado.id_paciente, set_usuario_logado]);

//   const handleChange = setter => event => setter(event.target.value);

//   const editar = async () => {
//     if (!editando) {
//       setEditando(true);
//       return;
//     }

//     if (senha && senha !== confirmarSenha) {
//       alert('As duas senhas devem ser iguais!');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const pacientePerfil = { nome, email, telefone, cep, descricao, senha };
//       await axios.put(`http://localhost:5173/perfil_paciente/${usuario_logado.id_paciente}`, pacientePerfil);
//       set_usuario_logado(prev => ({ ...prev, nome, email, telefone, cep, descricao }));

//       setMostrarPopSalvoPerfil(true);
//       setEditando(false);
//     } catch (err) {
//       console.error(err);
//       setError('Falha ao atualizar os dados. Tente novamente.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const confirmarDeletarConta = () => {
//     setMostrarPopDeletarPerfil(true);
//   };

//   const deletarConta = async () => {
//     try {
//       await axios.delete(`http://localhost:5173/perfil_paciente/${usuario_logado.id_paciente}`);
//       console.log('Conta deletada!');
//       navigate('/');
//     } catch (err) {
//       console.error(err);
//       alert('Falha ao deletar a conta. Tente novamente.');
//     }
//   };

//   const handleConfirmarDeletar = async () => {
//     await deletarConta();
//     setMostrarPopDeletarPerfil(false);
//   };

//   const handleCancelarDeletar = () => {
//     setMostrarPopDeletarPerfil(false);
//   };

//   return (
//     <div className="user-container">
//       <div className="alinhamento-tituloHamburger">
//         <div className="nav_container">
//           <h1>MEU PERFIL - PACIENTE</h1>
//           <div className="faixa_verde"></div>
//         </div>
//         <div className="alinhamento-hamburger-perfilPaciente">
//           <HamburgerMenu />
//         </div>
//       </div>

//       <div className="container-alinhamento-um-perfil">
//         <div className="info_container">
//           <div className="posicao_container">
//             <label>Nome completo</label>
//             <input
//               placeholder="Digite seu nome"
//               value={nome}
//               onChange={handleChange(setNome)}
//               disabled={!editando}
//             />

//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Digite seu email"
//               value={email}
//               onChange={handleChange(setEmail)}
//               disabled={!editando}
//             />

//             <label>Telefone (com DDD)</label>
//             <input
//               type="text"
//               placeholder="Digite seu número de telefone"
//               value={telefone}
//               onChange={handleChange(setTelefone)}
//               disabled={!editando}
//             />

//             <label>CEP</label>
//             <input
//               type="text"
//               placeholder="Digite seu CEP"
//               value={cep}
//               onChange={handleChange(setCep)}
//               disabled={!editando}
//             />
//           </div>
//         </div>

//         <div className="container-alinhamento-dois-perfil">
//           <div className="alinhamento-inputs-perfis">
//             <label>Senha</label>
//             <input
//               type={estado_do_olhinho_senha ? 'text' : 'password'}
//               placeholder="Digite sua nova senha"
//               value={senha}
//               onChange={handleChange(setSenha)}
//               disabled={!editando}
//             />
//             <img
//               src={estado_do_olhinho_senha ? 'input_olho_aberto.png' : 'input_olho_fechado.png'}
//               alt="olhinhoUm"
//               onClick={toggleSenhaVisivel}
//               style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '278px', position: 'absolute', top: '233px' }}
//             />

//             <label>Confirmar Senha</label>
//             <input
//               type={estado_do_olhinho_confirmar_senha ? 'text' : 'password'}
//               placeholder="Confirme sua nova senha"
//               value={confirmarSenha}
//               onChange={handleChange(setConfirmarSenha)}
//               disabled={!editando}
//             />
//             <img
//               src={estado_do_olhinho_confirmar_senha ? 'input_olho_aberto.png' : 'input_olho_fechado.png'}
//               alt="olhinhoDois"
//               onClick={toggleConfirmarSenhaVisivel}
//               style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '278px', position: 'absolute', top: '350px' }}
//             />

//             <label>CPF</label>
//             <input type="text"
//             placeholder='000.000.000-00'
//             value={CPF}
//             onChange={handleChange(setCPF)}
//             disabled={!editando} />
//           </div>
//         </div>

//         <div className="container-alinhamento-tres-perfil">
//           <div className="container-foto-usuario">
//             <label>Escolha sua foto de perfil</label>
//             <img src="icon_user.png" alt="foto de usuario" />
//           </div>

//           <div className="alinhamento-buttons-perfis">
//             <button className="button-editar-perfis" onClick={editar} disabled={loading}>
//               {editando ? 'SALVAR' : 'EDITAR'}
//             </button>
//             <button className="button-deletar-perfis" onClick={confirmarDeletarConta} disabled={loading}>
//               DELETAR CONTA
//             </button>
//           </div>
//         </div>
//       </div>

//       {mostrarPopDeletarPerfil && (
//         <ConfirmarDeletarPopUp
//           handleConfirmarDeletar={handleConfirmarDeletar}
//           handleCancelarDeletar={handleCancelarDeletar}
//         />
//       )}

//       {mostrarPopSalvoPerfil && (
//         <ConfirmarSalvoPopUp setMostrarPopSalvoPerfil={setMostrarPopSalvoPerfil} />
//       )}
//     </div>
//   );
// }

// export default PerfilPaciente;


import React, { useContext, useEffect, useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import { GlobalContext } from '../contexts/GlobalContext';
import './Perfil_paciente.css';
import axios from 'axios';

function Perfil_paciente() {
  const [imagemPerfilPaciente, setImagemPerfilPaciente] = useState('icon_user.png');
  const { usuario_logado, set_usuario_logado } = useContext(GlobalContext);
  const [editando, setEditando] = useState(false);

  // useEffect(() => {
  //   if (usuario_logado.length !== 0) {
  //     set_imagem_de_perfil_do_header(usuario_logado.imagem_de_perfil);
  //   } else {
  //     set_imagem_de_perfil_do_header('Imagem de Perfil (Default).svg');
  //   }
  // }, [usuario_logado]);

  useEffect(() => {
    // Solo actualiza la imagen cuando `usuario_logado` esté disponible y tenga el valor de género
    if (usuario_logado && usuario_logado.genero) {
      if (usuario_logado.genero === 'Feminino') {
        setImagemPerfilPaciente('./imagemPerfilFemale.svg');
      } else if (usuario_logado.genero === 'Masculino') {
        setImagemPerfilPaciente('./imagemPerfilMale.svg');
      }
    }
  }, [usuario_logado]);

  // Función para salvar los datos al backend
  const salvarDados = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/pacientes/${usuario_logado.id_paciente}`,
        usuario_logado
      );
      if (response.status === 200) {
        alert("Dados atualizados com sucesso!");
        setEditando(false);
      } else {
        throw new Error("Erro ao atualizar os dados.");
      }
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Não foi possível atualizar os dados. Tente novamente.");
    }
  };

  return (
    <div>
      <div className="conteudo-perfil">
        <div className="alinhamento-titulo-perfil">
          <div className="titulo-perfil">
            <h1>PERFIL PACIENTE</h1>
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
                  }
                  setEditando(!editando);
                }}>
                {editando ? "SALVAR" : "EDITAR"}
              </button>

              <button className="button-sair-perfil">SAIR DA CONTA</button>

              <button className="button-deletar-perfil">DELETAR CONTA</button>
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

            <label>CEP</label>
            <input type="text"
              placeholder="00000-000"
              value={usuario_logado.cep}
              disabled={!editando}
              onChange={(e) => set_usuario_logado({ ...usuario_logado, cep: e.target.value })} />

            <label>Senha atual</label>
            <input type="password"
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

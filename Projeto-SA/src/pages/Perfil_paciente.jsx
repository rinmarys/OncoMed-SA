// import React, { useState, useEffect, useContext } from 'react';
// import { GlobalContext } from '../contexts/GlobalContext';
// import axios from 'axios';
// import './Perfil_paciente.css';
// import HamburgeMenu from '../components/HamburgerMenu';

// function PerfilPaciente() {
//   const { usuario_logado, set_usuario_logado } = useContext(GlobalContext); const [nome, setNome] = useState(usuario_logado.nome || '')
//   const [email, setEmail] = useState(usuario_logado.email || ''); const [telefone, setTelefone] = useState(usuario_logado.telefone || '')
//   const [senha, setSenha] = useState('')
//   const [confirmarSenha, setConfirmarSenha] = useState('')
//   const [cep, setCep] = useState(usuario_logado.cep || '')
//   const [descricao, setDescricao] = useState('')
//   const [mostrarSenha, setMostrarSenha] = useState()

//   const [editando, setEditando] = useState(false)
//   const [error, setError] = useState('')

//   const [mostrarPopDeletarPerfil, setMostrarPopDeletarPerfil] = useState(false)
//   const [mostrarPopSalvoPerfil, setMostrarPopUpSalvoPerfil] = useState(false)
//   const userId = usuario_logado.id_paciente

//   useEffect(() => {
//     const fetchUsuarioPaciente = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5173/perfil_paciente/${userId}`);
//         const { nome, email, telefone, cep,
//           descricao } = response.data;
//         setNome(nome);
//         setEmail(email);
//         setTelefone(telefone);
//         setCep(cep);
//         setDescricao(descricao);
//       } catch (err) {
//         console.error(err);
//         setError('Erro ao carregar os dados do usuário');
//       }
//     };

//     fetchUsuarioPaciente();
//   }, [userId]);

//   const handleChange = (setter) => (event) => setter(event.target.value);

//   const editar = async () => {
//     if (!editando) {
//       setEditando(true);
//       return;
//     }

//     if (senha !== confirmarSenha) {
//       alert('As duas senhas devem ser iguais!');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const pacientePerfil = { nome, email, telefone, cep, descricao, senha };
//       await axios.put(`http://localhost:5173/perfil_paciente/${userId}`, pacientePerfil);

//       setMostrarPopUpSalvoPerfil(true);
//       setEditando(false);

//     } catch (err) {
//       console.error(err);
//       setError('Falha ao atualizar os dados. Tente novamente.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const confirmarDeletarConta = () => {
//     setMostrarPopDeletarPerfil(true)
//   }

//   const deletarConta = async () => {
//     try {
//       await axios.delete(`http://localhost:5173/perfil_paciente/${userId}`);
//       window.location.href = '/home';
//     } catch (err) {
//       console.error(err);
//       alert('Falha ao deletar a conta. Tente novamente.');
//     }
//   };

//   const handleConfirmarDeletar = () => {
//     deletarConta()
//     setMostrarPopDeletarPerfil(false)
//   }
//   const handleCancelarDeletar = () => {
//     setMostrarPopDeletarPerfil(false)
//   }

//   const fecharPopUpSalvoPerfil = () => {
//     setMostrarPopUpSalvoPerfil(false)
//   }

//   return (
//     <div className="user-container">
//       <div className="alinhamento-tituloHamburger">
//         <div className="nav_container">
//           <h1>MEU PERFIL - PACIENTE</h1>
//           <div className="faixa_verde"></div>
//         </div>
//         <div className="alinhamento-hamburger-perfilPaciente">
//           <HamburgeMenu />
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
//               type={mostrarSenha ? 'text' : 'password'}
//               placeholder="Digite sua senha"
//               value={senha}
//               onChange={handleChange(setSenha)}
//               disabled={!editando}
//             />

//             <label>Confirmar Senha</label>
//             <input
//               type={mostrarSenha ? 'text' : 'password'}
//               placeholder="Confirme sua senha"
//               value={confirmarSenha}
//               onChange={handleChange(setConfirmarSenha)}
//               disabled={!editando}
//             />
//             <label>Descrição breve</label>
//             <textarea
//               placeholder="Escreva algo sobre você..."
//               value={descricao}
//               onChange={handleChange(setDescricao)}
//               disabled={!editando}
//               className='textArea-perfis'
//             ></textarea>
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
//               DELETAR
//             </button>
//           </div>
//         </div>
//       </div>

//       {
//         fecharPopUpSalvoPerfil && (
//           <div className="container-PopSalvarPerfilPaciente">
//             <h2 className='FontePopPerfilPacienteSalvo'>Salvo com sucesso!</h2>
//             <button className='buttonOkPerfilPaciente' onClick={() => setMostrarPopUpSalvoPerfil(false)}>OK</button>
//           </div>
//         )
//       }

//       {
//         mostrarPopDeletarPerfil && (
//           <div className='Container-PopPerfilPaciente'>
//             <h3 className='FontePopPerfilPaciente'>Tem certeza que deseja deletar a sua conta?</h3>
//             <div className='.ButtonsPopPerfilPaciente '>
//               <button className='buttonDeletarPerfilPaciente' onClick={handleConfirmarDeletar}>SIM</button>
//               <button className='buttonNaoDeletarPerfilPaciente' onClick={handleCancelarDeletar}>NÃO</button>
//             </div>
//           </div>
//         )
//       }
//     </div >
//   );
// }

// export default PerfilPaciente;


import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import axios from 'axios';
import './Perfil_paciente.css';
import HamburgerMenu from '../components/HamburgerMenu';

function PerfilPaciente() {
  const { usuario_logado } = useContext(GlobalContext);

  // Estados principales
  const [nome, setNome] = useState(usuario_logado?.nome || '');
  const [email, setEmail] = useState(usuario_logado?.email || '');
  const [telefone, setTelefone] = useState(usuario_logado?.telefone || '');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cep, setCep] = useState(usuario_logado?.cep || '');
  const [descricao, setDescricao] = useState(usuario_logado?.descricao || '');

  // Estados auxiliares
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [editando, setEditando] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mostrarPopDeletarPerfil, setMostrarPopDeletarPerfil] = useState(false);
  const [mostrarPopSalvoPerfil, setMostrarPopSalvoPerfil] = useState(false);

  const userId = usuario_logado?.id_paciente;

  useEffect(() => {
    if (!userId) return;

    const fetchUsuarioPaciente = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/perfil_paciente/${userId}`);
        const { nome, email, telefone, cep, descricao } = response.data;
        setNome(nome);
        setEmail(email);
        setTelefone(telefone);
        setCep(cep);
        setDescricao(descricao);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar os dados do usuário');
      }
    };

    fetchUsuarioPaciente();
  }, [userId]);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const editar = async () => {
    if (!editando) {
      setEditando(true);
      return;
    }

    if (senha && senha !== confirmarSenha) {
      alert('As duas senhas devem ser iguais!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const pacientePerfil = { nome, email, telefone, cep, descricao, senha };
      await axios.put(`http://localhost:5173/perfil_paciente/${userId}`, pacientePerfil);

      setMostrarPopSalvoPerfil(true);
      setEditando(false);
    } catch (err) {
      console.error(err);
      setError('Falha ao atualizar os dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const confirmarDeletarConta = () => {
    setMostrarPopDeletarPerfil(true);
  };

  const deletarConta = async () => {
    try {
      await axios.delete(`http://localhost:5173/perfil_paciente/${userId}`);
      window.location.href = '/home';
    } catch (err) {
      console.error(err);
      alert('Falha ao deletar a conta. Tente novamente.');
    }
  };

  const handleConfirmarDeletar = () => {
    deletarConta();
    setMostrarPopDeletarPerfil(false);
  };

  const handleCancelarDeletar = () => {
    setMostrarPopDeletarPerfil(false);
  };

  return (
    <div className="user-container">
      <div className="alinhamento-tituloHamburger">
        <div className="nav_container">
          <h1>MEU PERFIL - PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>
        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgerMenu />
        </div>
      </div>

      <div className="container-alinhamento-um-perfil">
        <div className="info_container">
          <div className="posicao_container">
            <label>Nome completo</label>
            <input
              placeholder="Digite seu nome"
              value={nome}
              onChange={handleChange(setNome)}
              disabled={!editando}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleChange(setEmail)}
              disabled={!editando}
            />

            <label>Telefone (com DDD)</label>
            <input
              type="text"
              placeholder="Digite seu número de telefone"
              value={telefone}
              onChange={handleChange(setTelefone)}
              disabled={!editando}
            />

            <label>CEP</label>
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={handleChange(setCep)}
              disabled={!editando}
            />
          </div>
        </div>

        <div className="container-alinhamento-dois-perfil">
          <div className="alinhamento-inputs-perfis">
            <label>Senha</label>
            <input
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="Digite sua senha"
              value={senha}
              onChange={handleChange(setSenha)}
              disabled={!editando}
            />

            <label>Confirmar Senha</label>
            <input
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={handleChange(setConfirmarSenha)}
              disabled={!editando}
            />

            <label>Descrição breve</label>
            <textarea
              placeholder="Escreva algo sobre você..."
              value={descricao}
              onChange={handleChange(setDescricao)}
              disabled={!editando}
              className="textArea-perfis"
            ></textarea>
          </div>
        </div>

        <div className="container-alinhamento-tres-perfil">
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
      </div>

      {mostrarPopSalvoPerfil && (
        <div className="container-PopSalvarPerfilPaciente">
          <h2 className="FontePopPerfilPacienteSalvo">Salvo com sucesso!</h2>
          <button className="buttonOkPerfilPaciente" onClick={() => setMostrarPopSalvoPerfil(false)}>OK</button>
        </div>
      )}

      {mostrarPopDeletarPerfil && (
        <div className="Container-PopPerfilPaciente">
          <h3 className="FontePopPerfilPaciente">Tem certeza que deseja deletar a sua conta?</h3>
          <div className="ButtonsPopPerfilPaciente">
            <button className="buttonDeletarPerfilPaciente" onClick={handleConfirmarDeletar}>SIM</button>
            <button className="buttonNaoDeletarPerfilPaciente" onClick={handleCancelarDeletar}>NÃO</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PerfilPaciente;

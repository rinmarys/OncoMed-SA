// import React, { useContext, useEffect, useState } from 'react'
// import './Perfil_paciente.css'
// import HamburgerMenu from '../components/HamburgerMenu'

// function Perfil_paciente() {
//   const [nome, setNome] = useState('')
//   const [email, setEmail] = useState('')
//   const [telefone, setTelefone] = useState('')
//   const [senha, setSenha] = useState('')
//   const [confirmarSenha, setConfirmarSenha] = useState('')
//   const [genero, setGenero] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
//     if (savedProfile) {
//       setNome(savedProfile.nome || '');

//       setEmail(savedProfile.email || '');

//       setTelefone(savedProfile.telefone || '');

//       setGenero(savedProfile.genero || '');
//     }
//   }, []);

//   const handleChange = (setter) => (event) => setter(event.target.value)

//   const editar = () => {
//     if (senha !== confirmarSenha) {
//       alert("As duas senhas devem ser iguais!")
//       return;
//     }

//     setLoading(true)
//     setError('')

//     try {
//       const userProfile = {
//         nome,
//         email,
//         telefone,
//         senha,
//         confirmarSenha,
//       }
//       localStorage.setItem("userProfile", JSON.stringify(userProfile));

//       alert("Dados atualizados!")

//     } catch (err) {
//       console.error(error);
//       setError("Falha ao atualizar os dados. tente novamente.");

//     } finally {
//       setLoading(false);

//     }
//   }

//   const deletar = () => {
//     if (window.confirm('Tem certeza que deseja deletar sua conta?'))

//       localStorage.removeItem("userProfile")
//     alert("Conta deletada!")
//     history.push("/home")
//   }


//   return (
//     <div className='user-container'>
//       <div className="alinhamento-tituloHamburger">
//         <div className='nav_container'>
//           <h1>MEU PERFIL - PACIENTE</h1>
//           <div className="faixa_verde"></div>
//         </div>

//         <div className="alinhamento-hamburger-perfilPaciente">
//           <HamburgerMenu />
//         </div>
//       </div>

//       <div className="container-alinhamento-um">
//         <div className='info_container'>

//           <div className='posicao_container'>

//             <label for="">Nome completo</label>
//             <input placeholder="Digite seu nome" value={nome} onChange={handleChange(setNome)} />

//             <label for="">Email</label>
//             <input type="email" placeholder="Digite seu email" value={email} onChange={handleChange(setEmail)} />

//             <label for="">Telefone (com DDD)</label>
//             <input placeholder="Digite seu número de telefone" value={telefone} onChange={handleChange(setTelefone)} />

//             <label>CEP</label>
//             <input type="text" placeholder='Digite seu CEP'/>

//             {/* <label>Gênero</label>
//             <select id="genero" value={genero} onChange={handleChange(setGenero)}>
//               <option>Selecione seu genêro</option>
//               <option>Feminino</option>
//               <option>Masculino</option>
//               <option>Prefiro não informar sobre isso</option>
//             </select> */}
//           </div>

//         </div>

//         <div className="container-alinhamento-dois">
//             <div className="alinhamento-inputs-perfis">
//               <label for="">Senha</label>
//               <input type="password"
//                 placeholder="Digite a sua senha"
//                 value={senha}
//                 onChange={handleChange(setSenha)} />


//               <label for="">Nova senha </label>
//               <input
//                 type="password"
//                 placeholder="Confirme sua nova senha"
//                 value={confirmarSenha}
//                 onChange={handleChange(setConfirmarSenha)} />

//               <label>Descrição breve</label>
//               <textarea placeholder='Escreva algo sobre você...' className='textArea-perfis'></textarea>
//             </div>


//           <div className="container-alinhamento-tres">
//             <div className="container-foto-usuario">
//               <label>Escolha sua foto de perfil</label>
//               <img src="icon_user.png" alt="foto de usuario" />
//             </div>

//             <div className="alinhamento-buttons-perfis">
//               <button className='button-editar-perfis' onClick={editar} disable={loading}>EDITAR</button>

//               <button className='button-deletar-perfis' onClick={deletar}>DELETAR</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// REVISAR CODIGO

import React, { useContext, useEffect, useState } from 'react';
import './Perfil_paciente.css';
import HamburgerMenu from '../components/HamburgerMenu';

function Perfil_paciente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editando, setEditando] = useState(false); // Estado para controlar el modo de edición

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setNome(savedProfile.nome || '');
      setEmail(savedProfile.email || '');
      setTelefone(savedProfile.telefone || '');
      setGenero(savedProfile.genero || '');
    }
  }, []);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const editar = () => {
    if (!editando) {
      setEditando(true); // Activa el modo de edición
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As duas senhas devem ser iguais!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const userProfile = {
        nome,
        email,
        telefone,
        senha,
        confirmarSenha,
      };
      localStorage.setItem('userProfile', JSON.stringify(userProfile));

      alert('Dados atualizados!');
      setEditando(false); // Desactiva el modo de edición después de guardar

    } catch (err) {
      console.error(error);
      setError('Falha ao atualizar os dados. Tente novamente.');

    } finally {
      setLoading(false);
    }
  };

  const deletar = () => {
    if (window.confirm('Tem certeza que deseja deletar sua conta?')) {
      localStorage.removeItem('userProfile');
      alert('Conta deletada!');
      // Redirige al usuario (asegúrate de tener configurado el enrutador)
      window.location.href = '/home';
    }
  };

  return (
    <div className='user-container'>
      <div className="alinhamento-tituloHamburger">
        <div className='nav_container'>
          <h1>MEU PERFIL - PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>

        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgerMenu />
        </div>
      </div>

      <div className="container-alinhamento-um">
        <div className='info_container'>

          <div className='posicao_container'>

            <label>Nome completo</label>
            <input
              placeholder="Digite seu nome"
              value={nome}
              onChange={handleChange(setNome)}
              disabled={!editando} // Bloquea el input si no está en modo de edición
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
              placeholder="Digite seu número de telefone"
              value={telefone}
              onChange={handleChange(setTelefone)}
              disabled={!editando}
            />

            <label>CEP</label>
            <input
              type="text"
              placeholder='Digite seu CEP'
              disabled={!editando}
            />
          </div>

        </div>

        <div className="container-alinhamento-dois">
          <div className="alinhamento-inputs-perfis">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={handleChange(setSenha)}
              disabled={!editando}
            />

            <label>Nova senha</label>
            <input
              type="password"
              placeholder="Confirme sua nova senha"
              value={confirmarSenha}
              onChange={handleChange(setConfirmarSenha)}
              disabled={!editando}
            />

            <label>Descrição breve</label>
            <textarea
              placeholder='Escreva algo sobre você...'
              className='textArea-perfis'
              disabled={!editando}
            ></textarea>
          </div>

          <div className="container-alinhamento-tres">
            <div className="container-foto-usuario">
              <label>Escolha sua foto de perfil</label>
              <img src="icon_user.png" alt="foto de usuario" />
            </div>

            <div className="alinhamento-buttons-perfis">
              <button
                className='button-editar-perfis'
                onClick={editar}
                disabled={loading}
              >
                {editando ? 'SALVAR' : 'EDITAR'}
              </button>

              <button
                className='button-deletar-perfis'
                onClick={deletar}
              >
                DELETAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil_paciente;

// REVISAR CODIGO

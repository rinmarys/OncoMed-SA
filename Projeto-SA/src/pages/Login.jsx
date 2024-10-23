import { useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'
import Pop_up from "../components/Pop_up.jsx";

function Login() {

  const [valor_inpt_nome, set_valor_inpt_nome] = useState(``);
  const [valor_inpt_email, set_valor_inpt_email] = useState(``);
  const [valor_inpt_senha, set_valor_inpt_senha] = useState(``);
  const [pop_up_aberto, set_pop_aberto] = useState(false);

  let mensagem_de_erro;

  let pegar_local_storage_paciente = JSON.parse(localStorage.getItem(`Pacientes`));
  let pegar_local_storage_medico = JSON.parse(localStorage.getItem(`Médicos`));

  let pegar_posicao_nome_paciente = null;
  let pegar_posicao_email_paciente = null;
  let pegar_posicao_senha_paciente = null;

  let posicao_do_objeto;

  let pegar_posicao_nome_medico = null;
  let pegar_posicao_email_medico = null;
  let pegar_posicao_senha_medico = null;

  let nome_valido_paciente = false;
  let email_valido_paciente = false;
  let senha_valido_paciente = false;


  function logar(){

    for(let i = 0; i != pegar_local_storage_paciente.length; i++){

      if(pegar_local_storage_paciente[i].nome == valor_inpt_nome){

        pegar_posicao_nome_paciente = pegar_local_storage_paciente[i].nome;

      };

      if(pegar_local_storage_paciente[i].email == valor_inpt_email){

        pegar_posicao_email_paciente = pegar_local_storage_paciente[i].email;
      };

      if(pegar_local_storage_paciente[i].senha == valor_inpt_senha){

        pegar_posicao_senha_paciente = pegar_local_storage_paciente[i].senha;
      };

      if(pegar_posicao_nome_paciente != null && pegar_posicao_email_paciente != null && pegar_posicao_senha_paciente != null){

        posicao_do_objeto = i;
      };

    };

    pegar_posicao_nome_paciente != null ? nome_valido_paciente = true : nome_valido_paciente = false;

    pegar_posicao_email_paciente != null ? email_valido_paciente = true : email_valido_paciente = false;
 
    pegar_posicao_senha_paciente != null ? senha_valido_paciente = true : senha_valido_paciente = false;

    if(nome_valido_paciente == true && email_valido_paciente == true && senha_valido_paciente == true){

      localStorage.setItem(`Usuario Logado`, JSON.stringify(pegar_local_storage_paciente[posicao_do_objeto]));

      window.location.href=`/`;
    };


  };

  return (
    <div className="dv_login">


      <div className="container_img_login">
        <img src="Imagem_quatro.svg" alt="Imagem de Login"/>
      </div>

      <div className="container_informacoes_login">
    
        {pop_up_aberto && <Pop_up/>}

        <div className="titulo_login">
          <h2>LOGIN</h2>
          <Link to={`/`}><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo'/></Link>
        </div>
          <div className="faixa_verde_login"></div>

        <div className="container_inputs_login">

          <div className="posicao_dos_inputs_login">

            <div className="input_nome_login">
              <label>Nome</label>
              <input type="text" placeholder="Insira seu nome aqui" value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)}/>
            </div>

            <div className="input_email_login">
              <label>Email</label>
              <input type="email" placeholder="Insira seu email aqui" value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
            </div>

            <div className="input_senha_login">
              <label>Senha</label>
              <input type="password" minLength={7} maxLength={12} placeholder="Insira sua senha aqui" value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)}/>
            </div>

          </div>

        </div>

        <button className="botao_login" onClick={logar()}>LOGIN</button>

        <div className="nao_possui_conta">
          <p>Não Possui uma conta? <button className="nao_possui_conta_link" onClick={() => set_pop_aberto(true)}>Cadastre-se</button></p>
        </div>

        <div className="dv_massege_error">

          {mensagem_de_erro}

        </div>
      
      </div>
    </div>
  )
}

export default Login

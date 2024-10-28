import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'
import Pop_up from "../components/Pop_up.jsx";

function Login() {

  const [valor_inpt_nome, set_valor_inpt_nome] = useState(``);
  const [valor_inpt_email, set_valor_inpt_email] = useState(``);
  const [valor_inpt_senha, set_valor_inpt_senha] = useState(``);
  const [pop_up_aberto, set_pop_aberto] = useState(false);

  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);

function fazer_login(){

  let pegar_array_medicos = JSON.parse(localStorage.getItem(`Medicos Cadastrados`));
  let pegar_array_pacientes = JSON.parse(localStorage.getItem(`Pacientes Cadastrados`));
  let usuario_existente = false;

  let usuario_a_logar = {

    nome: valor_inpt_nome,
    email: valor_inpt_email,
    senha: valor_inpt_senha,
  };

  if(pegar_array_pacientes != null) {

  for(let i = 0; i < pegar_array_pacientes.length; i++){

    if(pegar_array_pacientes[i].email == valor_inpt_email && pegar_array_pacientes[i].senha == valor_inpt_senha){

      localStorage.setItem(`Usuario Logado`, JSON.stringify(usuario_a_logar));

      window.location.href=`/`;

    } else {

      set_mensagem_de_erro(`Usuário ou senha incorreto!`);
      usuario_existente = false;
      
    };
  };

  };
  
  if(pegar_array_medicos != null){

    for(let i = 0; i < pegar_array_medicos.length; i++){

      if(pegar_array_medicos[i].email == valor_inpt_email && pegar_array_medicos[i].senha == valor_inpt_senha){
  
        localStorage.setItem(`Usuario Logado`, JSON.stringify(usuario_a_logar));
  
        window.location.href=`/`;
  
      } else {
  
        set_mensagem_de_erro(`Usuário ou senha incorreto!`);
        usuario_existente = false;
        
      };
    };
  
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

        <button className="botao_login" onClick={fazer_login}>LOGIN</button>

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

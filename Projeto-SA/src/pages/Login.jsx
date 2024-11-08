import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import Pop_up from "../components/Pop_up.jsx";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Login() {

  const [valor_inpt_nome, set_valor_inpt_nome] = useState(``);
  const [valor_inpt_email, set_valor_inpt_email] = useState(``);
  const [valor_inpt_senha, set_valor_inpt_senha] = useState(``);
  const [pop_up_aberto, set_pop_aberto] = useState(false);

  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);
  const {lista_de_pacientes, set_lista_de_pacientes} = useContext(GlobalContext);
  const {lista_de_medicos, set_lista_de_medicos} = useContext(GlobalContext);
  const {usuario_logado, set_usuario_logado} = useContext(GlobalContext);
  const {usuario_administrador, set_usuario_administrador} = useContext(GlobalContext);

  const [imagem_olinho, set_imagem_olinho] = useState(<img src='input_olho_fechado.png' alt='Olinho'/>);
  const [estado_do_olinho, set_estado_do_olinho] = useState(false);
  const [valor_do_olinho, set_valor_do_olinho] = useState(`password`);

  const navegacao_de_pagina = useNavigate(``);

  useEffect(() => {
    
    console.log(`Lista de Médicos:`, lista_de_medicos);
    console.log(`Lista de Pacientes:`, lista_de_pacientes);

    if(estado_do_olinho == true){
      
      set_imagem_olinho(<img src='input_olho_aberto.png' alt='Olinho'/>);
      set_valor_do_olinho(`text`);
      
      
    } else {
      
      set_imagem_olinho(<img src='input_olho_fechado.png' alt='Olinho'/>);
      set_valor_do_olinho(`password`);
    };
  }, [estado_do_olinho]);

function fazer_login(){

  let pegar_array_medicos = [...lista_de_medicos];
  let pegar_array_pacientes = [...lista_de_pacientes];
  let pegar_array_administrador = [...usuario_administrador]
  let usuario_existente = false;

  
  if(pegar_array_pacientes != null){
    
    for(let i = 0; i < pegar_array_pacientes.length; i++){
      
      if(pegar_array_pacientes[i].email == valor_inpt_email && pegar_array_pacientes[i].senha == valor_inpt_senha){
      
      let usuario_a_logar = {
    
        nome: valor_inpt_nome,
        email: valor_inpt_email,
        senha: valor_inpt_senha,
        data_de_nascimento: pegar_array_pacientes[i].data_de_nascimento,
        cpf: pegar_array_pacientes[i].cpf,
        cep: pegar_array_pacientes[i].cep,
        genero: pegar_array_pacientes[i].genero
      };

      set_usuario_logado(usuario_a_logar);
      navegacao_de_pagina(`/`);

    } else {

      set_mensagem_de_erro(`Usuário ou senha incorreto!`);
      usuario_existente = true;
      
    };
  };

  };
  
  if(pegar_array_medicos != null){

    for(let i = 0; i < pegar_array_medicos.length; i++){

      if(pegar_array_medicos[i].email == valor_inpt_email && pegar_array_medicos[i].senha == valor_inpt_senha){
  
        let usuario_a_logar = {
    
          nome: valor_inpt_nome,
          email: valor_inpt_email,
          senha: valor_inpt_senha,
          data_de_nascimento: pegar_array_pacientes[i].data_de_nascimento,
          cpf: pegar_array_pacientes[i].cpf,
          crm: pegar_array_pacientes[i].crm,
          genero: pegar_array_pacientes[i].genero
        };

        set_usuario_logado(usuario_a_logar);
        navegacao_de_pagina(`/`);
  
      } else {
  
        set_mensagem_de_erro(`Usuário ou senha incorreto!`);
        usuario_existente = true;
                
      };
    };
  };

  if(pegar_array_administrador != null){

    for(let i = 0; i != pegar_array_administrador.length; i++){

      if(pegar_array_administrador[i].email == valor_inpt_email && pegar_array_administrador[i].senha == valor_inpt_senha){
        
        let usuario_a_logar = {
      
          nome: valor_inpt_nome,
          email: valor_inpt_email,
          senha: valor_inpt_senha
        };

        set_usuario_logado(usuario_a_logar);
        navegacao_de_pagina(`/`);

      } else {

        set_mensagem_de_erro(`Usuário ou senha incorreto!`);
        usuario_existente = true;
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

              <div className="input_senha_login_dv">

                <input type={valor_do_olinho} minLength={7} maxLength={12} placeholder="Insira sua senha aqui" value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)}/>
                <button onClick={() => set_estado_do_olinho(!estado_do_olinho)}>{imagem_olinho}</button>
              
              </div>

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

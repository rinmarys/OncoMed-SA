import {useState} from 'react'
import './Cadastro_Medico.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Cadastro_Medico() {

    const [valor_inpt_nome, set_valor_inpt_nome] = useState(``);
    const [valor_inpt_crm, set_valor_inpt_crm] = useState(``);
    const [valor_inpt_cpf, set_valor_inpt_cpf] = useState(``);
    const [valor_inpt_genero, set_valor_inpt_genero] = useState(``);
    const [valor_inpt_email, set_valor_inpt_email] = useState(``);
    const [valor_inpt_data_de_nascimento, set_valor_inpt_data_de_nascimento] = useState(``);
    const [valor_inpt_senha, set_valor_inpt_senha] = useState(``);
    const [valor_inpt_confirmar_senha, set_valor_inpt_confirmar_senha] = useState(``);
  
    const [lista_de_medicos, set_lista_de_medicos] = useState([]);
    const [recuperar_lista_de_medicos, set_recuperar_lista_de_medicos] = useState([...lista_de_medicos]);

    const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);
    const [valor_checkbox, set_valor_checkbox] = useState(``);

  useEffect(() => {

    localStorage.setItem(`Medicos Cadastrados`, JSON.stringify(lista_de_medicos));

  }, [lista_de_medicos]);

  function cadastrar(){
    
    let usuario_a_cadastrar = {

      nome: valor_inpt_nome,
      crm: valor_inpt_crm,
      cpf: valor_inpt_cpf,
      email: valor_inpt_email,
      data_de_nascimento: valor_inpt_data_de_nascimento,
      genero: valor_inpt_genero,
      senha: valor_inpt_senha
    };

    let checkbox_selecionado = false;
    let senhas_sao_iguais = false;
    let email_ja_cadastrado_paciente = false;
    let cpf_ja_cadastrado_paciente = false;
    let email_ja_cadastrado_medico = false;
    let cpf_ja_cadastrado_medico = false;
    let crm_ja_cadastrado_medico = false;
    let email_valido = false;
    let cpf_valido = false; 
    let crm_valido = false;

    let pegar_array_medicos = JSON.parse(localStorage.getItem(`Medicos Cadastrados`));
    let pegar_array_pacientes = JSON.parse(localStorage.getItem(`Pacientes Cadastrados`));
    let verificar_email_ja_existente_paciente;
    let verificar_cpf_ja_existente_paciente;
    let verificar_email_ja_existente_medico;
    let verificar_cpf_ja_existente_medico;
    let verificar_crm_ja_existente_medico;

    if(pegar_array_medicos == null) {

      email_ja_cadastrado_medico = false;
      cpf_ja_cadastrado_medico = false;
      crm_ja_cadastrado_medico = false;

    } else {

      for(let i = 0; i < pegar_array_medicos.length; i++){

        verificar_email_ja_existente_medico = pegar_array_medicos[i].email;
        verificar_cpf_ja_existente_medico = pegar_array_medicos[i].cpf;
        verificar_crm_ja_existente_medico = pegar_array_medicos[i].crm;

        if(verificar_email_ja_existente_medico == valor_inpt_email){

          email_ja_cadastrado_medico = true;
        };

        if(verificar_cpf_ja_existente_medico == valor_inpt_cpf){

          cpf_ja_cadastrado_medico = true;
        };

        if(verificar_crm_ja_existente_medico == valor_inpt_crm){

          crm_ja_cadastrado_medico = true;
        };
      };

    };

    if(pegar_array_pacientes == null){

      email_ja_cadastrado_paciente = false;
      cpf_ja_cadastrado_paciente = false;

    } else {

      for(let i = 0; i < pegar_array_pacientes.length; i++){

        verificar_email_ja_existente_paciente = pegar_array_pacientes[i].email;
        verificar_cpf_ja_existente_paciente = pegar_array_pacientes[i].cpf;

        if(verificar_email_ja_existente_paciente == valor_inpt_email){

          email_ja_cadastrado_paciente = true;
        };

        if(verificar_cpf_ja_existente_paciente == valor_inpt_cpf){

          cpf_ja_cadastrado_paciente = true;
        };
      };
      
    };

    if(cpf_ja_cadastrado_paciente == false && cpf_ja_cadastrado_medico == false){

      cpf_valido = true;
    
    } else {

     cpf_valido = false;
    
    };

    if(email_ja_cadastrado_medico == false && email_ja_cadastrado_paciente == false){

      email_valido = true;

    } else {

      email_valido = false;
    };

    if(crm_ja_cadastrado_medico == false){

      crm_valido = true;
    
    } else {

      crm_valido = false;
    };

    if(valor_inpt_senha == valor_inpt_confirmar_senha){

      senhas_sao_iguais = true;
    
    } else {

      senhas_sao_iguais = false;

    }

    if(valor_checkbox){

      checkbox_selecionado = true;
    
    } else {

      checkbox_selecionado = false;
    }
    
    if(cpf_valido == true && crm_valido == true && email_valido == true && senhas_sao_iguais == true && checkbox_selecionado == true){
      
      set_lista_de_medicos([...lista_de_medicos, usuario_a_cadastrar]);
      localStorage.setItem(`Medicos Cadastrados`, JSON.stringify(lista_de_medicos));

      ir_para_login();
      
    } else {

      switch(true){

        case cpf_valido == false && email_valido == true && crm_valido == true:
          
          set_mensagem_de_erro(`CPF já cadastrado!`);
          break;

        case cpf_valido == true && email_valido == false && crm_valido == true:

          set_mensagem_de_erro(`Email já cadastrado!`);
          break;

        case cpf_valido == true && email_valido == true && crm_valido == false:

          set_mensagem_de_erro(`CRM já cadsatrado!`);
          break;

        case senhas_sao_iguais == false:
          
          set_mensagem_de_erro(`As senhas devem ser iguais!`);
          break;

        case checkbox_selecionado == false:

          set_mensagem_de_erro(`Favor aceitar os termos de uso!`);
          break;

        case cpf_valido == false && email_valido == false && crm_valido == true:

          set_mensagem_de_erro(`CPF e Email já cadastrados!`);
          break;

        case cpf_valido == true && email_valido == false && crm_valido == false:

          set_mensagem_de_erro(`Email e CRM já cadastrados!`);
          break;

        case cpf_valido == false && email_valido == true && crm_valido == false:
          
          set_mensagem_de_erro(`CPF e CRM já cadastrados!`);
          break;

        case cpf_valido == false && email_valido == false && crm_valido == false:

          set_mensagem_de_erro(`CPF, Email e CRM já cadastrados!`);
        };

    };
    
    // console.log(`Email`, email_valido);
    // console.log(`CPF`, cpf_valido);
    // console.log(`Senhas`, senhas_sao_iguais);
    // console.log(`checkbox`, checkbox_selecionado);
    
  };
  
  function ir_para_login(){
  
        window.location.href=`/login`;
  
  };
  
    return (
        <div className='dv_cadastro_medico'>

        <div className='container_img_medico'>
          <img src='Image_tres.png' alt="Imagem com Méidcos" className='imagem_cadastro'/>
        </div>
    
    <div className='container_informacoes_medico'>
    
        <div className='titulo_medico'>
            <h2>CADASTRO - MÉDICO</h2>
            <Link to={`/`} className='titulo_medico_logo'><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo_medico'/></Link>
            <div className="faixa_verde_medico"></div>
        </div>
    
        <div className='posicao_inputs_medico'>
            <div className='coluna_de_inputs_um_medico'>
    
              <div className='input_nome_medico'>
                <label>Nome Completo</label>
                <input type="text" placeholder='Insira seu nome completo' value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)}/>
              </div>
    
              <div className="input_cpf_medico">
                <label>CPF</label>
                <input type="text" maxLength={14} placeholder='Insira seu CPF aqui' value={valor_inpt_cpf} onChange={(e) => set_valor_inpt_cpf(e.target.value)}/>
              </div>
              
              <div className="input_genero_medico">
                <label>Gênero</label>
                <input type="text" placeholder='Insira seu gênero aqui' value={valor_inpt_genero} onChange={(e) => set_valor_inpt_genero(e.target.value)}/>
              </div>
    
              <div className="input_senha_medico">
                <label>Senha</label>
                <input type="text" minLength={7} maxLength={12} placeholder='Insira sua senha aqui' value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)}/>
              </div>
    
            </div>
    
            <div className="coluna_de_inputs_dois_medico">
    
              <div className="input_crm_medico">
                <label>CRM</label>
                <input type="text" maxLength={13} placeholder='Insira sua CRM' value={valor_inpt_crm} onChange={(e) => set_valor_inpt_crm(e.target.value)}/>
              </div>
    
              <div className="input_email_medico">
                <label>Email</label>
                <input type="text" placeholder='Email aqui' value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
              </div>
    
              <div className="input_data_de_nascimento_medico">
                <label>Data Nascimento</label>
                <input type="date" maxLength={10}placeholder='Data de nascimento aqui' value={valor_inpt_data_de_nascimento} onChange={(e) => set_valor_inpt_data_de_nascimento(e.target.value)}/>
              </div>
    
              <div className="input_confirmar_senha_medico">
                <label>Confirmar Senha</label>
                <input type="password" minLength={7} maxLength={12} placeholder='Confirme sua senha aqui' value={valor_inpt_confirmar_senha} onChange={(e) => set_valor_inpt_confirmar_senha(e.target.value)}/>
              </div>
    
            </div>
        </div>
    
        <div className='caminho_para_termos_e_politica_medico'>
          <input type="checkbox" className='inpt_checkbox' value={valor_checkbox} onChange={(e) => set_valor_checkbox(e.target.checked)}/>
          <label htmlFor='checkbox'> Leio e concordo com os <Link to={`/termosdeuso`} className='hyperlink_termos_de_uso'>Termos de uso</Link> & <Link to={`/politicadeprivacidade`} className='hyperlink_politica_de_privacidade'>Política de Privacidade</Link></label>
        </div>
    
            <button className='botao_cadastrar_medico' onClick={cadastrar}>CADASTRAR</button>
     
        <div className="possui_conta_medico">
          <p>Já possui uma conta? <Link to={`/login`} className='hyperlink_login_medico'>Log-In</Link></p>
        </div>

        <div className="error_massege_medico">

        {mensagem_de_erro}

        </div>
        
    </div>
    
        </div>
  )
}

export default Cadastro_Medico

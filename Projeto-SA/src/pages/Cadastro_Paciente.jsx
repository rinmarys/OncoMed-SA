import {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Cadastro_Paciente.css'
import { GlobalContext } from '../contexts/GlobalContext';
function Cadastro_Paciente() {

  
  const [valor_inpt_nome, set_valor_inpt_nome] = useState(``);
  const [valor_inpt_cep, set_valor_inpt_cep] = useState(``);
  const [valor_inpt_cpf, set_valor_inpt_cpf] = useState(``);
  const [valor_inpt_genero, set_valor_inpt_genero] = useState(``);
  const [valor_inpt_email, set_valor_inpt_email] = useState(``);
  const [valor_inpt_data_de_nascimento, set_valor_inpt_data_de_nascimento] = useState(``);
  const [valor_inpt_senha, set_valor_inpt_senha] = useState(``);
  const [valor_inpt_confirmar_senha, set_valor_inpt_confirmar_senha] = useState(``);
  
  const [lista_de_pacientes, set_lista_de_pacientes] = useState([]);
  const [recuperar_lista_de_pacientes, set_recuperar_lista_de_pacientes] = useState([...lista_de_pacientes]);

  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);
  const [valor_checkbox, set_valor_checkbox] = useState(``);

  const [imagem_olinho, set_imagem_olinho] = useState(<img src='input_olho_fechado.png' alt='Olinho'/>);
  const [estado_do_olinho, set_estado_do_olinho] = useState(false);
  const [valor_do_olinho, set_valor_do_olinho] = useState(`password`);

  useEffect(() => {

    localStorage.setItem(`Pacientes Cadastrados`, JSON.stringify(lista_de_pacientes));

  }, [lista_de_pacientes]);

  useEffect(() => {
    
    if(estado_do_olinho == true){
      
      set_imagem_olinho(<img src='input_olho_aberto.png' alt='Olinho'/>);
      set_valor_do_olinho(`text`);
      
      
    } else {
      
      set_imagem_olinho(<img src='input_olho_fechado.png' alt='Olinho'/>);
      set_valor_do_olinho(`password`);
    };
  }, [estado_do_olinho]);

  function cadastrar(){
    
    let usuario_a_cadastrar = {

      nome: valor_inpt_nome,
      cep: valor_inpt_cep,
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
    let email_valido = false;
    let cpf_valido = false; 

    let pegar_array_medicos = JSON.parse(localStorage.getItem(`Medicos Cadastrados`));
    let pegar_array_pacientes = JSON.parse(localStorage.getItem(`Pacientes Cadastrados`));
    let verificar_email_ja_existente_paciente;
    let verificar_cpf_ja_existente_paciente;
    let verificar_email_ja_existente_medico;
    let verificar_cpf_ja_existente_medico;

    if(pegar_array_medicos == null) {

      email_ja_cadastrado_medico = false;
      cpf_ja_cadastrado_medico = false;

    } else {

      for(let i = 0; i < pegar_array_medicos.length; i++){

        verificar_email_ja_existente_medico = pegar_array_medicos[i].email;
        verificar_cpf_ja_existente_medico = pegar_array_medicos[i].cpf;

        if(verificar_email_ja_existente_medico == valor_inpt_email){

          email_ja_cadastrado_medico = true;
        };

        if(verificar_cpf_ja_existente_medico == valor_inpt_cpf){

          cpf_ja_cadastrado_medico = true;
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
    }

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
    
    if(cpf_valido == true && email_valido == true && senhas_sao_iguais == true && checkbox_selecionado == true){
      
      set_lista_de_pacientes([...lista_de_pacientes, usuario_a_cadastrar]);
      localStorage.setItem(`Pacientes Cadastrados`, JSON.stringify(lista_de_pacientes));
      
    } else {

      switch(true){

        case cpf_valido == false && email_valido == true:
          
          set_mensagem_de_erro(`CPF já cadastrado!`);
          break;

        case cpf_valido == true && email_valido == false:

          set_mensagem_de_erro(`Email já cadastrado!`);
          break;

        case senhas_sao_iguais == false:
          
          set_mensagem_de_erro(`As senhas devem ser iguais!`);
          break;

        case checkbox_selecionado == false:

          set_mensagem_de_erro(`Favor aceitar os termos de uso!`);
          break;

        case cpf_valido == false && email_valido == false:

          set_mensagem_de_erro(`CPF e Email já cadastrados!`);
          break;
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
    <div className='dv_cadastro_paciente'>

    <div className='container_img_paciente'>
      <img src="Image_um.png" alt="Imagem de Acolhimento" className='imagem_cadastro'/>
    </div>

<div className='container_informacoes_paciente'>

    <div className='titulo_paciente'>
        <h2>CADASTRO - PACIENTE</h2>
        <Link to={'/'} className='container_informacoes_logo_paciente'><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo_paciente'/></Link>
        <div className="faixa_verde_paciente"></div>
    </div>

    <div className='posicao_inputs_paciente'>
        <div className='coluna_de_inputs_um_paciente'>

          <div className='input_nome_paciente'>
            <label>Nome</label>
            <input type="text" placeholder='Digite seu nome' value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)}/>
          </div>

          <div className="input_cpf_paciente">
            <label>CPF</label>
            <input type="text" maxLength={14} placeholder='012.234.567-89' value={valor_inpt_cpf} onChange={(e) => set_valor_inpt_cpf(e.target.value)}/>
          </div>
          
          <div className="input_genero_paciente">
            <label>Gênero</label>
            <input type="text" placeholder='Digite seu gênero aqui' value={valor_inpt_genero} onChange={(e) => set_valor_inpt_genero(e.target.value)}/>
          </div>

          <div className="input_senha_paciente">
            <label>Senha</label>
            <input type="text" minLength={7} maxLength={12} placeholder='Digite sua senha aqui' value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)}/>
          </div>

        </div>

        <div className="coluna_de_inputs_dois_paciente">

          <div className="input_cep_paciente">
            <label>CEP</label>
            <input type="text" maxLength={9} placeholder='12345-678' value={valor_inpt_cep} onChange={(e) => set_valor_inpt_cep(e.target.value)}/>
          </div>

          <div className="input_email_paciente">
            <label>Email</label>
            <input type="text" placeholder='exemplo@gmail.com' value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
          </div>

          <div className="input_data_de_nascimento_paciente">
            <label>Data Nascimento</label>
            <input type="date" maxLength={10} placeholder='Data de nascimento aqui' value={valor_inpt_data_de_nascimento} onChange={(e) => set_valor_inpt_data_de_nascimento(e.target.value)}/>
          </div>

          <div className="input_confirmar_senha_paciente">
            <label>Confirmar Senha</label>

            <div className="input_confirmar_senha_paciente_dv">
            
              <input type={valor_do_olinho} minLength={7} maxLength={12} placeholder='Confirme sua senha' value={valor_inpt_confirmar_senha} onChange={(e) => set_valor_inpt_confirmar_senha(e.target.value)}/>
              <button onClick={() => set_estado_do_olinho(!estado_do_olinho)}>{imagem_olinho}</button>
            
            </div>
          </div>

        </div>
    </div>

    <div className='caminho_para_termos_e_politica_paciente'>
      <input type="checkbox" id='checkbox_cadastro_paciente' value={valor_checkbox} onChange={(e) => set_valor_checkbox(e.target.checked)}/>
      <label htmlFor='checkbox'> Leio e concordo com os <Link to={`/termosdeuso`} className='termos_de_uso_paciente'>Termos de uso</Link> & <Link to={`/politicadeprivacidade`} className='politica_de_privacidade_paciente'>Política de Privacidade</Link></label>
    </div>

        <button className='botao_cadastrar_paciente' onClick={cadastrar}>CADASTRAR</button>
 
    <div className="possui_conta">
      <p>Já possui uma conta? <Link to={`/login`} className='possui_conta_link'>Log-In</Link></p>
    </div>

    <div className="error_paciente">

    {mensagem_de_erro}

    </div>
    
</div>

    </div>
  )
}


export default Cadastro_Paciente

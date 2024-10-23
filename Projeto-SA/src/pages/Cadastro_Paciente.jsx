import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Cadastro_Paciente.css'
function Cadastro_Paciente() {

  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);

  const [valor_inpt_nome, set_valor_inpt_nome] = useState(``);
  const [valor_inpt_cep, set_valor_inpt_cep] = useState(``);
  const [valor_inpt_cpf, set_valor_inpt_cpf] = useState(``);
  const [valor_inpt_genero, set_valor_inpt_genero] = useState(``);
  const [valor_inpt_email, set_valor_inpt_email] = useState(``);
  const [valor_inpt_data_de_nascimento, set_valor_inpt_data_de_nascimento] = useState(``);
  const [valor_inpt_senha, set_valor_inpt_senha] = useState(``);
  const [valor_inpt_confirmar_senha, set_valor_inpt_confirmar_senha] = useState(``);

  const [valor_checkbox, set_valor_checkbox] = useState(``);

  const [email_disponivel , set_email_disponivel] = useState(false);
  let cpf_disponivel = false;
  let pode_cadastrar = false;

  let senhas_sao_iguais = false;
  let termos_de_uso_paciente_aceito = false;

  let array_de_usuarios_de_pacientes = [];
  let array_de_usuarios_de_medicos = JSON.parse(localStorage.getItem(`Médicos Cadastrados`));
  
  function cadastrar(){
    
    let paciente = {
  
      nome: valor_inpt_nome,
      cpf: valor_inpt_cpf,
      email: valor_inpt_email,
      data_de_nascimento: valor_inpt_data_de_nascimento,
      cep: valor_inpt_cep,
      genero: valor_inpt_genero,
      senha: valor_inpt_senha
    };

    for(let i = 0; i != array_de_usuarios_de_pacientes.length; i++){

      if(array_de_usuarios_de_pacientes[i].email != valor_inpt_email && array_de_usuarios_de_medicos[i].email != valor_inpt_email && email_disponivel == false){

        set_email_disponivel(true);
        
      } else {
        
        set_mensagem_de_erro(`Email já cadastrado!`);
      };

      if(array_de_usuarios_de_pacientes[i].cpf != valor_inpt_cpf || array_de_usuarios_de_medicos[i].cpf != valor_inpt_cpf && cpf_disponivel == false){

        cpf_disponivel = true;
        
      } else{
        
        set_mensagem_de_erro(`CPF já cadastrado!`);
      };
      
    };

    valor_checkbox == true ? termos_de_uso_paciente_aceito = true : set_mensagem_de_erro(`Favor aceitar os Termos de Uso!`);

    valor_inpt_senha != valor_inpt_confirmar_senha ? set_mensagem_de_erro(`As senhas não são iguais!`) : senhas_sao_iguais = true;

    if(email_disponivel == true && cpf_disponivel == true && senhas_sao_iguais == true){

      pode_cadastrar = true;
    };

    
    array_de_usuarios_de_pacientes.push(paciente);
    localStorage.setItem(`Pacientes Cadastrados`, JSON.stringify(array_de_usuarios_de_pacientes));
  
    console.log(email_disponivel)
    console.log(cpf_disponivel)
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
            <input type="text" placeholder='Nome aqui' value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)}/>
          </div>

          <div className="input_cpf_paciente">
            <label>CPF</label>
            <input type="text" maxLength={14} placeholder='CPF aqui' value={valor_inpt_cpf} onChange={(e) => set_valor_inpt_cpf(e.target.value)}/>
          </div>
          
          <div className="input_genero_paciente">
            <label>Gênero</label>
            <input type="text" placeholder='Gênero aqui' value={valor_inpt_genero} onChange={(e) => set_valor_inpt_genero(e.target.value)}/>
          </div>

          <div className="input_senha_paciente">
            <label>Senha</label>
            <input type="text" minLength={7} maxLength={12} placeholder='Senha aqui' value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)}/>
          </div>

        </div>

        <div className="coluna_de_inputs_dois_paciente">

          <div className="input_cep_paciente">
            <label>CEP</label>
            <input type="text" maxLength={9} placeholder='CEP aqui' value={valor_inpt_cep} onChange={(e) => set_valor_inpt_cep(e.target.value)}/>
          </div>

          <div className="input_email_paciente">
            <label>Email</label>
            <input type="text" placeholder='Email aqui' value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
          </div>

          <div className="input_data_de_nascimento_paciente">
            <label>Data Nascimento</label>
            <input type="date" maxLength={10} placeholder='Data de nascimento aqui' value={valor_inpt_data_de_nascimento} onChange={(e) => set_valor_inpt_data_de_nascimento(e.target.value)}/>
          </div>

          <div className="input_confirmar_senha_paciente">
            <label>Confirmar Senha</label>
            <input type="password" minLength={7} maxLength={12} placeholder='Confirme sua senha' value={valor_inpt_confirmar_senha} onChange={(e) => set_valor_inpt_confirmar_senha(e.target.value)}/>
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

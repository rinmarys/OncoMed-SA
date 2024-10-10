import {useState} from 'react'
import { Link } from 'react-router-dom';
import './Cadastro_Paciente.css'
function Cadastro_Paciente() {

  const [valor_inpt_nome, set_valor_inpt_nome] = useState();
  const [valor_inpt_sobrenome, set_valor_inpt_sobrenome] = useState();
  const [valor_inpt_cpf, set_valor_inpt_cpf] = useState();
  const [valor_inpt_genero, set_valor_inpt_genero] = useState();
  const [valor_inpt_email, set_valor_inpt_email] = useState();
  const [valor_inpt_data_de_nascimento, set_valor_inpt_data_de_nascimento] = useState();
  const [valor_inpt_senha, set_valor_inpt_senha] = useState();
  const [valor_inpt_confirmar_senha, set_valor_inpt_confirmar_senha] = useState();
  let senhas_sao_iguais = false;

  function verificar_senha(){

    if(Text(valor_inpt_senha) == Text(valor_inpt_confirmar_senha)){

      senhas_sao_iguais = true;
    } else {

      senhas_sao_iguais = false;

    };
  };

  function cadastrar(){

    verificar_senha
  }

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

          <div className="input_sobrenome_paciente">
            <label>Sobrenome</label>
            <input type="text" placeholder='Sobrenome aqui' value={valor_inpt_sobrenome} onChange={(e) => set_valor_inpt_sobrenome(e.target.value)}/>
          </div>

          <div className="input_email_paciente">
            <label>Email</label>
            <input type="text" placeholder='Email aqui' value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
          </div>

          <div className="input_data_de_nascimento_paciente">
            <label>Data Nascimento</label>
            <input type="text" maxLength={10} placeholder='Data de nascimento aqui' value={valor_inpt_data_de_nascimento} onChange={(e) => set_valor_inpt_data_de_nascimento(e.target.value)}/>
          </div>

          <div className="input_confirmar_senha_paciente">
            <label>Confirmar Senha</label>
            <input type="password" minLength={7} maxLength={12} placeholder='Confirmar senha aqui' value={valor_inpt_confirmar_senha} onChange={(e) => set_valor_inpt_confirmar_senha(e.target.value)}/>
          </div>

        </div>
    </div>

    <div className='caminho_para_termos_e_politica_paciente'>
      <input type="checkbox" />
      <label htmlFor='checkbox'> Leio e concordo com os <Link to={`/termosdeuso`} className='termos_de_uso_paciente'>Termos de uso</Link> & <Link to={`/politicadeprivacidade`} className='politica_de_privacidade_paciente'>Política de Privacidade</Link></label>
    </div>

        <button className='botao_cadastrar_paciente' onClick={cadastrar()}>CADASTRAR</button>
 
    <div className="possui_conta">
      <p>Já possui uma conta? <Link to={`/login`} className='possui_conta_link'>Log-In</Link></p>
    </div>
    
</div>

    </div>
  )
}

export default Cadastro_Paciente

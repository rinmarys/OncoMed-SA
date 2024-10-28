import {useState} from 'react'
import './Cadastro_Medico.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Cadastro_Medico() {

    const [valor_inpt_nome, set_valor_inpt_nome] = useState();
    const [valor_inpt_sobrenome, set_valor_inpt_sobrenome] = useState();
    const [valor_inpt_cpf, set_valor_inpt_cpf] = useState();
    const [valor_inpt_genero, set_valor_inpt_genero] = useState();
    const [valor_inpt_email, set_valor_inpt_email] = useState();
    const [valor_inpt_data_de_nascimento, set_valor_inpt_data_de_nascimento] = useState();
    const [valor_inpt_senha, set_valor_inpt_senha] = useState();
    const [valor_inpt_confirmar_senha, set_valor_inpt_confirmar_senha] = useState();
  
    let array_de_usuarios = [{nome: 'asd', email: 'asd', senha: 'asd'}];

    useEffect(() => {

      localStorage.setItem(`Medicos Cadastrados`, JSON.stringify(array_de_usuarios));
    }, [array_de_usuarios])

  
  
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
                <input type="text" maxLength={13} placeholder='Insira sua CRM' value={valor_inpt_sobrenome} onChange={(e) => set_valor_inpt_sobrenome(e.target.value)}/>
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
          <input type="checkbox" className='inpt_checkbox'/>
          <label htmlFor='checkbox'> Leio e concordo com os <Link to={`/termosdeuso`} className='hyperlink_termos_de_uso'>Termos de uso</Link> & <Link to={`/politicadeprivacidade`} className='hyperlink_politica_de_privacidade'>Política de Privacidade</Link></label>
        </div>
    
            <button className='botao_cadastrar_medico'>CADASTRAR</button>
     
        <div className="possui_conta_medico">
          <p>Já possui uma conta? <Link to={`/login`} className='hyperlink_login_medico'>Log-In</Link></p>
        </div>
        
    </div>
    
        </div>
  )
}

export default Cadastro_Medico

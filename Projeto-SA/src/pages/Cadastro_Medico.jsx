import {useState} from 'react'
function Cadastro_Medico() {

    const [valor_inpt_nome, set_valor_inpt_nome] = useState();
    const [valor_inpt_sobrenome, set_valor_inpt_sobrenome] = useState();
    const [valor_inpt_cpf, set_valor_inpt_cpf] = useState();
    const [valor_inpt_genero, set_valor_inpt_genero] = useState();
    const [valor_inpt_email, set_valor_inpt_email] = useState();
    const [valor_inpt_data_de_nascimento, set_valor_inpt_data_de_nascimento] = useState();
    const [valor_inpt_senha, set_valor_inpt_senha] = useState();
    const [valor_inpt_confirmar_senha, set_valor_inpt_confirmar_senha] = useState();
  
    
  
  
    return (
        <div className='dv_cadastro'>

        <div className='container_img'>
          <img src='Image_tres.png' alt="Imagem com Méidcos" className='imagem_cadastro'/>
        </div>
    
    <div className='container_informacoes'>
    
        <div className='titulo'>
            <h2>CADASTRO - MÉDICO</h2>
            <img src="Logo_SA.png" alt="Logo.png" className='imagem_logo'/>
            <div className="faixa_verde"></div>
        </div>
    
        <div className='posicao_inputs'>
            <div className='coluna_de_inputs_um'>
    
              <div className='input_nome_completo'>
                <label>Nome Completo</label>
                <input type="text" placeholder='Insira seu nome completo' value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)}/>
              </div>
    
              <div className="input_cpf">
                <label>CPF</label>
                <input type="text" maxLength={14} placeholder='Insira seu CPF aqui' value={valor_inpt_cpf} onChange={(e) => set_valor_inpt_cpf(e.target.value)}/>
              </div>
              
              <div className="input_genero">
                <label>Gênero</label>
                <input type="text" placeholder='Insira seu gênero aqui' value={valor_inpt_genero} onChange={(e) => set_valor_inpt_genero(e.target.value)}/>
              </div>
    
              <div className="input_senha">
                <label>Senha</label>
                <input type="text" minLength={7} maxLength={12} placeholder='Insira sua senha aqui' value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)}/>
              </div>
    
            </div>
    
            <div className="coluna_de_inputs_dois">
    
              <div className="input_crm">
                <label>CRM</label>
                <input type="text" maxLength={13} placeholder='Insira sua CRM' value={valor_inpt_sobrenome} onChange={(e) => set_valor_inpt_sobrenome(e.target.value)}/>
              </div>
    
              <div className="input_email">
                <label>Email</label>
                <input type="text" placeholder='Email aqui' value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
              </div>
    
              <div className="input_data_de_nascimento">
                <label>Data Nascimento</label>
                <input type="text" maxLength={10}placeholder='Data de nascimento aqui' value={valor_inpt_data_de_nascimento} onChange={(e) => set_valor_inpt_data_de_nascimento(e.target.value)}/>
              </div>
    
              <div className="input_confirmar_senha">
                <label>Confirmar Senha</label>
                <input type="password" minLength={7} maxLength={12} placeholder='Confirme sua senha aqui' value={valor_inpt_confirmar_senha} onChange={(e) => set_valor_inpt_confirmar_senha(e.target.value)}/>
              </div>
    
            </div>
        </div>
    
        <div className='caminho_para_termos_e_politica'>
          <input type="checkbox" className='inpt_checkbox'/>
          <label htmlFor='checkbox'> Leio e concordo com os <a href="">Termos de uso</a> & <a href="">Política de Privacidade</a></label>
        </div>
    
            <button className='alinhamento_botao'>CADASTRAR</button>
     
        <div className="possui_conta">
          <p>Já possui uma conta? <a href="">Log-In</a></p>
        </div>
        
    </div>
    
        </div>
  )
}

export default Cadastro_Medico

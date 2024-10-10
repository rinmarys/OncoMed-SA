import { useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'

function Login() {

  const [valor_inpt_nome, set_valor_inpt_nome] = useState();
  const [valor_inpt_email, set_valor_inpt_email] = useState();
  const [valor_inpt_senha, set_valor_inpt_senha] = useState();


  return (
    <div className="dv_login">

      <div className="container_img_login">
        <img src="Imagem_quatro.svg" alt="Imagem de Login"/>
      </div>

      <div className="container_informacoes_login">

        <div className="titulo_login">
          <h2>LOGIN</h2>
          <Link to={`/`}><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo'/></Link>
          <div className="faixa_verde_login"></div>
        </div>

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

        <button className="botao_login">LOGIN</button>

        <div className="nao_possui_conta">
          <p>Não Possui uma conta? <Link to={`/cadastropaciente`} className="nao_possui_conta_link">Cadastre-se</Link></p>
        </div>
      
      </div>
    </div>
  )
}

export default Login

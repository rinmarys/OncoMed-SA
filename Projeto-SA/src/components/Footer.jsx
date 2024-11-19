import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  
  const [gmail_logo, set_gmail_logo] = useState(`Gmail.png`);
  const [whatsapp_logo, set_whatsapp_logo] = useState(`Whatsapp.png`);
  const [instagram_logo, set_instagram_logo] = useState(`Instagram.png`);
  
  return (
    <div>
      <div className='footer-container'>

          <div className="alinhamentoLogo-mascote">
            <img src="Logo_Footer.svg" alt="Logo Verde" className='Logo' />

            <img src="Mascote.svg" alt="Mascote OncoMed" className='mascote' />
          </div>

          <div className="container-um-alinhamento">
            <div className="alinhamento-containers">

              <div className="container-um-alinhamento-contatos">

                <h1 className='estilo-titulos'>Contatos</h1>
                <div className="line-footer-contatos"></div>

                <p className='estilo-texto-branco'>
                  (31) 99876-5432
                  <br />  OncoMed@gmail.com
                </p>

                <div className='alinhamento_titulo_whatsapp'>

                  <h1 className='estilo-titulos'>WhatsApp</h1>
                  <div className="line-footer-whatsapp"></div>
                
                </div>

                <p className='estilo-texto-branco'>(31) 99876-5432</p>

                <Link to="https://www.instagram.com/" target='_blank' className='instagram_icon'><img src={instagram_logo} alt="Acessar Instragram" onMouseEnter={() => set_instagram_logo(`Instagram_Hover.png`)} onMouseLeave={() => set_instagram_logo(`Instagram.png`)}/></Link>
                <Link to="https://web.whatsapp.com/" target='_blank' className='whatsapp_icon'><img src={whatsapp_logo} alt="Acessar WhatsApp" onMouseEnter={() => set_whatsapp_logo(`Whatsapp_Hover.png`)} onMouseLeave={() => set_whatsapp_logo(`Whatsapp.png`)}/></Link>
                <Link to="https://www.google.com/intl/pt-BR/gmail/about/" target='_blank' className='gmail_icon' onMouseEnter={ () => set_gmail_logo(`Gmail_Hover.png`)} onMouseLeave={ () => set_gmail_logo(`Gmail.png`)}><img src={gmail_logo} alt="Acessar Gmail" className='gmail-img'/></Link>

              </div>

              <div className="container-dois-alinhamento">

                <div className="alinhamento_titulo_coluna_dois">

                  <h1 className='estilo-titulos'>Menu do site</h1>
                  <div className="line-footer-coluna-dois"></div>
                
                </div>

                <ul>
                  <li><Link className='estilo-texto-link'>Sobre nós</Link></li>
                  <li><Link to='/blog' className='estilo-texto-link'>Blog</Link></li>
                  <li><Link className='estilo-texto-link'>Agendamentos</Link></li>
                  <li><Link className='estilo-texto-link'>Convênios</Link></li>
                  <li><Link className='estilo-texto-link'>Equipe médica</Link></li>
                </ul>

                <p><Link to='' className='estilo-texto-azul-link'>Termos de uso</Link></p>
                <p><Link to='/politicaPrivacidade' className='estilo-texto-azul-link'>Politica de privacidade</Link></p>

              </div>

              <div className="container-tres-alinhamento">

                <div className="alinhamento_titulo_coluna_tres">

                  <h1 className="estilo-titulos">Endereço</h1>
                  <div className="line-footer-coluna-tres"></div>
                
                </div>

                <p className='estilo-texto-branco'><strong>OncoMed - Clínica Oncológica</strong>
                  <br /> Rua das Palmeiras, 789
                  <br /> Bairro Coqueiros
                  <br /> Florianópolis, SC, 88060-123</p>

                <p className='estilo-texto-azul'><strong>Aviso:</strong> As informações da clínica OncoMed <br />
                  são fictícias e para fins de exemplo.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Footer
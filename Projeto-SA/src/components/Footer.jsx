import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='footer-container'>

          <div className="alinhamentoLogo-mascote">
            <img src="Logo_Footer.svg" alt="Logo Verde" className='Logo' />

            <img src="Mascote.svg" alt="Mascote OncoMed" className='mascote' />
          </div>

          <div className="container-um-alinhamento">
            <div className="alinhamento-containers">

              <div className="container-um-alinhamento">

                <h1 className='estilo-titulos'>Contatos</h1>
                <div className="line"></div>

                <p className='estilo-texto-branco'>
                  (31) 99876-5432
                  <br />  OncoMed@gmail.com
                </p>

                <h1 className='estilo-titulos'>WhatsApp</h1>
                <div className="line"></div>

                <p className='estilo-texto-branco'>(31) 99876-5432</p>

                <a href="https://web.whatsapp.com/" target='_blank'><img src="WhatsApp.svg" alt="Acessar WhatsApp" /></a>
                <a href="https://www.google.com/intl/pt-BR/gmail/about/" target='_blank'><img src="Gmail Logo.svg" alt="Acessar Gmail" /></a>
                <a href="https://www.instagram.com/" target='_blank'><img src="Instagram.svg" alt="Acessar Instragram" /></a>

              </div>

              <div className="container-dois-alinhamento">

                <h1 className='estilo-titulos'>Menu do site</h1>
                <div className="line"></div>

                <ul>
                  <li><Link className='estilo-texto-link'>Sobre nós</Link></li>
                  <li><Link to='/blog' className='estilo-texto-link'>Blog</Link></li>
                  <li><Link className='estilo-texto-link'>Agendamentos</Link></li>
                  <li><Link className='estilo-texto-link'>Convênios</Link></li>
                  <li><Link className='estilo-texto-link'>Equipe médica</Link></li>
                </ul>

                <p><Link to='' className='estilo-texto-azul-link'>Termos de uso</Link></p>
                <p><Link to='' className='estilo-texto-azul-link'>Politica de privacidade</Link></p>

              </div>

              <div className="container-tres-alinhamento">

                <h1 className="estilo-titulos">Endereço</h1>
                <div className="line"></div>

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
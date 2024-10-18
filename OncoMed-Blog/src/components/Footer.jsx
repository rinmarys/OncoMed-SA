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

<<<<<<< HEAD
                <p className='estilo-texto-branco'>(31) 99876-5432</p>
=======
          <ul>
            <li><Link>Sobre nós</Link></li>
            <li><Link to='/'>Blog</Link></li>
            <li><Link>Agendamentos</Link></li>
            <li><Link>Convênios</Link></li>
            <li><Link>Equipe médica</Link></li>
          </ul>
>>>>>>> 4f7f2e5ece2f5c8ad0cbb094d645bd9c100f5045

                <a href="https://web.whatsapp.com/" target='_blank'><img src="WhatsApp.svg" alt="Acessar WhatsApp" /></a>
                <a href="https://www.google.com/intl/pt-BR/gmail/about/" target='_blank'><img src="Gmail Logo.svg" alt="Acessar Gmail" /></a>
                <a href="https://www.instagram.com/" target='_blank'><img src="Instagram.svg" alt="Acessar Instragram" /></a>

              </div>

              <div className="container-dois-alinhamento">

                <h1 className='estilo-titulos'>Menu do site</h1>
                <div className="line"></div>

                <ul className='estilo-texto-link'>
                  <li><link rel="stylesheet" href="./Sobre_nós" />Sobre nós</li>
                  <li><link rel="stylesheet" href="./BlogInicio_Paciente" />Blog</li>
                  <li><link rel="stylesheet" href="./Agendamentos" />Agendamentos</li>
                  <li><link rel="stylesheet" href="./Convenios" />Convênios</li>
                  <li><link rel="stylesheet" href="./EquipeMedica" />Equipe médica</li>
                </ul>

                <p className='estilo-texto-azul-link'><link rel="stylesheet" href="" />Termos de uso</p>
                <p className='estilo-texto-azul-link'><link rel="stylesheet" href="" />Política de privacidade</p>

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
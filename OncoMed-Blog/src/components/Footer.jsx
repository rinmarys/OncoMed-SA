import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className='footer-container'>

        <div className="container-um-alinhamento">
          <img src="Logo_Footer.svg" alt="Logo Verde" />

          <h1 className='estilo-titulos'>Contatos</h1>
          <div className="line"></div>

          <p className='estilo-texto-branco'>
            (31) 99876-5432
            OncoMed@gmail.com
          </p>

          <h1 className='estilo-titulos'>WhatsApp</h1>
          <div className="line"></div>

          <p className='estilo-texto-branco'>(31) 99876-5432</p>

          <a href="https://web.whatsapp.com/" target='_blank'><img src="WhatsApp.svg" alt="Acessar WhatsApp" /></a>
          <a href="https://www.google.com/intl/pt-BR/gmail/about/" target='_blank'><img src="Gmail Logo.svg" alt="Acessar Gmail" /></a>
          <a href="https://www.instagram.com/" target='_blank'><img src="Instagram.svg" alt="Acessar Instragram" /></a>
        </div>

        <div className="container-dois-alinhamento">
          <h1 className='estilo-titulos'>Menú do site</h1>
          <div className="line"></div>

          <ul className='estilo-texto-link'>
            <li><link rel="stylesheet" href="./Sobre_nós" />Sobre nós</li>
            <li><link rel="stylesheet" href="./BlogInicio_Paciente" />Blog</li>
            <li><link rel="stylesheet" href="./Agendamentos" />Agendamentos</li>
            <li><link rel="stylesheet" href="./Convenios" />Convênios</li>
          </ul>

          <p className='estilo-texto-azul'><link rel="stylesheet" href="" />Termos de uso</p>
          <p className='estilo-texto-azul'><link rel="stylesheet" href="" />Política de privacidade</p>
        </div>

        <div className="container-tres-alinhamento">
          <h1 className="estilo-titulos">Endereço</h1>
          <div className="line"></div>

          <p className='estilo-texto-branco'><strong>OncoMed - Clínica Oncológica</strong>
            <br /> Rua das Palmeiras, 789
            <br /> Bairro Coqueiros
            <br /> Florianópolis, SC, 88060-123</p>

            <p className='estilo-texto-azul'><strong>Aviso:</strong> As informações da clínica OncoMed são fictícias e para fins de exemplo.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './MedicosCadastrados.css'
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin'

function MedicosCadastrados() {
  return (
    <div>

      <div className="alinhamento-hamburger-perfilMedico">
        {/* mudar isso dps */}
        <HamburgerMenuAdmin />
      </div>

      <h1 className='titulo-medicoscadastrados'>MÉDICOS CADASTRADOS</h1>
      <div className="faixaVerdeMedicosCadastrados"></div>

      <div className="alihamento-cards-medicosCadastrados">
        <div className='ficha_do_medico'>
          <div className="alinhamento_nome-imagem-medicoscadastrados">
            <img src="Imagem de Perfil Masculino (Paciente).svg" alt="" className='foto-do-perfil-medico' />
            <div className="alinhamento-nome-email-medicoscadastrados">
              <p className='nome_medico_cadastrado'>José vinicius souza oliveira</p>
              <p className='email_medico_cadastrado'>josesouzaoliveiravinicus@gmail.com</p>
            </div>
          </div>
          <p className='especialidade_medico_cadastrado'>CARDIOLOGIA</p>
          <div className="alinhamento-numero-crm-medicocadastrado">
            <p className='numero_medico_cadastrado'>+55 (48) 996992276</p>
            <p className='crm_medico_cadastrado'>123456/SP</p>
          </div>
        </div>

        <div className='ficha_do_medico'>
          <div className="alinhamento_nome-imagem-medicoscadastrados">
            <img src="Imagem de Perfil Masculino (Paciente).svg" alt="" className='foto-do-perfil-medico' />
            <div className="alinhamento-nome-email-medicoscadastrados">
              <p className='nome_medico_cadastrado'>José vinicius souza oliveira</p>
              <p className='email_medico_cadastrado'>josesouzaoliveiravinicus@gmail.com</p>
            </div>
          </div>
          <p className='especialidade_medico_cadastrado'>CARDIOLOGIA</p>
          <div className="alinhamento-numero-crm-medicocadastrado">
            <p className='numero_medico_cadastrado'>+55 (48) 996992276</p>
            <p className='crm_medico_cadastrado'>123456/SP</p>
          </div>
        </div>
        
      </div>
{/* arrumar isso aqui */}
      <div className='ficha_do_medico'>
          <div className="alinhamento_nome-imagem-medicoscadastrados">
            <img src="Imagem de Perfil Masculino (Paciente).svg" alt="" className='foto-do-perfil-medico' />
            <div className="alinhamento-nome-email-medicoscadastrados">
              <p className='nome_medico_cadastrado'>José vinicius souza oliveira</p>
              <p className='email_medico_cadastrado'>josesouzaoliveiravinicus@gmail.com</p>
            </div>
          </div>
          <p className='especialidade_medico_cadastrado'>CARDIOLOGIA</p>
          <div className="alinhamento-numero-crm-medicocadastrado">
            <p className='numero_medico_cadastrado'>+55 (48) 996992276</p>
            <p className='crm_medico_cadastrado'>123456/SP</p>
          </div>
        </div>

    

    </div>
  )
}

export default MedicosCadastrados

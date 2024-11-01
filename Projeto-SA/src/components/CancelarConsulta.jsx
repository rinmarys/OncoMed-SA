import React from 'react'
import './CancelarConsulta.css'

function CancelarConsulta({ onClose }) {
  return (
    <div className='pop-up-cancelar-consulta'>
      
      <h1 className='cancelar-consulta-titulo'>CANCELAR CONSULTA</h1>

<div className="alinhar-imagem-telaCancelarConsulta">
      <div className="inputs-cancelar-div">
        <div className="input-cancelar-consulta">
          <label htmlFor="">Confirme seu CPF</label>
          <input placeholder='*** *** ***-**' type="text" />
        </div>

        <div className="input-cancelar-consulta">
          <label htmlFor="">Confirme seu Email</label>
          <input placeholder='seuemail@gmail.com' type="text" />
        </div>

        <div className="input-cancelar-consulta">
          <label htmlFor="">Confirme sua Senha</label>
          <input placeholder='suasenha123' type="text" />
        </div>

<div className='botoes-telaCancelarConsulta'>
        <button className='cancelar-consulta-botao-telaCancelarConsulta'>CANCELAR CONSULTA</button>
        <button className='sair-botao-telaCancelarConsulta' onClick={onClose} >SAIR</button>
        </div>
      </div>
      </div>

      <img className='imagem-cancelar-consulta' src="bonequinho-cancela.svg" alt="" />

    </div>

  )
}

export default CancelarConsulta

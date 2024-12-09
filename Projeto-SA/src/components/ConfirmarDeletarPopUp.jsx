import React from 'react';
import './ConfirmarDeletarPopUp.css';

function ConfirmarDeletarPopUp({
  show, onConfirmar, onCancelar, titulo
}){
  if (!show) return null


  return (
    <div className='poUp-container'>
        <div className='popUp-deletar'>
          <h3>{titulo}</h3>
          <img src='/public/img_deletar_conta.png'></img>
          <div className='alinhamentoButtons'>
           <button className='confirmarDeletar' onClick={onConfirmar}>SIM</button>
           <button className='naoDeletar' onClick={onCancelar}>NÃO</button>
          </div>
        </div>
    </div>
  )
  }


export default ConfirmarDeletarPopUp
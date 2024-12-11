import React from 'react';
import './ConfirmarContaExcluidaPopUp.css';

function ConfimarContaExcluidaPopUp({
    mensagem, onClose, show }){
     if(!show) return null
  return (
    <div className='PopUpContaExcluida'>
      <div className='PopUp-containerContaExcluida'>
      <h3>{mensagem}</h3>
      <button className='container-X' onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default ConfimarContaExcluidaPopUp

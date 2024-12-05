import React from 'react';
import './ConfirmarDeletarPopUp.css';

function ConfirmarDeletarPopUp() {
const popUp= ({titulo, children, onClose, show}) => {
if(!show) return null

  return (
    <div className='poUp-container'>
        <div className='popUp-deletar'>
          <h3>{titulo}</h3>
          <p>{mensagem}</p>
          <button className='confirmarDeletar' onClick={onConfirmar}>SIM</button>
          <button className='naoDeletar' onClick={onCancelar}>NÃO</button>
        </div>
    </div>
  )
}
}

export default ConfirmarDeletarPopUp
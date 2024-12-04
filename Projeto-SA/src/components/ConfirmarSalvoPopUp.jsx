import React from 'react'

function ConfirmarSalvoPopUp() {
const popUpSalvo =({mensagem, onClose, show}) => {
    if(!show) return null
}
  return (
    <div className='popUpSalvoComSucesso'>
        <div className='popUp-container-salvo'>
        <h3>Salvo com sucesso!</h3>
        <p>{mensagem}</p>
        <button className='container-OK' onClick={onClose}>OK</button>
        </div>
    </div>
  )
}

export default ConfirmarSalvoPopUp
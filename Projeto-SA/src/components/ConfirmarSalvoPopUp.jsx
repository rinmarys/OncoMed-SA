import React from 'react'

function ConfirmarSalvoPopUp ({
 mensagem, onClose, show 
}){
  if(!show) return null

  return (
    <div className='popUpSalvoComSucesso'>
        <div className='popUp-container-salvo'>
        <h3>{mensagem}</h3>
        <button className='container-OK' onClick={onClose}>OK</button>
        </div>
    </div>
  )
}

export default ConfirmarSalvoPopUp
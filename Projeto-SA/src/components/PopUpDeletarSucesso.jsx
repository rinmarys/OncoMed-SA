import React, { useContext, useEffect } from 'react'
import './PopUpDeletarSucesso.css'
import { GlobalContext } from '../contexts/GlobalContext';

function PopUpDeletarSucesso() {

    const { showDeletarSucessoPopup, setShowDeletarSucessoPopup } = useContext(GlobalContext);

    useEffect(() => {
        setTimeout(() => {

            setShowDeletarSucessoPopup(false)

        }, 300000000);
    })

    return (
        <div>
            <div className="popup-deletarSucesso">
                <div className="popup-deletarSucesso-conteudo">
                    <div className="titulo-popup-deletarSucesso">
                        <div className="alinhamento-button-deletarSucesso">
                            <h3>Perfil deletado com sucesso!</h3>
                            <button type="button" onClick={() => setShowDeletarSucessoPopup(false)} className='popUp-button-deletarSucesso'>X</button>
                        </div>
                        <img src="jade-feliz.png" alt="jade feliz" className='jade-feliz-popup-deletarSucesso' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpDeletarSucesso

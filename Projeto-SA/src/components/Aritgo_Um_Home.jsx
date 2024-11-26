import React, { useState } from 'react'
import './Artigo_Um_Home.css'
function Aritgo_Um_Home() {
    
    // 660px

  return (
    <div className='tamanho_do_container_artigo_um_home'>
      
    <div className="container_artigo_um_home">

        <div className="container_artigo_um_home_alinhamento_conteudo">

            <div className="titulo_artigo_um">

                <h3>Medicina alternativa ou medicina convencional?</h3>
                <p>por Doutor Mauricio Campos</p>

            </div>

            <div className="imagem_artigo_um">

                <img src="Doctor.svg" alt="Artigo Um Imagem" />

            </div>

        </div>

        <div className="paragrafo_do_artigo">

            <p>O artigo explora como unir medicina alternativa e convencional pode ajudar pacientes oncológicos.</p>

        </div>

    </div>

    </div>
  )
}

export default Aritgo_Um_Home

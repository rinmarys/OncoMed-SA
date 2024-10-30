import React, { useEffect } from 'react'
import { useState } from 'react';
function Carrossel_Comentario() {

    let array_de_comentarios = [`"O aplicativo mudou minha vida. Agora eu me sinto mais no controle." 
    — Maria, 42 anos`, `b`, `c`];
    const [posicao, set_posicao] = useState(0);

    const avancar_carrossel = (posicao_anterior) =>{

      set_posicao(posicao_anterior += 1) % array_de_comentarios.length;
      console.log(posicao);
    };
    
  return (
    <div>
      
        <div className="o_que_dizem_nossos_pacientes_carrossel">

            <button ><img src="Seta_carrossel_esquerda.svg" alt="Seta esquerda.svg" /></button>

            <div className="o_que_dizem_nossos_pacientes_conteudo_do_carrossel">

            <p>{array_de_comentarios[posicao]}</p>

            </div>

            <button onClick={avancar_carrossel}><img src="Seta_carrossel_direita.svg" alt="Seta direita.svg" /></button>

        </div>

    </div>
  )
}

export default Carrossel_Comentario

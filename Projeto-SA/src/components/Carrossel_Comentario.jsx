import React, { useEffect } from 'react'
import { useState } from 'react';
function Carrossel_Comentario() {

    let array_de_comentarios = [`"O aplicativo mudou minha vida. Agora eu me sinto mais no controle." 
    — Maria, 42 anos`, `b`, `c`];
    
    const [posicao, set_posicao] = useState(0);

  return (
    <div>
      
        <div className="o_que_dizem_nossos_pacientes_carrossel">

            <button onClick={() => posicao < 0 ? set_posicao(array_de_comentarios.length - 1) : set_posicao(posicao - 1)}><img src="Seta_carrossel_esquerda.svg" alt="Seta esquerda.svg" /></button>

            <div className="o_que_dizem_nossos_pacientes_conteudo_do_carrossel">

            <p className='animar_entrada_dos_comentarios'>{array_de_comentarios[posicao]}</p>

            </div>

            <button onClick={() => posicao == array_de_comentarios.length ? set_posicao(0) : set_posicao(posicao + 1)}><img src="Seta_carrossel_direita.svg" alt="Seta direita.svg" /></button>

        </div>

    </div>
  )
}

export default Carrossel_Comentario

import React, { useEffect } from 'react'
import { useState } from 'react';
function Carrossel_Comentario() {

    let array_de_comentarios = [`a`, `b`, `c`];
    let posicao = 0;
    const [comentario_a_exibir, set_comentario_a_exibir] = useState(array_de_comentarios[posicao]);


    function avancar_carrossel(){

        posicao += 1;

        set_comentario_a_exibir(array_de_comentarios[posicao]);

    };
    
  return (
    <div>
      
        <div className="o_que_dizem_nossos_pacientes_carrossel">

            <button ><img src="Seta_carrossel_esquerda.svg" alt="Seta esquerda.svg" /></button>

            <div className="o_que_dizem_nossos_pacientes_conteudo_do_carrossel">

            <p>{comentario_a_exibir}</p>

            </div>

            <button onClick={avancar_carrossel}><img src="Seta_carrossel_direita.svg" alt="Seta direita.svg" /></button>

        </div>

    </div>
  )
}

export default Carrossel_Comentario

import React, { useEffect } from 'react'
import { useState } from 'react';
function Carrossel_Comentario() {

    
    let array_de_comentarios = [`1 slide`, `2 slide`, `3 slide`];
    let posicao = 0;

    const [exibir_comentario_carrossel, set_exibir_comentario_carrossel]= useState(array_de_comentarios[posicao]);

    function avancar_comentario(){
        
        posicao += 1

        console.log(posicao)

        if(posicao >= array_de_comentarios.length){

            posicao = 0;
        };

        set_exibir_comentario_carrossel(array_de_comentarios[posicao]);

    };


  return (
    <div>
      
        <div className="o_que_dizem_nossos_pacientes_carrossel">

            <button ><img src="Seta_carrossel_esquerda.svg" alt="Seta esquerda.svg" /></button>

            <div className="o_que_dizem_nossos_pacientes_conteudo_do_carrossel">

            <p>{exibir_comentario_carrossel}</p>

            </div>

            <button onClick={avancar_comentario}><img src="Seta_carrossel_direita.svg" alt="Seta direita.svg" /></button>

        </div>

    </div>
  )
}

export default Carrossel_Comentario

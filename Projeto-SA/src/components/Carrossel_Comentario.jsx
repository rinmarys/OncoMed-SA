import React, { useEffect } from 'react'
import { useState } from 'react';
function Carrossel_Comentario() {

    
    let array_comentarios = ['1 slide', '2 slide', '3 slide'];
    let position = 0;

    const [contador, set_contador] = useState(0);
    const [exibir_comentario_carrossel, set_exibir_comentario_carrossel] = useState(array_comentarios[position]);
    let voltar_para_o_comeco = false;

    let tamanho_do_array = array_comentarios.length;
    function comentario_a_frente(){

        
        if(contador >= tamanho_do_array){

            position = 0;
        } else {

            set_exibir_comentario_carrossel(array_comentarios[contador]);
        }
    };

    function comentario_atras(){


    };

  return (
    <div>
      
        <div className="o_que_dizem_nossos_pacientes_carrossel">

            <button onClick={comentario_atras}><img src="Seta_carrossel_esquerda.svg" alt="Seta esquerda.svg" /></button>

            <div className="o_que_dizem_nossos_pacientes_conteudo_do_carrossel">

            <p>{exibir_comentario_carrossel}</p>

            </div>

            <button onClick={comentario_a_frente}><img src="Seta_carrossel_direita.svg" alt="Seta direita.svg" /></button>

        </div>

    </div>
  )
}

export default Carrossel_Comentario

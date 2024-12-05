import React from 'react'
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import './Pop_up_de_login.css'

function Pop_up_de_login() {

    const {pop_up_de_login, set_pop_up_de_login} = useContext(GlobalContext);

    useEffect(() =>{

        if(pop_up_de_login){

            setTimeout(() => {
                
                set_pop_up_de_login(false);
            }, 3000);
        };
        }, []);

    return (
    <div className='Pop_up_de_login_container'>
      
    <div className='Pop_up_de_login_container_alinhamento_conteudo'>
      <div>

      <p>Favor fazer o Login</p>
      </div>
      <button onClick={() => set_pop_up_de_login(false)}>X</button>
    </div>

  </div>
  )
}

export default Pop_up_de_login
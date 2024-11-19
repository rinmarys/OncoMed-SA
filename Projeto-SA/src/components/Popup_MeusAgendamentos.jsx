
import './Popup_MeusAgendamentos.css'
import CancelarConsulta from '../components/CancelarConsulta';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { useEffect } from 'react';

function Popup_MeusAgendamentos() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
      setIsOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsOpen(false);
    };
    
        const [pop_up_agendamento, set_pop_up_agendamento] = useState(false);
        const {lista_de_pacientes, array_consultas_do_dia} = useContext(GlobalContext);
    
    useEffect(() => {

      
      for(let i = 0; i < lista_de_pacientes.length; i++){
  
       if(lista_de_pacientes[i].minhas_consulstas == Date.now() ){
        
        [...array_consultas_do_dia, lista_de_pacientes[i]];

      };
    };
    }, [array_consultas_do_dia]);
    

  return (
    <div className="lifehak">
    <div className='tudo-popup-meusagendamentos'>
      <h1 className='titulo-meusagendamentos-h1' >AGENDAMENTOS DO DIA</h1>

      <div className="cada-agendamento-meusagendamentos">
        <div className="todas-infos-meusagendamentos">
          <h1 className='medico-meusagendamentos' >Dr. Jossian Castanho</h1>

          <div className="tipo-horario-meusagendamentos">
            <h2 className='tipo-consulta-meusagendamentos'>MAMOGRAFIA</h2>
            <h2 className='horario-meusagendamentos'>12:45</h2>
          </div>

          <h3 className='titulo-observacao-meusagendamentos'>SUA OBSERVAÇÃO</h3>
          <h3 className='observacao-meusagendamentos'>isso aquilo aqule outro, paaa amo nuggets</h3>

          <button onClick={handleOpenPopup} className='cancelar-meusagendamentos-popup'>CANCELAR</button>
        </div>
      </div>

      {}

      <div className="cada-agendamento-meusagendamentos">
        <div className="todas-infos-meusagendamentos">
          <h1 className='medico-meusagendamentos' >Dr. Jossian Castanho</h1>

          <div className="tipo-horario-meusagendamentos">
            <h2 className='tipo-consulta-meusagendamentos'>MAMOGRAFIA</h2>
            <h2 className='horario-meusagendamentos'>12:45</h2>
          </div>

          <h3 className='titulo-observacao-meusagendamentos'>SUA OBSERVAÇÃO</h3>
          <h3 className='observacao-meusagendamentos'>isso aquilo aqule outro, paaa amo nuggets</h3>

          <button  onClick={handleOpenPopup} className='cancelar-meusagendamentos-popup'>CANCELAR</button>
        </div>
      </div>

    </div>

    <div >
     {isOpen && <CancelarConsulta onClose={handleClosePopup} />}
     </div>
    </div>
  )
}

export default Popup_MeusAgendamentos

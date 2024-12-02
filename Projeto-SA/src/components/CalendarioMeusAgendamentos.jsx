// import React, { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import axios from "axios";

// import './CalendarioMeusAgendamentos.css'
// import Popup_MeusAgendamentos from './Popup_MeusAgendamentos';

// function CalendarioMeusAgendamentos() {
//   const [selectedDate, setSelectedDate] = useState(false)
//   const [eventDetails, setEventDetails] = useState(null)
//   const [ agendamentosDoDia,  setAgendamentosDoDia] = useState([])

//       // Busca las consultas que fueron marcadas
//       const fetch_marcarConsulta = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/marcarConsulta`)
//             console.log(response.data);
//             setAgendamentosDoDia(response.data)
//         } catch (error) {
//             console.error('Erro ao buscar cliente por ID:', error)
//         }
//     };

// const handleDateClick = (arg) => {
//   setSelectedDate(arg.dateStr);

    
 

//     if (arg.dateStr === agendamentosDoDia.data_agendamento) {
//       alert('tienes un agendamiento')
//     } else {
//       alert('nada')
//     }
//   }

//   useEffect(() => {
//     fetch_marcarConsulta()
// }, []);
  

//   return (
//     <div>
//       <h1 className='titulo-agendamento'>Calendário de Agendamentos</h1>

//       <div className="calendario-consulta">
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           dateClick={handleDateClick}
//         />
//       </div>

//       <div className="evento-info">
//         {selectedDate && <Popup_MeusAgendamentos />}

//         {eventDetails}
//       </div>

//     </div>
//   );
// }

// export default CalendarioMeusAgendamentos;
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from "axios";

import './CalendarioMeusAgendamentos.css';
import Popup_MeusAgendamentos from './Popup_MeusAgendamentos';

function CalendarioMeusAgendamentos({ onDateValidation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [agendamentosDoDia, setAgendamentosDoDia] = useState([]);

  // Busca os agendamentos
  const fetchAgendamentos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/marcarConsulta`);
      console.log(response.data);
      setAgendamentosDoDia(response.data);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
    }
  };

  const handleDateClick = (arg) => {
    const selectedDateNormalized = new Date(arg.dateStr).toISOString().split('T')[0];
    setSelectedDate(selectedDateNormalized);

    // Envia a validação para outra tela (se necessário)
    if (onDateValidation) {
      onDateValidation(selectedDateNormalized);
    }
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  return (
    <div>
      <h1 className='titulo-agendamento'>Calendário de Agendamentos</h1>
      <div className="calendario-consulta">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
        />
      </div>
      {selectedDate && <Popup_MeusAgendamentos selectedDate={selectedDate} agendamentosDoDia={agendamentosDoDia} />}
    </div>
  );
}

export default CalendarioMeusAgendamentos;

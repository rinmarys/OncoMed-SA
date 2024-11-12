import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import './CalendarioMeusAgendamentos.css'
import Popup_MeusAgendamentos from './Popup_MeusAgendamentos';

function CalendarioMeusAgendamentos() {
  const [selectedDate, setSelectedDate] = useState(false)
  const [eventDetails, setEventDetails] = useState(null)

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr)

    if (arg.dateStr === '2024-11-14') {
      setEventDetails('tienes una reunion')
    } else {
      setEventDetails('nada')
    }
  }

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

      <div className="evento-info">
        {selectedDate && <Popup_MeusAgendamentos />}
      </div>

    </div>
  );
}

export default CalendarioMeusAgendamentos;


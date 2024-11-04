// src/Scheduler.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Scheduler.css';

function Scheduler() {
  const [events, setEvents] = useState([
    { title: 'Reunião', date: '2024-10-02' },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Novo evento:');
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }]);
    }
  };

  return (
    <div>
      <h1 className='titulo-agendamento' >Calendário de Agendamentos</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default Scheduler;

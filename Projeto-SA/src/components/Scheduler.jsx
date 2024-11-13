// src/Scheduler.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Scheduler.css';

function Scheduler() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Manejar el clic en la fecha del calendario
  const handleDateClick = (info) => {
    // Actualizamos el estado con la fecha seleccionada
    setSelectedDate(info.dateStr);

    // Remover la clase CSS de la fecha previamente seleccionada
    const previouslySelected = document.querySelector('.fc-selected-day');
    if (previouslySelected) {
      previouslySelected.classList.remove('fc-selected-day');
    }

    // Añadir la clase CSS a la fecha clickeada
    info.dayEl.classList.add('fc-selected-day');
  };

  return (
    <div className='calendario-marcarConsulta'>
      <h1 className="titulo-agendamento">Calendário de Agendamentos</h1>

      {/* Calendario con FullCalendar */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}  // Llamamos a handleDateClick cuando se hace clic en una fecha
      />

      {/* Mostrar la fecha seleccionada debajo del calendario */}
      {selectedDate && (
        <div className="fecha-seleccionada">
          <p>Fecha seleccionada: {selectedDate}</p>
        </div>
      )}
    </div>
  );
}

export default Scheduler;

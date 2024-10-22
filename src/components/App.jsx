import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'; // Adicione seu CSS aqui, se necessário

function App() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="App">

      <div>

      <Calendar
        onChange={handleDateChange}
        value={date}
        />

        </div>

      <div>
        <p>Data selecionada: {date.toDateString()}</p>
      </div>
    </div>
  );
}

export default App;

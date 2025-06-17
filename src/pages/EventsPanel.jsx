import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import '../styles/EventsPanel.css';

const EventsPanel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/eventos')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error('Error al cargar eventos:', err));
  }, []);

  return (
    <div className="events-container">
      <h2>Gestión de Eventos</h2>
      <div className="events-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPanel;

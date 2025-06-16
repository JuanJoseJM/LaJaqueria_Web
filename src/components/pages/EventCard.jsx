import React from 'react';
import '../../styles/EventsPanel.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.nombre}</h3>
      <p><strong>Fecha:</strong> {event.fecha}</p>
      <p>{event.descripcion}</p>
    </div>
  );
};

export default EventCard;
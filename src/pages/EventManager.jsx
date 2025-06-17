import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EventManager.css";

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ nombre: "", fecha: "", descripcion: "" });

  useEffect(() => {
    axios.get("http://localhost:8080/api/eventos")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error al cargar eventos:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/eventos", form)
      .then((res) => {
        setEvents([...events, res.data]);
        setForm({ nombre: "", fecha: "", descripcion: "" });
      })
      .catch((err) => console.error("Error al crear evento:", err));
  };

  return (
    <div className="event-manager">
      <h2>Gestión de Eventos</h2>

      <form onSubmit={handleSubmit} className="event-form">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre del evento" required />
        <input name="fecha" value={form.fecha} onChange={handleChange} type="date" required />
        <textarea name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" />
        <button type="submit">Crear evento</button>
      </form>

      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id_evento}>
            <strong>{event.nombre}</strong> - {event.fecha}<br />
            {event.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
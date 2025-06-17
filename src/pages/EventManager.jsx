import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig"; // ✅ Cliente con token incluido
import "../styles/EventManager.css";

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    descripcion: ""
  });

  useEffect(() => {
    api.get("/api/eventos") // ✅ token se incluye automáticamente
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error al cargar eventos:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/api/eventos", form) // ✅ token aquí también
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
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre del evento"
          required
        />
        <input
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          type="date"
          required
        />
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <button type="submit">Crear evento</button>
      </form>

      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id_evento}>
            <strong>{event.nombre}</strong> - {event.fecha}
            <br />
            {event.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../styles/EventManager.css";

/**
 * Componente para gestión de eventos (crear y listar).
 * Incluye exportación de la lista de eventos a PDF.
 */
const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    descripcion: ""
  });

  useEffect(() => {
    api.get("/api/eventos")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error al cargar eventos:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/api/eventos", form)
      .then((res) => {
        setEvents([...events, res.data]);
        setForm({ nombre: "", fecha: "", descripcion: "" });
      })
      .catch((err) => console.error("Error al crear evento:", err));
  };

  /**
   * Exporta la lista de eventos a PDF.
   */
  const exportarPDF = () => {
    const doc = new jsPDF();
    doc.text("Listado de Eventos", 14, 10);

    const tabla = events.map(event => [
      event.nombre,
      event.fecha,
      event.descripcion || ""
    ]);

    doc.autoTable({
      head: [["Nombre", "Fecha", "Descripción"]],
      body: tabla,
      startY: 20
    });

    doc.save("eventos.pdf");
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
          type="date"
          value={form.fecha}
          onChange={handleChange}
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

      <button onClick={exportarPDF} style={{ marginTop: "1rem" }}>
        Exportar PDF
      </button>

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
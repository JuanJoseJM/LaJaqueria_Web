import React, { useState } from 'react';
import '../styles/CreateEvent.css';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoEvento = { nombre, fecha, descripcion };

    try {
      const response = await fetch('http://localhost:8080/api/eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoEvento),
      });

      if (response.ok) {
        alert('Evento creado con éxito');
        navigate('/eventos');
      } else {
        alert('Error al crear evento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la conexión');
    }
  };

  return (
    <div className="create-event-container">
      <h2>Crear Nuevo Evento</h2>
      <form onSubmit={handleSubmit} className="create-event-form">
        <input
          type="text"
          placeholder="Nombre del evento"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CreateEvent;

import React, { useState } from 'react';
import axios from 'axios';

const DomoticaControl = () => {
  const [estado, setEstado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const API_URL = 'http://localhost:8080/api/domotica'; // Cambia si usas Azure o producción

  const manejarControl = async (accion) => {
    try {
      const response = await axios.post(`${API_URL}/${accion}`);
      setEstado(accion === 'encender' ? 'Encendido' : 'Apagado');
      setMensaje(response.data.message || 'Acción ejecutada correctamente.');
    } catch (error) {
      console.error('Error al enviar el comando:', error);
      setMensaje('Error al contactar con el sistema domótico.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Control Domótico</h2>
      <p>Estado actual: <strong>{estado || 'Desconocido'}</strong></p>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => manejarControl('encender')}>Encender dispositivo</button>
        <button onClick={() => manejarControl('apagar')} style={{ marginLeft: '1rem' }}>Apagar dispositivo</button>
      </div>
      {mensaje && <p style={{ marginTop: '1rem', color: 'green' }}>{mensaje}</p>}
    </div>
  );
};

export default DomoticaControl;

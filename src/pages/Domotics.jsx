import React, { useState } from 'react';
import api from '../api/axiosConfig';
import '../styles/Domotics.css';

/**
 * Componente para controlar dispositivos domóticos (luces, puertas, etc.).
 * Envía comandos al backend mediante peticiones POST autenticadas con token.
 */
const Domotics = () => {
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState('');
  const [error, setError] = useState(null);

  /**
   * Envía un comando domótico al backend.
   * @param {string} accion - Acción a ejecutar (ej: "ENCENDER_LUZ").
   */
  const enviarComando = async (accion) => {
    try {
      const response = await api.post('/domotica/comando', {
        mensaje: accion
      });
      setEstado(response.data.mensaje);
      setError(null);
    } catch (err) {
      setError('No se pudo enviar el comando');
      console.error(err);
    }
  };

  return (
    <div className="domotics-container">
      <h2>Control Domótico</h2>

      <div className="botones-domotica">
        <button onClick={() => enviarComando('ENCENDER_LUZ')}>Encender Luz</button>
        <button onClick={() => enviarComando('APAGAR_LUZ')}>Apagar Luz</button>
        <button onClick={() => enviarComando('ABRIR_PUERTA')}>Abrir Puerta</button>
        <button onClick={() => enviarComando('CERRAR_PUERTA')}>Cerrar Puerta</button>
      </div>

      {estado && <p className="estado-ok">Estado: {estado}</p>}
      {error && <p className="estado-error">{error}</p>}
    </div>
  );
};

export default Domotics;
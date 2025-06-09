import React, { useState } from "react";
import axios from "../api/axiosConfig";

const DomoticaControl = () => {
  const [estado, setEstado] = useState("");

  const manejarDispositivo = async (accion) => {
    try {
      const respuesta = await axios.post("/api/domotica/control", {
        dispositivo: "luz_sala",
        accion: accion
      });
      setEstado(respuesta.data.mensaje);
    } catch (error) {
      console.error("Error al enviar comando domótico:", error);
      setEstado("Error en la comunicación con el sistema domótico.");
    }
  };

  return (
    <div className="domotica-panel">
      <h2>Control Domótico</h2>
      <button onClick={() => manejarDispositivo("encender")}>Encender luz</button>
      <button onClick={() => manejarDispositivo("apagar")}>Apagar luz</button>
      <p>{estado}</p>
    </div>
  );
};

export default DomoticaControl;
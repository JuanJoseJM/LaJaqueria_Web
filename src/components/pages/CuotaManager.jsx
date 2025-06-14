import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/CuotaManager.css";

const CuotaManager = () => {
  const [cuotas, setCuotas] = useState([]);
  const [form, setForm] = useState({
    idSocio: "",
    fechaPago: "",
    cantidad: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/cuotas")
      .then((res) => setCuotas(res.data))
      .catch((err) => console.error("Error al cargar cuotas:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/cuotas", form)
      .then((res) => {
        setCuotas([...cuotas, res.data]);
        setForm({ idSocio: "", fechaPago: "", cantidad: "" });
      })
      .catch((err) => console.error("Error al crear cuota:", err));
  };

  return (
    <div className="cuota-manager">
      <h2>Gestión de Cuotas</h2>

      <form onSubmit={handleSubmit} className="cuota-form">
        <input
          name="idSocio"
          value={form.idSocio}
          onChange={handleChange}
          placeholder="ID del socio"
          required
        />
        <input
          type="date"
          name="fechaPago"
          value={form.fechaPago}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cantidad"
          value={form.cantidad}
          onChange={handleChange}
          placeholder="Cantidad €"
          required
        />
        <button type="submit">Registrar cuota</button>
      </form>

      <ul className="cuota-list">
        {cuotas.map((cuota, index) => (
          <li key={index}>
            Socio ID: {cuota.idSocio} | Fecha: {cuota.fechaPago} | Cantidad: €{cuota.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CuotaManager;
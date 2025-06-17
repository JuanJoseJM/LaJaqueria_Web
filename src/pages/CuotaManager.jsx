import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../styles/CuotaManager.css";

/**
 * Gestión de cuotas para administradores.
 * Incluye formulario de registro y exportación a PDF.
 */
const CuotaManager = () => {
  const [cuotas, setCuotas] = useState([]);
  const [form, setForm] = useState({
    idSocio: "",
    fechaPago: "",
    cantidad: "",
  });

  useEffect(() => {
    api.get("/api/cuotas")
      .then((res) => setCuotas(res.data))
      .catch((err) => console.error("Error al cargar cuotas:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/api/cuotas", form)
      .then((res) => {
        setCuotas([...cuotas, res.data]);
        setForm({ idSocio: "", fechaPago: "", cantidad: "" });
      })
      .catch((err) => console.error("Error al crear cuota:", err));
  };

  /**
   * Exporta la lista de cuotas como archivo PDF.
   */
  const exportarPDF = () => {
    const doc = new jsPDF();
    doc.text("Listado de Cuotas", 14, 10);

    const tabla = cuotas.map(c => [
      c.idSocio, c.fechaPago, `${c.cantidad} €`
    ]);

    doc.autoTable({
      head: [["ID Socio", "Fecha de Pago", "Cantidad"]],
      body: tabla,
      startY: 20
    });

    doc.save("cuotas.pdf");
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

      <button onClick={exportarPDF} style={{ margin: "1rem 0" }}>
        Exportar PDF
      </button>

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
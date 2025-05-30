import { useState } from "react";
import axios from "../api/axiosConfig";

export default function CrearEventoForm({ onEventoCreado }) {
    const [formData, setFormData] = useState({
        nombre: "",
        fecha: "",
        descripcion: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/eventos", formData);
            alert("Evento creado correctamente");
            setFormData({ nombre: "", fecha: "", descripcion: "" });
            onEventoCreado();
        } catch {
            alert("Error al crear evento");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Crear nuevo evento</h3>
            <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre del evento" required />
            <input name="fecha" type="date" value={formData.fecha} onChange={handleChange} required />
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
            <button type="submit">Crear evento</button>
        </form>
    );
}
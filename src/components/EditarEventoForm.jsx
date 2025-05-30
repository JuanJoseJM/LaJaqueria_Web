import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

export default function EditarEventoForm({ evento, onCancel, onUpdated }) {
    const [formData, setFormData] = useState({
        nombre: "",
        fecha: "",
        descripcion: ""
    });

    useEffect(() => {
        setFormData({
            nombre: evento.nombre,
            fecha: evento.fecha,
            descripcion: evento.descripcion
        });
    }, [evento]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/eventos/${evento.id}`, formData);
            alert("Evento actualizado");
            onUpdated();
        } catch {
            alert("Error al actualizar evento");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Editar Evento</h3>
            <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre del evento" required />
            <input name="fecha" type="date" value={formData.fecha} onChange={handleChange} required />
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
}
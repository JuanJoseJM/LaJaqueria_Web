import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

export default function EditarSocioForm({ socio, onCancel, onUpdated }) {
    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        setFormData({
            nombre: socio.nombre,
            apellidos: socio.apellidos,
            email: socio.email,
            password: ""
        });
    }, [socio]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/usuarios/${socio.id}`, formData);
            alert("Socio actualizado");
            onUpdated();
        } catch (err) {
            alert("Error al actualizar socio");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Editar Socio</h3>
            <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
            <input name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Apellidos" required />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Nueva contraseña (opcional)" />
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
}
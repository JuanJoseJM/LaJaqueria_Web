import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

export default function CrearCuotaForm({ onCuotaCreada }) {
    const [formData, setFormData] = useState({
        socioId: "",
        fecha: "",
        monto: ""
    });
    const [socios, setSocios] = useState([]);

    useEffect(() => {
        const cargarSocios = async () => {
            try {
                const res = await axios.get("/usuarios");
                setSocios(res.data);
            } catch {
                alert("Error al cargar socios");
            }
        };
        cargarSocios();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/cuotas", formData);
            alert("Cuota creada correctamente");
            setFormData({ socioId: "", fecha: "", monto: "" });
            onCuotaCreada();
        } catch {
            alert("Error al crear cuota");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Registrar nueva cuota</h3>
            <select name="socioId" value={formData.socioId} onChange={handleChange} required>
                <option value="">Seleccione un socio</option>
                {socios.map(s => (
                    <option key={s.id} value={s.id}>{s.nombre} {s.apellidos}</option>
                ))}
            </select>
            <input name="fecha" type="date" value={formData.fecha} onChange={handleChange} required />
            <input name="monto" type="number" value={formData.monto} onChange={handleChange} placeholder="Monto (€)" required />
            <button type="submit">Registrar cuota</button>
        </form>
    );
}
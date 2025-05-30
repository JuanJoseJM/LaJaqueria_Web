import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

export default function CuotasTable() {
    const [cuotas, setCuotas] = useState([]);
    const [error, setError] = useState(null);

    const cargarCuotas = async () => {
        try {
            const response = await axios.get("/cuotas");
            setCuotas(response.data);
        } catch (err) {
            setError("No se pudieron cargar las cuotas.");
        }
    };

    useEffect(() => {
        cargarCuotas();
    }, []);

    const eliminarCuota = async (id) => {
        if (!window.confirm("¿Eliminar esta cuota?")) return;
        try {
            await axios.delete(`/cuotas/${id}`);
            setCuotas(cuotas.filter(c => c.id !== id));
        } catch (err) {
            alert("Error al eliminar cuota");
        }
    };

    return (
        <div>
            <h2>Gestión de Cuotas</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Socio</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cuotas.map(cuota => (
                        <tr key={cuota.id}>
                            <td>{cuota.socioNombre}</td>
                            <td>{cuota.fecha}</td>
                            <td>{cuota.monto} €</td>
                            <td>
                                <button onClick={() => eliminarCuota(cuota.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
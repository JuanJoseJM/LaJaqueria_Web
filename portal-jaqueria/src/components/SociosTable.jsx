import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

export default function SociosTable() {
    const [socios, setSocios] = useState([]);
    const [error, setError] = useState(null);

    const cargarSocios = async () => {
        try {
            const response = await axios.get("/usuarios");
            setSocios(response.data);
        } catch (err) {
            setError("No se pudo cargar la lista de socios");
        }
    };

    useEffect(() => {
        cargarSocios();
    }, []);

    const eliminarSocio = async (id) => {
        if (!window.confirm("¿Estás seguro de eliminar este socio?")) return;
        try {
            await axios.delete(`/usuarios/${id}`);
            setSocios(socios.filter(s => s.id !== id));
        } catch (err) {
            alert("Error al eliminar socio");
        }
    };

    return (
        <div>
            <h2>Gestión de Socios</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {socios.map(socio => (
                        <tr key={socio.id}>
                            <td>{socio.nombre}</td>
                            <td>{socio.apellidos}</td>
                            <td>{socio.email}</td>
                            <td>
                                <button onClick={() => eliminarSocio(socio.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
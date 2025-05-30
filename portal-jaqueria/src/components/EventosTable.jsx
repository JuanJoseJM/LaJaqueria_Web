import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import EditarEventoForm from "./EditarEventoForm";
import DescargarAsistentesPDFButton from "./DescargarAsistentesPDFButton";

export default function EventosTable() {
    const [eventos, setEventos] = useState([]);
    const [eventoEditando, setEventoEditando] = useState(null);

    const cargarEventos = async () => {
        try {
            const res = await axios.get("/eventos");
            setEventos(res.data);
        } catch {
            alert("No se pudieron cargar los eventos");
        }
    };

    useEffect(() => {
        cargarEventos();
    }, []);

    const eliminarEvento = async (id) => {
        if (!window.confirm("¿Eliminar evento?")) return;
        try {
            await axios.delete(`/eventos/${id}`);
            setEventos(eventos.filter(e => e.id !== id));
        } catch {
            alert("Error al eliminar evento");
        }
    };

    const eventoActualizado = () => {
        setEventoEditando(null);
        cargarEventos();
    };

    return (
        <div>
            <h2>Gestión de Eventos</h2>
            {eventoEditando ? (
                <EditarEventoForm evento={eventoEditando} onCancel={() => setEventoEditando(null)} onUpdated={eventoActualizado} />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventos.map(evento => (
                            <tr key={evento.id}>
                                <td>{evento.nombre}</td>
                                <td>{evento.fecha}</td>
                                <td>{evento.descripcion}</td>
                                <td>
                                    <button onClick={() => eliminarEvento(evento.id)}>Eliminar</button>
                                    <button onClick={() => setEventoEditando(evento)}>Editar</button>
                                    <DescargarAsistentesPDFButton eventoId={evento.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
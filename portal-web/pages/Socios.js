import React, { useEffect, useState } from 'react';
import { getSocios } from '../api';  // Función para obtener los socios

function Socios() {
    const [socios, setSocios] = useState([]);

    useEffect(() => {
        async function fetchSocios() {
            try {
                const data = await getSocios();
                setSocios(data);
            } catch (err) {
                console.error('Error al cargar los socios:', err);
            }
        }
        fetchSocios();
    }, []);

    return (
        <div className="socios-container">
            <h2>Lista de Socios</h2>
            <ul>
                {socios.map(socio => (
                    <li key={socio.idSocio}>{socio.nombre} {socio.apellidos}</li>
                ))}
            </ul>
        </div>
    );
}

export default Socios;

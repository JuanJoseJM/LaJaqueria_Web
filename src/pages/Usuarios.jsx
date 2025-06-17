import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../styles/Usuarios.css';

/**
 * Vista para mostrar la lista de usuarios y exportar el informe en PDF.
 */
const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Obtiene la lista de usuarios desde el backend.
   */
  const obtenerUsuarios = async () => {
    try {
      const response = await api.get('/usuarios');
      setUsuarios(response.data);
    } catch (err) {
      setError('No se pudo obtener la lista de usuarios');
      console.error(err);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  /**
   * Exporta la lista de usuarios en un archivo PDF usando jsPDF.
   */
  const exportarPDF = () => {
    const doc = new jsPDF();
    doc.text("Listado de Usuarios", 14, 10);

    const tabla = usuarios.map(u => [
      u.nombre, u.apellidos, u.email, u.idUsuario
    ]);

    doc.autoTable({
      head: [["Nombre", "Apellidos", "Email", "ID"]],
      body: tabla,
      startY: 20
    });

    doc.save("usuarios.pdf");
  };

  return (
    <div className="usuarios-container">
      <h2>Gestión de Usuarios</h2>

      {error && <p className="error">{error}</p>}

      <button onClick={exportarPDF} style={{ marginBottom: '1rem' }}>
        Exportar PDF
      </button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.idUsuario}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.email}</td>
              <td>{usuario.idUsuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
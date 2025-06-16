import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import '../../styles/Usuarios.css';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="usuarios-container">
      <h2>Gestión de Usuarios</h2>
      {error && <p className="error">{error}</p>}
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
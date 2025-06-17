import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import "../styles/AdminNavbar.css"; // Si tienes estilos

/**
 * Barra de navegación para el administrador
 */
const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <h2>E-Management</h2>
      <ul className="nav-links">
        <li><Link to="/admin/usuarios">Usuarios</Link></li>
        <li><Link to="/admin/eventos">Eventos</Link></li>
        <li><Link to="/admin/cuotas">Cuotas</Link></li>
        <li><Link to="/admin/domotics">Domótica</Link></li>
      </ul>
      <LogoutButton />
    </nav>
  );
};

export default AdminNavbar;
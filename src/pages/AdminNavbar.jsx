import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import "../styles/AdminNavbar.css";

/**
 * Barra de navegación para el administrador, incluyendo todas las secciones disponibles.
 */
const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <h2>E-Management</h2>
      <ul className="nav-links">
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/usuarios">Usuarios</Link></li>
        <li><Link to="/admin/eventos">Eventos</Link></li>
        <li><Link to="/eventos">Lista Eventos</Link></li>
        <li><Link to="/eventos/crear">Crear Evento</Link></li>
        <li><Link to="/admin/cuotas">Cuotas</Link></li>
        <li><Link to="/admin/domotics">Domótica</Link></li>
      </ul>
      <LogoutButton />
    </nav>
  );
};

export default AdminNavbar;
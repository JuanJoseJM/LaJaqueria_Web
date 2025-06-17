import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <h2>E-Management</h2>
      <ul>
        <li><Link to="/admin/socios">Socios</Link></li>
        <li><Link to="/admin/cuotas">Cuotas</Link></li>
        <li><Link to="/admin/eventos">Eventos</Link></li>
        <li><Link to="/admin/domotica">Domótica</Link></li>
        <li><Link to="/login">Cerrar sesión</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
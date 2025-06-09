import React from "react";
import AdminNavbar from "../components/AdminNavbar";

const AdminPanel = () => {
  return (
    <div>
      <AdminNavbar />
      <div style={{ padding: "1rem" }}>
        <h1>Bienvenido al Panel de Administración</h1>
        <p>Usa el menú para navegar por las opciones.</p>
      </div>
    </div>
  );
};

export default AdminPanel;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminNavbar from "./pages/AdminNavbar";
import AdminPanel from "./pages/AdminPanel";
// import Users from "./pages/Users";
// import Payments from "./pages/Payments";
// import Events from "./pages/Events";

import EventCard from "./pages/EventCard";
import EventsPanel from "./pages/EventsPanel";
import Domotics from "./pages/Domotics";
import Usuarios from "./pages/Usuarios";
import CreateEvent from "./pages/CreateEvent";
import EventManager from "./pages/EventManager";
import CuotaManager from "./pages/CuotaManager";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirección raíz al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/*Página de login usando Login.jsx */}
        <Route path="/login" element={<Login />} />

        {/*Paneles del administrador */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/domotics" element={<Domotics />} />
        <Route path="/admin/usuarios" element={<Usuarios />} />
        <Route path="/admin/eventos" element={<EventManager />} />
        <Route path="/admin/cuotas" element={<CuotaManager />} />

        {/*Gestión de eventos */}
        <Route path="/eventos" element={<EventsPanel />} />
        <Route path="/eventos/crear" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
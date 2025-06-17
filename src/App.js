import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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

        {/* Página pública de login */}
        <Route path="/login" element={<Login />} />

        {/* Paneles protegidos (requieren login) */}
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        <Route path="/admin/domotics" element={<PrivateRoute><Domotics /></PrivateRoute>} />
        <Route path="/admin/usuarios" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
        <Route path="/admin/eventos" element={<PrivateRoute><EventManager /></PrivateRoute>} />
        <Route path="/admin/cuotas" element={<PrivateRoute><CuotaManager /></PrivateRoute>} />

        {/* Eventos generales (pueden ser públicos o protegidos si quieres) */}
        <Route path="/eventos" element={<PrivateRoute><EventsPanel /></PrivateRoute>} />
        <Route path="/eventos/crear" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
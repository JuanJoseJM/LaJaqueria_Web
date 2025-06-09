import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Users from "./pages/Users";
import Payments from "./pages/Payments";
import Events from "./pages/Events";
import Domotics from "./pages/Domotics";
import Usuarios from "./pages/Usuarios";
import EventManager from "./pages/EventManager";
import CuotaManager from "./pages/CuotaManager";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/events" element={<Events />} />
        <Route path="/admin/domotics" element={<Domotics />} />
        <Route path="/admin/usuarios" element={<Usuarios />} />
        <Route path="/eventos" element={<EventsPanel />} />
        <Route path="/eventos/crear" element={<CreateEvent />} />
        <Route path="/admin/eventos" element={<EventManager />} />
        <Route path="/admin/cuotas" element={<CuotaManager />} />
      </Routes>
    </Router>
  );
}

export default App;

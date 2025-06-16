import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import AdminPanel from "./components/pages/AdminPanel";
import EventsPanel from "./components/pages/EventsPanel";
import Domotics from "./components/pages/Domotics";
import Usuarios from "./components/pages/Usuarios";
import EventManager from "./components/pages/EventManager";
import CuotaManager from "./components/pages/CuotaManager";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
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

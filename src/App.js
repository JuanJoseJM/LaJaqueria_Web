import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminNavbar from "./pages/AdminNavbar";
import AdminPanel from "./pages/AdminPanel";
//import Users from "./pages/Users";
//import Payments from "./pages/Payments";
//import Events from "./pages/Events";
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

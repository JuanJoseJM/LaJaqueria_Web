import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Componente de ruta privada.
 * Redirige a login si no hay token de acceso en localStorage.
 */
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
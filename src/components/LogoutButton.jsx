import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Botón de cierre de sesión.
 * Limpia el token del almacenamiento local y redirige al login.
 */
const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
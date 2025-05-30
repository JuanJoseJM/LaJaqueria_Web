import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";

export default function LogoutButton() {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.post("/logout"); // para cerrar sesión
        } catch (error) {
        }

        navigate("/"); // vuelve al login
    };

    return <button onClick={logout}>Cerrar sesión</button>;
}
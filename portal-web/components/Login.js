import React, { useState } from 'react';
import { login } from '../api';  // Función de login

function Login({ setToken }) {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(usuario, password);
            setToken(data.accesscode); // Almacena el token (si es necesario)
            // Redirigir a la página principal o el dashboard
        } catch (err) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Usuario" 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Iniciar sesión</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
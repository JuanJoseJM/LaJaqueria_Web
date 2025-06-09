import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/usuarios/login', {
        usuario: email,
        password: password
      });

      const { accesscode, email: returnedEmail } = response.data;
      localStorage.setItem('accesscode', accesscode);
      localStorage.setItem('userEmail', returnedEmail);

      setErrorMsg('');
      navigate('/admin');
    } catch (error) {
      setErrorMsg('Credenciales inválidas');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

        {errorMsg && <p className="error">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
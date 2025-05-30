import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosConfig';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/login', null, {
                auth: {
                    username: email,
                    password: password
                }
            });
            navigate('/dashboard');
        } catch (error) {
            alert('Credenciales inválidas');
        }
    };

    return (
        <form onSubmit={login}>
            <h2>Login Administrador</h2>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Entrar</button>
        </form>
    );
}
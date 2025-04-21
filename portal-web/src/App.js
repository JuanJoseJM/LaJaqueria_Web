import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Socios from './pages/Socios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    const [token, setToken] = useState(null);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/socios" component={Socios} />
                    {/* Agrega rutas para otras páginas como cuotas, eventos, etc. */}
                    <Route path="/" exact>
                        <h1>Bienvenido al Portal</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
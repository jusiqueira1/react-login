// src/App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; // Corrigido o caminho para LoginForm.jsx
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação simples de login
    if (username === 'admin' && password === '123456') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <h1>Authentication Example</h1>
      {!loggedIn ? (
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;

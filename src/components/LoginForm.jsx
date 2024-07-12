// src/LoginForm.jsx
import React from 'react';

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

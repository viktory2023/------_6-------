import React, { useState } from 'react';
import '../css/LoginForm.css'
import logo from './train.png'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    if (username === 'admin' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Неверные учетные данные');
    }
  };

  return (
    <>
    <div class="box-L">
    <img
                        src={logo}
                        height="50"
                        width="50"
                        className="d-inline-block"
                        alt="Logo"
                        />
      <h1>ЭЛЕКТРОННЫЙ</h1>
      <h1>ДОКУМЕНТО-</h1>
      <h1>ОБОРОТ</h1>
    </div>
      {isLoggedIn ? (
        <h1>Вы вошли в систему!</h1>
      ) : (
        <div class="box-R">
        <h2 class="auth">АВТОРИЗАЦИЯ</h2>
        <div class="input-container">
            <input type="text" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Login</label>
          </div>
          <div class="input-container">
          <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
          <button class="button-48">Забыли пароль?</button>
          </div>
          <button class="button-36" onClick={handleLogin}>Войти</button>
        </div>
      )}
    </>
  );
};

export default LoginPage;

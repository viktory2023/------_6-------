import React, { useState } from 'react';
import '../css/admin.css'

const UserForm = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [organization, setOrganization] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { lastName, firstName, patronymic, organization, login, password });
  };

  return (
    <div class="form">
      <h1>Новый пользователь</h1>
      <form onSubmit={handleSubmit}>
        <label>Фамилия:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Имя:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Отчество:</label>
        <input type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />

        <label>Организация:</label>
        <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} required />

        <label>Логин:</label>
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} required />

        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </form>
      
      <button class="button-36" type="submit">Добавить</button>
    </div>
  );
};

export default UserForm;

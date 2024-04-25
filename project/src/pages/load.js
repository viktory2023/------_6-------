import React, { useState } from 'react';
import '../css/LoginForm.css'
import TopMenu from '../components/Header.js';
import { isAuthed } from '../utils/auth.js';
import { Navigate } from 'react-router-dom';
import App from '../components/Select.js';

function Load() {
  const [isLogged, setIsLogged] = useState(null)
  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />
  }
  return (
      <div><TopMenu />
      <div class = "select-1"><App/></div>
      <div class="select-2"><App/></div>
      <div class = "form__group">
      <input type = "text" class = "form__input" id = "note" placeholder =
           "Заполните поле" required = "" />
      </div>
        <label for="name" class="form__label">примечание</label>

      <button class = "button-36" type = "submit">
          Отправить</button>
      </div>);
}

export default Load;
  
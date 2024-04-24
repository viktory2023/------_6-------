import React, { useState } from 'react';
import '../css/LoginForm.css'
import TopMenu from '../components/Header.js';
import { isAuthed } from '../utils/auth.js';
import { Navigate } from 'react-router-dom';

function Load() {
  const [isLogged, setIsLogged] = useState(null)
  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />
  }
  return (
      <div><TopMenu /><div class = "form__group">
      <input type = "text" class = "form__input" id = "name" placeholder =
           "Перетащите файл" required = "" />
      </div>
        <label for="name" class="form__label">тип файла</label>
      <div class = "form__group">
      <input type = "text" class = "form__input" id = "person" placeholder =
           "Заполните поле" required = "" />
      </div>
        <label for="name" class="form__label">адресант</label>
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
  
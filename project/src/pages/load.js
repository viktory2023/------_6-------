import React from 'react';
import '../css/LoginForm.css'
import TopMenu from '../components/Header.js';

function Load() {
    return (
      <div>
        <TopMenu/>
        <div class="form__group">
            <input type="text" class="form__input" id="name" placeholder="Перетащите файл" required="" />
        </div>
        <label for="name" class="form__label">тип файла</label>
        <div class="form__group">
            <input type="text" class="form__input" id="person" placeholder="Заполните поле" required="" />
        </div>
        <label for="name" class="form__label">адресант</label>
        <div class="form__group">
            <input type="text" class="form__input" id="note" placeholder="Заполните поле" required="" />
        </div>
        <label for="name" class="form__label">примечание</label>
      </div>
    );
  }
  
  export default Load;
  
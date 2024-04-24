import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

import TopMenu from '../components/HeaderAdmin';
import UserForm from '../components/UserForm';
import {isAuthed} from '../utils/auth.js';

function NewPerson() {
  const [isLogged, setIsLogged] = useState(null)
  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />
  }
  return (
    <div>
        <TopMenu/>
        <UserForm/>
    </div>
  );
}

export default NewPerson;

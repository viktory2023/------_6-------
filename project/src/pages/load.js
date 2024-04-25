import React, { useState } from 'react';
import '../css/LoginForm.css'
import TopMenu from '../components/Header.js';
import { isAuthed } from '../utils/auth.js';
import { Navigate } from 'react-router-dom';
import DocForm from '../components/DocForm.js';

function Load() {
  const [isLogged, setIsLogged] = useState(null)
  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />
  }
  return (
      <div><TopMenu />
      <DocForm/>
      </div>);
}

export default Load;
  
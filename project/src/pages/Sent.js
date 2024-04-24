import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import {isAuthed} from '../utils/auth.js';

function Sent() {
  const [isLogged, setIsLogged] = useState(null)
  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />
  }
  return (
    <div>
       <Header />
       <div  style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
        <SearchBar/>
       </div>
       <div style={{ margin: '70px auto', display: 'flex', justifyContent: 'center' }}>
        <Table />
       </div>
    </div>
  );
}

export default Sent;

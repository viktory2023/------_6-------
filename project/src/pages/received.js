import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

import Header from '../components/Header';
import Table from '../components/Table';
import {isAuthed} from '../utils/auth.js';
import { getReceivedDocs } from '../utils/api.js';

function Received() {
  const [isLogged, setIsLogged] = useState(null)
  const [docList, setDocList] = useState(null)
  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />
  }

  if (isLogged && docList === null) {
    setDocList(undefined)
    getReceivedDocs().then((res) => {
      setDocList(res);
      console.log(res)
    });
  }


  return (
    <div>
       <Header />
       <div style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
        <Table docList={docList}/>
       </div>
    </div>
  );
}

export default Received;

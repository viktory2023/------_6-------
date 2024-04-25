import '../css/admin.css'

import React, {useEffect, useState} from 'react';
import DropdownMenu from './Select';
import { getUsers, sendDoc } from '../utils/api';

const docTypes = [
  {key: 'ORDER', value: "Приказ"},
  {key: 'STATEMENT', value: "Заявление"},
  {key: 'CONTRACT', value: "Контракт"}
]

const DocForm = () => {
  const [docType, setDocType] = useState('ORDER');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers()
        .then((data) => {
          if (data === null || data === undefined) {
            return null;
          }
          console.log(data)
          return data.map(({login, firstname, lastname, patronymic, organisation}, index) => {
            return {
              key: login,
              value: (lastname + ' ' + firstname + ' ' + patronymic + ' ' + organisation?.title || '')
            };
          });
        })
        .then(data => setUsers(data))
        .catch(e => console.log(e));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDoc({type: docType, description: notes, file: file, recipient: recipient});
    console.log('Submitted:', { docType, notes, file, recipient });
  };

  return (
    <div class='form'>
      <h1>Новый пользователь</h1>
      <form>
        <label>Тип документа:</label>
        <DropdownMenu data={docTypes} value={docType} setValue={setDocType} required/>
        {/* <input type='text' value={docType} onChange={({target}) => setDocType(target.value)} required /> */}

        <label>Документ:</label>
        <input type="file" onChange={({target}) => setFile(target.files[0])} required />

        <label>Получатель:</label>
        <DropdownMenu data={users} value={recipient} setValue={setRecipient}/>
        {/* <input type="text" value={recipient} onChange={({target}) => setRecipient(target.value)} /> */}

        <label>Описание:</label>
        <input type="text" value={notes} onChange={({target}) => setNotes(target.value)} required />
      </form>
      <button class="button-36" type="submit" onClick={handleSubmit}>Отправить</button>
    </div>
  );
};

export default DocForm;

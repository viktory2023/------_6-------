import '../css/admin.css'

import Autocomplete from '@material-ui/lab/Autocomplete';
import React, {useState} from 'react';

const DocForm = () => {
  const [docType, setDocType] = useState('ORDER');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState(null);
  const [recipient, setRecipient] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { docType, notes, file, recipient });
  };

  return (
    <div class='form'>
      <h1>Новый пользователь</h1>
      <form onSubmit={handleSubmit}>
        <label>Тип документа:</label>
        <input type='text' value={docType} onChange={({target}) => setDocType(target.value)} required />

        <label>Документ:</label>
        <input type="file" value={file} onChange={({target}) => setFile(target.value)} required />

        <label>Получатель:</label>
        <input type="text" value={recipient} onChange={({target}) => setRecipient(target.value)} />

        <label>Описание:</label>
        <input type="text" value={notes} onChange={({target}) => setNotes(target.value)} required />
      </form>
      <button class="button-36" type="submit">Отправить</button>
    </div>
  );
};

export default DocForm;

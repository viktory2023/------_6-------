import React from 'react';
import '../css/LoginForm.css'
import { downloadDoc } from '../utils/api';

const docTypes = {
  'ORDER': 'Приказ',
  'STATEMENT': 'Заявление',
  'CONTRACT': 'Контракт'
}

const Table = ({docList, isReceived = false}) => {
  return (
    <table collapseOnSelect expand='md' style={{top:'40%'}}>
      <thead>
        <tr>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Тип файла</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Дата отправки</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>{isReceived ? 'Отправитель' : 'Адресант'}</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Организация</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Примечание</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Скачать</th>
        </tr>
      </thead>
      {
        (docList === null || docList === undefined || docList?.length === 0) ? <h2>Документы не найдены</h2>
        : <tbody>
          {docList.map(doc => (
            <tr key={doc.id}>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                {docTypes[doc.type]}
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                {Date(doc.createdAt).split(' ').slice(0, 4).join(' ')}
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                { isReceived ?
                (doc.sender.lastname + ' ' + doc.sender.firstname + ' ' + doc.sender.patronymic) :
                (doc.recipient.lastname + ' ' + doc.recipient.firstname + ' ' + doc.recipient.patronymic)
                }
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                {doc.recipient.organisation.title}
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                {doc.description}
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                <div onClick={() => downloadDoc(doc)}>{doc.filename}</div>
              </td>
            </tr>
          ))}
        </tbody> 
      }
    </table>
  );
};

export default Table;

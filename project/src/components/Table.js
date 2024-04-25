import React from 'react';

const docTypes = {
  'ORDER': 'Приказ',
  'STATEMENT': 'Заявление',
  'CONTRACT': 'Контракт'
}

const Table = ({docList}) => {

  return (
    <table collapseOnSelect expand='md' style={{top:'40%'}}>
      <thead>
        <tr>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Тип файла</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Дата отправки</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Адресант</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Организация</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Примечание</th>
        </tr>
      </thead>
      {
        (docList === null || docList === undefined) ? <h2>Документы не найдены</h2>
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
                {doc.recipient.lastname + ' ' + doc.recipient.firstname + ' ' + doc.recipient.patronymic}
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                {doc.recipient.organisation.title}
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
                {doc.description}
              </td>
            </tr>
          ))}
        </tbody> 
      }
    </table>
  );
};

export default Table;

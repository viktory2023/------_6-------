import React from 'react';

const tableData = [
  { type: 'документ', date: '19.04', person: 'Михаил', note: 'на подпись' },
];

const Table = () => {
  return (
    <table collapseOnSelect expand="md" style={{top:'40%'}}>
      <thead>
        <tr>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Тип файла</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Дата отправки</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Адресант</th>
          <th style={{ backgroundColor: '#89a1b3', color: 'white', padding: '10px' }}>Примечание</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.id}>
            <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>{row.type}</td>
            <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>{row.date}</td>
            <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>{row.person}</td>
            <td style={{ padding: '10px', borderRight: '1px solid #ccc' }}>{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

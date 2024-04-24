import React, { useState } from 'react';
import logo from './train.png';

const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#89a1b3', padding: '5px', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
    <div>
    <img
                        src={logo}
                        height="40"
                        width="40"
                        alt="Logo"
                        padding="20"
                        />
    </div>
    <h4 style={{ marginRight:'25px'}}>Администратор</h4>
      <div  style={{ textAlign: 'center' }}>
        <a href="/pages/Sent" style={{ color: 'white', textDecoration: 'none', margin: '0 50px', display: 'inline-block',  marginRight:'350px' }}>Новый пользователь</a>
        <a href="/pages/received" style={{ color: 'white', textDecoration: 'none', margin: '0 50px', display: 'inline-block', marginRight:'350px'  }}>Документы</a>
      </div>
    </div>
  );
};

export default TopMenu;

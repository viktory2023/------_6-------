import React, { useState } from 'react';
import profile from './profile.png'; 
import logo from './train.png';

import { Link } from 'react-router-dom';

const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

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
    <h4 style={{ marginRight:'25px'}}>ЭДО</h4>
      <div  style={{ textAlign: 'center' }}>
        <Link to="/sent" style={{ color: 'white', textDecoration: 'none', margin: '0 50px', display: 'inline-block',  marginRight:'350px' }}>Отправленные</Link>
        <Link to="/received" style={{ color: 'white', textDecoration: 'none', margin: '0 50px', display: 'inline-block', marginRight:'350px'  }}>Полученные</Link>
        <Link to="/load" style={{ color: 'white', textDecoration: 'none', margin: '0 50px', display: 'inline-block' }}>Загрузить</Link>
      </div>
      <div style={{ position: 'relative' }}>
        <img src={profile} alt="Menu" height="50"
                        width="50" marginLeft="100"
                         style={{ cursor: 'pointer', marginLeft: '150px',}} onClick={handleMenuClick} />
        {menuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#ffffff', padding: '30px', borderRadius: '5px', borderBlockColor: '#637d8f',  border: '2px solid #637d8f',}}>
            <Link to="/" style={{ display: 'block', color: '#637d8f', textDecoration: 'none', borderBottom: '3px solid #637d8f', paddingBottom: '10px', textAlign: 'center' }}>Профиль</Link>
            <Link to="/sent" href="/pages/Sent" style={{ display: 'block', color: '#637d8f', textDecoration: 'none', borderBottom: '3px solid #637d8f', paddingBottom: '10px', textAlign: 'center'  }}>Отправленные</Link>
            <Link to="/received" style={{ display: 'block', color: '#637d8f', textDecoration: 'none', borderBottom: '3px solid #637d8f', paddingBottom: '10px', textAlign: 'center'  }}>Полученные</Link>
            <Link to="/load" style={{ display: 'block', color: '#637d8f', textDecoration: 'none', borderBottom: '3px solid #637d8f', paddingBottom: '10px', textAlign: 'center'  }}>Загрузка</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopMenu;

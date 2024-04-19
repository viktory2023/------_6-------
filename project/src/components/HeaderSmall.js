import React, { useState } from 'react';
import profile from './profile.png'; 
import logo from './train.png';

const TopMenu = () => {
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
    <h4 style={{ marginRight:'1400px'}}>ЭДО</h4>
    </div>
  );
};

export default TopMenu;

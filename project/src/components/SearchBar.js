import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Найти"
            value={searchTerm}
            onChange={handleChange}
            style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '600px',
                outline: 'none',
            }}
        />
    );
};

export default SearchBar;

import React, { useState } from 'react';

const SearchBar = ({string, setString}) => {
    const handleChange = (event) => {
        setString(event.target.value);
        // console.log(string)
    };

    return (
        <input
            type="text"
            placeholder="Найти"
            value={string}
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

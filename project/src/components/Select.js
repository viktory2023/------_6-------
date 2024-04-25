import React, { useState, useEffect } from 'react';

const DropdownMenu = ({data, setValue, value}) => {
    if (data === null || data === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <select name="file" onChange={({target}) => {
                setValue(target.value);
                console.log(value);
                }}>  
                <option value={null}>НЕ ВЫБРАНО</option>
                {data.map(({key, value}, index) => (
                    <option key={index} value={key}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownMenu;

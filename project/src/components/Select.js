import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://example.com/api/menuItems');
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <label>Тип файла:</label>
            <select name="file">  
                <option value="SELECT">Выберите тип</option>
                {data.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <DropdownMenu />
        </div>
    );
};

export default App;

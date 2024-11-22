import React, { useState, useEffect } from 'react';
import './App.css';

function RandomDog({ dog }: { dog: string }) {
    return <img src={dog} alt="Random Dog" style={{ width: '100px', height: '100px' }} />;
}

function App() {
    const [dogs, setDogs] = useState<string[]>(['', '', '']);

    const fetchDogs = async () => {
        const newDogs = await Promise.all(
            dogs.map(async () => {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                return data.message;
            })
        );
        setDogs(newDogs);
    };

    useEffect(() => {
        fetchDogs();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <button onClick={fetchDogs}>Refresh All Dogs</button>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {dogs.map((dog, index) => (
                    <RandomDog key={index} dog={dog} />
                ))}
            </div>
        </div>
    );
}

export default App;

import './array.css';
import { useState, useEffect } from 'react';

function FruitsArray() {

    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Mango']);
    useEffect(() => {
    console.log("3rd index element:", fruits[3]);
     const updatedFruits = [...fruits];

    updatedFruits[2] = "Jambura";
    setFruits(updatedFruits);
    console.log("Updated fruits array:", updatedFruits);
    }, []);

    return (
        <div className="fruits-container">
            <h1>Fruits Array</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitsArray;
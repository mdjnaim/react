import './concat.css';
import { useState, useEffect } from 'react';

function Concat() {

    const [combined, setCombined] = useState([]);

    const [arr1] = useState(["Apple", "Banana", "Cherry"]);
    const [arr2] = useState(["Date", "Mango", "Orange"]);

    useEffect(() => {
        const newArray = arr1.concat(arr2);

        console.log("Array 1:", arr1);
        console.log("Array 2:", arr2);
        console.log("Combined Array:", newArray);

        setCombined(newArray);
    }, [arr1, arr2]);

    return(
        <div className="container">
            <h2>Array 1:</h2>
            <ul>
                {arr1.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Array 2:</h2>
            <ul>
                {arr2.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Combined Array:</h2>
            <ul>
                {combined.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    );
}

export default Concat;
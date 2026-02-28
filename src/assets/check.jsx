import './check.css';
import { useState, useEffect } from 'react';

function CheckArray() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fruits = ["apple", "banana", "orange"];
        const num = 6;
        const cities = ["Dhaka", "Chittagong", "Khulna"];
        const isActive = true;

        const output = [`Fruits is an array: ${Array.isArray(fruits)}`,
            `Number is an array: ${Array.isArray(num)}`,
            `Cities is an array: ${Array.isArray(cities)}`,
            `isActive is an array: ${Array.isArray(isActive)}`];

        setMessage(output);
    }, []);

    return (
        <div className="container">
            <h1>Check Array</h1>
            <ul>
                {message.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default CheckArray;
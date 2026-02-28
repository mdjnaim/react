import './check.css';
import { useState, useEffect } from 'react';

function CheckArray() {

    const [message, setMessage] = useState("");

    useEffect(() => {
        const books = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

        const hasJavaScript = books.includes("JavaScript");

        if (hasJavaScript) {
            setMessage("JavaScript is in the array.");
        } else {
            setMessage("JavaScript is not in the array.");
        }
    }, []);
    return (

        <div className="container">
            <h1>Check Array</h1>
            <p>{message}</p>
        </div>
    );
}

export default CheckArray;
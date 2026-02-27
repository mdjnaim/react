import './evenodd.css';
import { useState } from 'react';

function EvenOdd() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const evenodd =(num) => (num % 2 === 0 ? 'Even' : 'Odd');

    const handleCheck = () => {
        if (number.trim() === '') {
            setResult('Please enter a number');
        } else if (isNaN(number)) {
            setResult('Please enter a valid number');
        } else {
            setResult(`The number ${number} is ${evenodd(Number(number))}`);
        }
    };

    const reset = () => {
        setNumber('');
        setResult(null);
    };

    return (
        <div className="container">
            <h1>Even Odd Cheacker</h1>
            <input type="text" placeholder="(e.g. 123456)" value={number} onChange={(e) => setNumber(e.target.value)} /> 
            <br />
            <div className="btn">
                <button onClick={handleCheck}>Check</button>
                <button onClick={reset}>Reset</button>
            </div>
            <br />
            <div className="result">
                {result}
            </div>
        </div>
    );
}

export default EvenOdd;
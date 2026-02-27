import './oddeven.css';
import { useState } from 'react';

function OddEven() {
    const [num, setNum] = useState('');
    const [result, setResult] = useState(null);

    const checkNum = () => {
        const number = parseInt(num);
        if (isNaN(number)) {
            setResult('Please enter a valid number');
            return;
        }
        if (number % 2 === 0) {
            setResult(number / 2);
        }
        else {
            setResult(number * 2);
        }
    };

    const resetNum = () => {
        setNum('');
        setResult(null);
    };

    return(
        <div className="container">
            <h2>Odd Even Processor</h2>

            <div className="inputnum">
                <label>Enter a number:</label><br/>
                <input type="text" placeholder="e.g. 5" value={num} onChange={(e) => setNum(e.target.value)}/>
            </div>
            <br />
            <div className="btn">
                <button onClick={checkNum}>Check</button>
                <button onClick={resetNum}>Reset</button>
            </div>
            <br />
            <div className="result">
                <h3>Result : {result}</h3>
            </div>
        </div>
    );
}

export default OddEven;
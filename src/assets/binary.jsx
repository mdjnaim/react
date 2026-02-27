import './binary.css';
import { useState } from 'react';

function CountZero() {
    const [binaryInput, setBinaryInput] = useState('');
    const [result, setResult] = useState(null);

    const count_zeroes = (binary) => {
        let count = 0;
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '0') {
                count++;
            }
        }
        return count;
    };

    const handleCount = () => {
        if(!binaryInput.trim()) {
            setResult('Please enter a binary value.');
            return;
        };

        if (!/^[01]+$/.test(binaryInput)) {
            setResult('Please enter a valid binary value (only 0s and 1s).');
            return;
        }

        const zeroCount = count_zeroes(binaryInput);
        setResult(`There are ${zeroCount} zeroes in the binary value.`);
    };

    const reset = () => {
        setBinaryInput('');
        setResult(null);
    };

    return (
        <div className="container">
            <h1>Count Zeroes in Binary</h1>
            <label>Enter Binary Value</label>
            <br />
            <div className="input">
                <input type="text" value={binaryInput} placeholder="(e.g. 101010" onChange={(e) => setBinaryInput(e.target.value)}/>
            </div>
              <div className="btn">
                <button onClick={handleCount}>Count Zeroes</button>
                <button onClick={reset}>Reset</button>
              </div>
              <br />
               <div className="result">
                <h3>{result}</h3>
              </div>

        </div>
    );
}

export default CountZero;
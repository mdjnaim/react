import './avg.css';
import { useState } from 'react';

function Average() {
    const [input, setInput] = useState('');
    const [average, setAverage] = useState(null);

    const calculateAverage = () => {
       if (!input.trim()) {
           setAverage("Please enter numbers first.");
              return;
    }
        const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) {
        setAverage("Invalid input! Please enter valid numbers separated by commas.");
        return;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    setAverage(avg.toFixed(2));
    }

    const reset = () => {
        setInput('');
        setAverage(null);
    };



    return (
        <div className="container">
            <h1>Average Calculator</h1>
           
           <div className="inputs">
            <input type="text" placeholder="Enter numbers (e.g. 1,2,3)" value={input} onChange={(e) => setInput(e.target.value)}/>
           </div>
           <br />
           <div className="btn">
           <button onClick={calculateAverage}>Calculate</button>
           <button onClick={reset}>Reset</button>
           </div>
           <br />
           <h3>Average : {average}</h3>

        </div>
    );
}

export default Average;
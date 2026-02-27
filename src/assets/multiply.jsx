import './multiply.css';
import { useState } from 'react';

function Multiply() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    const [result, setResult] = useState(null);

    const multiply = () => {
        const result = parseFloat(num1) * parseFloat(num2) * parseFloat(num3) * parseFloat(num4);
        setResult(result.toFixed(2));
    };

    const reset = () => {
        setNum1('');
        setNum2('');
        setNum3('');
        setNum4('');
        setResult(null);
    };

    return (
        <div className="container">
            <h1>Multiply 4 Numbers</h1>
            <div className="inputs">
                <label>Enter first number:</label><br/>
                <input type="text" placeholder="First number" value={num1} onChange={(e) => setNum1(e.target.value)}/><br/>
                <label>Enter second number:</label><br/>
                <input type="text" placeholder="Second number" value={num2} onChange={(e) => setNum2(e.target.value)}/><br/>
                <label>Enter third number:</label><br/>
                <input type="text" placeholder="Third number" value={num3} onChange={(e) => setNum3(e.target.value)}/><br/>
                <label>Enter fourth number:</label><br/>
                <input type="text" placeholder="Fourth number" value={num4} onChange={(e) => setNum4(e.target.value)}/>
                <br/>
            </div>
            <div className="btn">
                <button onClick={multiply}>Multiply</button>
                <button onClick={reset}>Reset</button>
            </div>

            {result !==null && <h3>Result: {result}</h3>}
        </div>
    );
}

export default Multiply;
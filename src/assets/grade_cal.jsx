import './grade_cal.css';
import { useState } from 'react';

function GradeCal() {
    const [grade, setGrade] = useState('');

    const calculateGrade = () => {
        const mark = document.querySelector('input').value;
        if (mark >= 90) {
            setGrade('A');
        } else if (mark >= 80) {
            setGrade('B');
        } else if (mark >= 70) {
            setGrade('C');
        } else if (mark >= 60) {
            setGrade('D');
        } else {
            setGrade('F');
        }
    };

    const reset = () => {
        document.querySelector('input').value = '';
        setGrade('');
    }

    return (
        <div className="container">
            <h1>Grade Calculator</h1>
            <div className="input">
                <label>Enter your mark: </label><br/>
                <input type="text" placeholder="e.g., 85" required/>    
            </div>
            <div className="btn">
                <button onClick={calculateGrade}>Calculate</button>
            </div>
            <div className="reset">
                <button onClick={reset}>Reset</button>
            </div>
            <div className="result">
                <h3>Your letter grade is: {grade}</h3>
            </div>

        </div>
    );
}

export default GradeCal;
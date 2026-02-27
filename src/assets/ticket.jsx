import './ticket.css';
import { useState } from 'react';

function Ticketfare() {

  const [age, setAge] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [fare, setFare] = useState(0);

  const calculateFare = () => {
  const calculatedFare = 800;
        if (age <10) {
            setFare("Ticket fare is free for children under 10 years old.");
    }   else if (isStudent){
            setFare("Student ticket fare is "+calculatedFare*0.5+".");
    }
        else if (age >= 60) {
            setFare("Senior citizen ticket fare is "+calculatedFare*0.85+".");
    }   else {
            setFare("Regular ticket fare is "+calculatedFare+".");
    }
    };

    const resetForm = () => {
        setAge('');
        setIsStudent(false);
        setFare('');
    };

    return (
    <div className="container">
        <h1>Ticket fare Calculator</h1>
        <div className="age">
            <label>Enter your age:</label>
            <br/>
            <input type="text" value={age} placeholder="Age" required onChange={(e) => setAge(e.target.value)} />
        </div>
        <br/>
        <div className="student">
            <label>Are you a student?</label>
            <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
        </div>
        <br/>
        <div className="calculate">
            <button onClick={calculateFare}>Calculate Fare</button>
        </div>
        <div className="reset">
            <button onClick={resetForm}>Reset</button>
        </div>
        <br/>
        <div className="result">
            <h2>{fare}</h2>
        </div>
    </div>
);

}

export default Ticketfare;
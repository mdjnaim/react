import './nasted_if.css';
import { useState } from 'react';

function Nastedif() {
    const [yourScore, setYourScore] = useState('');
    const [friendScore, setFriendScore] = useState('');
    const [message, setMessage] = useState('');

    const checkResult = () => {
        const you = Number(yourScore);
        const friend = Number(friendScore);
        
        if (you >= 80) {
            if (friend >= 80) {
                setMessage("Go for a lunch with your friend.");
            }
            else if(friend >= 60) {
                setMessage("Tell your friend : Good luck next time.")
            }
            else if(friend >= 40) {
                setMessage("Keep your friend's message unseen.");
            }
            else {
                setMessage("Block your friend.")  
            }
        }
        else{
            setMessage("Go to home and sleep and act sad.")
        }
    };

    const handleReset = () => {
        setYourScore('');
        setFriendScore('');
        setMessage('');

    };

return (
    <div className="container">
        <div className="input"> 
            <label>Your Score:</label>
            <br />
            <input type="text" value={yourScore} placeholder="Enter your score" required onChange={(e) => setYourScore(e.target.value)}/>
        </div>
        <div className="inputs">
            <label>Friend's Score:</label>
            <br />
            <input type="text" value={friendScore} placeholder="Enter your friend score" required onChange={(e) => setFriendScore(e.target.value)}/>
        </div>
        <div className="btn">
            <button onClick={checkResult}>Check</button>
        </div>
        <div className="reset_btn">
            <button onClick={handleReset}>Reset</button>
        </div>
        <h3>{message}</h3>
    </div>
);
}

export default Nastedif;
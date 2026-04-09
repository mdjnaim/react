import { useState } from "react";   

function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [score, setScore] = useState(0);

    return (
        <div>
            {/* if/else statement */}
            {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>

            {/* && operator */}
            {score >= 60 && <p>You passed the test!</p>}

            <button onClick={() => setScore(score + 10)}>
                Score: {score}
            </button>
        </div>
    )
}
export default ConditionalRendering;
import { useState, useMemo } from "react";

function UseMemoExample() {
    const [count, setCount] = useState(0);  
    const [text, setText] = useState("");
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return count * count * 100;
    }, [count]);

    return (
        <div>
            <input onChange={e => setText(e.target.value)}placeholder="Type not possible" /> 
            <br />
            <button onClick={() => setCount(count + 1)}>
                Count: {count} 
            </button>
            <p>Expensive Calculation: {expensiveCalculation}</p>
        </div>
    )
}
export default UseMemoExample
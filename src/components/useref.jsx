import { useRef, useState } from "react";

function UseRefExample() {
    const inputRef = useRef();
    const countRef = useRef(0); 
    const [show, setShow] = useState(0);

    function handleCount(){
        countRef.current += 1;
        console.log("Count Ref:", countRef.current);
    }

    return (
        <div>
            <input ref={inputRef} placeholder="Type here..." />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
            <button onClick={handleCount}>Increment Count</button>
            <button onClick={() => setShow(countRef.current)}>Show Count</button>
            <p>Current Count: {show}</p>
        </div>
    )
}
export default UseRefExample;
import { useState } from "react";

function StateExample() {
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    return(
        <div>
            <h2>Hello, {name}!</h2>
            <p>You clicked the button {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
            <button onClick={() => setDarkMode(!darkMode)}>
                {}{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    )
}
export default StateExample;
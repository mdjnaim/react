import { useState, useEffect } from "react";

function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(null);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return(
        <div>
            <p>User: {user ? user.name : "Loading..."}</p>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}
export default UseEffectExample;
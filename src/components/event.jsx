import { useState } from "react";

function EventExample() {
    const [text, setText] = useState("");

    function handleClick() {
        alert("Button clicked!");
    }
    function handleChange(e) {
        setText(e.target.value);
    }
    function handleMouseOver() {
        console.log("Mouse over!");
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Form submitted with text: ${text}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} onMouseOver={handleMouseOver} placeholder="Type here" />

            <p>You typed: {text}</p>
            <button type="button" onClick={handleClick}>
                Click me!
            </button>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}
export default EventExample;

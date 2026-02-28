import './add_remove.css';
import { useState, useEffect } from 'react';

function AddRemove() {

    const [destinations, setDestinations] = useState(["Cox's Bazar", "Sajek", "Sundarban"]);

    useEffect(() => {
        const updated = ["Cox's Bazar", "Sajek", "Sundarban"];

        updated.push("Kuakata");
        updated.push("Bandarban", "Sylhet");
        updated.pop();
        setDestinations(updated);
        
    }, []);
    return (
        <div className="container">
            <h1>Destinations Array</h1>
            <ul>
                {destinations.map((destination, index) => (
                    <li key={index}>{destination}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddRemove;
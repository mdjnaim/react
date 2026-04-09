import { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({ name: "", email: "" ,grade: "B", gender: "", hobbies: []});

    function handleChange(e){
        const {name, value, type, checked} = e.target;
        setFormData({...formData, [name]: type === "checkbox" ? checked : value});
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nGrade: ${formData.grade}\nGender: ${formData.gender}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Grade:
                <select name="grade" value={formData.grade} onChange={handleChange}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </label>
            <label>
                Gender:
                <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} /> Male
                <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} /> Female
            </label>
            <label>
                Hobbies:
                <input type="checkbox" name="hobbies" value="reading" checked={formData.hobbies.includes("reading")} onChange={handleChange} /> Reading
                <input type="checkbox" name="hobbies" value="writing" checked={formData.hobbies.includes("writing")} onChange={handleChange} /> Writing
                <input type="checkbox" name="hobbies" value="coding" checked={formData.hobbies.includes("coding")} onChange={handleChange} /> Coding
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
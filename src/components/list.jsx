import { useState } from "react";

function List() {
    const [students, setStudents] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ]);

    function addStudent() {
        const newStudent = { id: students.length + 1, name: `Student ${students.length + 1}` };
        setStudents([...students, newStudent]);
    }
    function removeStudent(id) {
        setStudents(students.filter(student => student.id !== id));
    }
    return (
        <div>
            <h2> Students ({students.length})</h2>
            {students.map(student => (
                <div key={student.id}>
                    {student.name}
                    <button onClick={() => removeStudent(student.id)}>Remove</button>
                </div>
            ))}
            <button onClick={addStudent}>Add Student</button>
        </div>
    )
} 
export default List;

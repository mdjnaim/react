const students = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 92},
    {name: "Charlie", grade: 78},
    {name: "David", grade: 90},
    {name: "Eve", grade: 88},
    {name: "Frank", grade: 95},
    {name: "Grace", grade: 80},
    {name: "Heidi", grade: 91},
    {name: "Ivan", grade: 87},
    {name: "Judy", grade: 89}
]

const topStudents = students.filter(student => student.grade >= 90).map(student => student.name);

console.log(topStudents);

const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

console.log("Average Grade:", averageGrade);
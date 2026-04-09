function StudentCard({name, age, grade}) {
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
        </div>
    )
}

function PropsExample() {
    return(
        <div>
            <StudentCard name="Alice" age={20} grade="A" />
            <StudentCard name="Bob" age={22} grade="B" />
            <StudentCard name="Charlie" age={19} grade="A+" />
        </div>
    )
}
export default PropsExample;
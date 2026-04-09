function JSXBasic() {
    const name = "Naim";
    const age = 25;
    const isStudent = true;

    return(
        <div>
            <h1>Hello {name} !</h1>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
            <p>{age > 18 ? 'Adult' : 'Not an adult'}</p>
        </div>
    )
}
export default JSXBasic;
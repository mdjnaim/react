function fizzCount(n){
    for (let i=1; i<=n; i++){
        if (i%3===0){
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}
fizzCount(10);
fizzCount(15);
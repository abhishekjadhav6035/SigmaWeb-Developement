let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let b = prompt("Enter Second number");
let c = prompt("Enter Opration");
let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.1) {
    //Perfect correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    //wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
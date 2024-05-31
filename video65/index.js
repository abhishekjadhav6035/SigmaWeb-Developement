
let n = prompt("Enter the number");
//By using for
let factor = 1;
for(let a = n; a>0 ;a--){
    factor = factor*a;
}
console.log(`The factore of the ${n} is ${factor} `);
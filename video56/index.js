console.log("Hello I am conditional tutorial");

let age = 16;
let gress = 2;
// age+= gress;


console.log(age);
// console.log(age + gress);
// console.log(age ** gress);
if(age>=18){
    console.log("you can drive");

}
else if(age == 0){
    console.log("are you kidding");
}
else{
    console.log("you cannot drive");
}
// In short use of if else we use following shortcut

let a = 6;
let b = 10;
let c = a > b ? (console.log(a-b)) : (console.log(b-a));
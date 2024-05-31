let arr = [1, 11, 34, 56];
// let newArr = [];
// for(let index = 0; index < arr.length; index++){
//     const element = arr[index];
//     newArr.push(element**2);
// }
let newArr = arr.map((e)=>{
    return e*2;
})
console.log(newArr);

const greterThanTen = (e)=>{
    if(e>10){
        return true;
    }
    return false;
}
console.log(
arr.filter(greterThanTen));

let arr2 = [1, 2, 3, 4, 5];
const red = (a, b)=>{
    return a+b;
}
console.log(arr2.reduce(red))


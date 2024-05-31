// let obj = {
//     a: 1,
//     b: "Harry"
// };
// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name;
       console.log('Object is crated...');
        
    }
    eats(){
        console.log('Kha raha hoon');
        
    }
    jaumps(){
        console.log('Kood raha hoon');
        
    }
}

class Lion extends Animal {
    constructor(name){
        super(name);
        this.name = name;
    console.log("Object is created and He is Lion ...");
    }
    
    eats(){
        super.eats();
        console.log("Kha raha hoon roar hauhau...")
    }
    
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Sheru");
console.log(l);
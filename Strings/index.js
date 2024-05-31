let name1 = "Abhishek";
console.log(name1);
let sNmae = 'abhi';
console.log(sNmae);
//Template literals using backtics

let sentence = ` The name "is" Ganesh's `;
console.log(sentence);

let a = ` This is ${name1}`;
console.log(a);

//Excape sequence character: Use for excape ' "" character from code
let d = 'This\'s famous place in\n\" Chatrapati Sambhajinagar \" ';
console.log(d);

// String properties and Methods
let employee = "Mangesh";
console.log(employee);
console.log(employee.length);
console.log(employee.toLowerCase());
console.log(employee.toUpperCase());
console.log(employee.slice(1,4));
console.log(employee.slice(2));
console.log(employee[4]);

let company = ` Jadhav Brother's Industrial Corporation`;
console.log(company);
console.log(company.replace("Corporation" ,"Group"));
let suffix = 'limited';
console.log(company.concat(" ", suffix));

let f = " The tura";
console.log(f);
console.log(f.trim( ));

// A variable is a container used to store data values so we can use them later.
let name = "Saima";
console.log(name); // Saima

var age = 22;
console.log(age);

//Problems with var
//Function scoped (not block scoped)
//Can be redeclared
//Causes bugs in large apps

let city = "Lahore";
console.log(city);

let score = 50;
score = 80; // allowed
console.log(score);

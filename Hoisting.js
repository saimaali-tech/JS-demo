// let globalVar = "I am global";

// function testScope() {
//   let localVar = "I am local";
//   console.log(globalVar); // accessible
//   console.log(localVar);  // accessible
// }

// testScope();
// console.log(globalVar); // accessible
// // console.log(localVar); // ❌ Error


//Hoisting

// console.log(a); // undefined (var is hoisted)
// var a = 10;

// // Functions are fully hoisted
// greet();
// function greet() {
//   console.log("Hello!");
// }

//ES6+ Features
//Template Literals
// let name = "Saima";
// console.log(`Hello ${name}!`); // Hello Saima!

//Destructuring
// const user = { name: "Saima", age: 22 };
// const { name, age } = user;
// console.log(name, age);

//Spread & Rest
// Spread
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

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
// let arr1 = [1, 2];
// let arr2 = [...arr1, 3, 4];

// // Rest
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3)); // 6

// //String & Number Methods
// let str = "Hello World";
// console.log(str.toUpperCase()); // "HELLO WORLD"
// console.log(str.includes("World")); // true
// console.log(str.split(" ")); // ["Hello", "World"]

// //Number
// let num = 3.14159;
// console.log(num.toFixed(2)); // "3.14"

// //Advanced Array Methods (We started this)
// let numbers = [1,2,3,4];
// let doubled = numbers.map(n => n*2);
// console.log(doubled); // [2,4,6,8]

// //Object Methods & Advanced Objects
// const user = { name: "Saima", role: "Intern" };
// console.log(Object.keys(user)); // ["name", "role"]
// console.log(user?.address?.city); // undefined (optional chaining)

// //Asynchronous JavaScript (Important for Real Projects)
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }

// fetchData(data => console.log(data));

// //Promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success!"), 1000);
// });

// promise.then(result => console.log(result));

//Async / Await
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("Done!"), 1000));
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();

//Error Handling
try {
  let num = 10 / 0;
  console.log(num);
} catch (error) {
  console.log("Error:", error);
} finally {
  console.log("Always runs");
}


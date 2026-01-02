// An array is a data structure that stores multiple values in a single variable.

// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);

// Accessing Array Elements

// const fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Banana
// console.log(fruits[2]); // Mango

// console.log(fruits.length); // 3
// fruits[1] = "Orange";
// console.log(fruits); // ["Apple", "Orange", "Mango"]

// Adding Elements
//Add at the end – push()
// fruits.push("Grapes");
// console.log(fruits);

//Add at the beginning – unshift()
// fruits.unshift("Pineapple");
// console.log(fruits);

//Removing Elements
//Remove from end – pop()
// fruits.pop();
// console.log(fruits);

// //fruits.pop();
// fruits.shift();
// console.log(fruits);


// //ADVANCED ARRAY METHODS
// const numbers = [1, 2, 3, 4];

// // multiply each number by 2
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]

//filter() – Select Data
// const numbers = [10, 25, 30, 15];

// // keep numbers greater than 20
// const result = numbers.filter(num => num > 20);

// console.log(result); // [25, 30]

//reduce() – Combine to Single Value 🔥
// const numbers = [1, 2, 3, 4];

// const total = numbers.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// console.log(total); // 10

//Count items
// const fruits = ["apple", "banana", "apple"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count); // { apple: 2, banana: 1 }


//find() – First Match
// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Saima" }
// ];

// const user = users.find(u => u.name === "Saima");
// console.log(user);

//some() & every()
const numbers = [2, 4, 6];

console.log(numbers.every(n => n % 2 === 0)); // true
console.log(numbers.some(n => n > 5));        // true

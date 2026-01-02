// An array is a data structure that stores multiple values in a single variable.

// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);

// Accessing Array Elements

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

console.log(fruits.length); // 3
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

// Adding Elements
//Add at the end – push()
fruits.push("Grapes");
console.log(fruits);

// A loop repeatedly executes a block of code while a condition is true.
//This avoids repeating code manually.

//for Loop

for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// Looping through Arrays

// let fruits = ["Apple", "Banana", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//while Loop

// let i = 1;
// while (i <= 5) {
//   console.log("Count: " + i);
//   i++; // important to avoid infinite loop
// }


// do...while Loop
let i = 6;
do {
  console.log("Count: " + i);
  i++;
} while (i <= 5);


// forEach Loop (Array Method)
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});

//Loop Control Statements

//break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1 2

//continue 
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5


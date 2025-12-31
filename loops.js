// A loop repeatedly executes a block of code while a condition is true.
//This avoids repeating code manually.

//for Loop

for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// Looping through Arrays

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//while Loop

let i = 1;
while (i <= 5) {
  console.log("Count: " + i);
  i++; // important to avoid infinite loop
}

// //An object is a collection of key–value pairs (also called properties
// const user = {
//   name: "Saima",
//   age: 22,
//   role: "Web Developer Intern"
// };

// console.log(user);
// console.log(user.name); // Saima
// console.log(user.role); // Web Developer Intern
// user.role = "DevOps Intern"; // update
// user.city = "Lahore";       // add new property

// console.log(user);

//Object with Method (Function inside Object)
// const user = {
//   name: "Saima",
//   role: "Intern",

//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// user.greet(); // Hello, my name is Saima

//🔹 Looping Through an Object
// const user = {
//   name: "Saima",
//   age: 22,
//   role: "Intern"
// };

// for (let key in user) {
//   console.log(key + ": " + user[key]);
// }

//Nested Objects
const user = {
  name: "Saima",
  skills: {
    frontend: "React",
    backend: "Node.js"
  }
};

console.log(user.skills.frontend); // React



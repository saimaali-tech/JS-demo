//An object is a collection of key–value pairs (also called properties
const user = {
  name: "Saima",
  age: 22,
  role: "Web Developer Intern"
};

console.log(user);
console.log(user.name); // Saima
console.log(user.role); // Web Developer Intern
user.role = "DevOps Intern"; // update
user.city = "Lahore";       // add new property

console.log(user);


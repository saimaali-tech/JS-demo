let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}

testScope();
console.log(globalVar); // accessible
// console.log(localVar); // ❌ Error

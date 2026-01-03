// const todos = [];

// function addTodo(task) {
//   todos.push({ task, completed: false });
// }

// function completeTodo(index) {
//   todos[index].completed = true;
// }

// function showTodos() {
//   todos.forEach((todo, i) => {
//     console.log(
//       `${i + 1}. ${todo.task} - ${todo.completed ? "Done" : "Pending"}`
//     );
//   });
// }

// // Test
// addTodo("Learn JavaScript");
// addTodo("Practice Arrays");
// completeTodo(0);
// showTodos();


function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 0, "/"));

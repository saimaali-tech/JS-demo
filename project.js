const todos = [];

function addTodo(task) {
  todos.push({ task, completed: false });
}

function completeTodo(index) {
  todos[index].completed = true;
}

function showTodos() {
  todos.forEach((todo, i) => {
    console.log(
      `${i + 1}. ${todo.task} - ${todo.completed ? "Done" : "Pending"}`
    );
  });
}

// Test
addTodo("Learn JavaScript");
addTodo("Practice Arrays");
completeTodo(0);
showTodos();

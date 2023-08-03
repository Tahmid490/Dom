const createTodoButton = document.querySelector(".todo .add-new-todo button");
const createTodoInput = document.querySelector(".todo .add-new-todo input");
const todoList = document.querySelector(".todo ul");

//show todos data 2
const showTodos = () => {
  let todos = [];
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let content = "";
  todos.reverse().forEach((item, index) => {
    content += `<li>
        <p><i class="fa fa-check"></i>${item}</p>
        <button onclick="deleteTodo('${item}')"><i class="fa fa-trash"></i></button>
      </li>`;
  });
  todoList.innerHTML = content;
};
showTodos();
//create new todo
createTodoButton.onclick = () => {
  const todo = createTodoInput.value;
  let todos = [];
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
  }
  //add validation
  if (todo) {
    todos.push(todo);
    createTodoInput.value = "";
  } else {
    alert("Todo must not be empty");
  }
  //send data to lstorage
  localStorage.setItem("todos", JSON.stringify(todos));

  showTodos();
};

//delete todo 3
function deleteTodo(item) {
  let todos = [];
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
  }
  const updateTodos = todos.filter((data) => data !== item);

  localStorage.setItem("todos", JSON.stringify(updateTodos));
  showTodos();
}

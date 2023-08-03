const createTodoButton = document.querySelector(".todo .add-new-todo button");
const createTodoInput = document.querySelector(".todo .add-new-todo input");
const todoList = document.querySelector(".todo ul");

//show todos data 2
const showTodos = () => {
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
//create new todo 1 
createTodoButton.onclick = () => {
  const todo = createTodoInput.value;
  //add validation
  if (todo) {
    todos.push(todo);
    createTodoInput.value = "";
  } else {
    alert("Todo must not be empty");
  }
  showTodos();
};

//delete todo 3
function deleteTodo(item) {
  const updateTodos = todos.filter((data) => data !== item);

  todos = updateTodos;
  showTodos();
}

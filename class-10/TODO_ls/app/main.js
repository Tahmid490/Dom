const todo_list = document.getElementById("todo_list");
const savebtn = document.getElementById("savebtn");
const inputbtn = document.getElementById("inputbtn");

// show todo data
function showTodos() {
  let todos = [];
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let content = "";
  todos.reverse().forEach((data, index) => {
    content += `<tr>
    <th scope="row">${index + 1}</th>
   <td style="color: Brown">${data}</td>
   <td>In progress</td>
   <td>
     <button onclick="deleteTodos('${data}')" type="submit" class="btn btn-danger">
       Delete
     </button>
</td>
</tr>`;
  });
  todo_list.innerHTML = content;
}
showTodos();

// create todo data
savebtn.onclick = (e) => {
  e.preventDefault();
  let todo = inputbtn.value;
  let todos = [];
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  //add validation
  if (todo.trim()) {
    todos.push(todo);
    inputbtn.value = "";
  } else {
    alert("Todo must not be empty");
  }
  //send data to ls
  localStorage.setItem("todos", JSON.stringify(todos));

  showTodos();
};

//delete todo data
function deleteTodos(data) {
  let todos = [];
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let updateTodos = todos.filter((item) => item !== data);
  localStorage.setItem("todos", JSON.stringify(updateTodos));
  showTodos();
}

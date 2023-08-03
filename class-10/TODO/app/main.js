const todo_list = document.getElementById("todo_list");
const savebtn = document.getElementById("savebtn");
const inputbtn = document.getElementById("inputbtn");

function showTodos() {
  let content = "";
  todos.reverse().forEach((data, index) => {
    content += `<tr>
    <th scope="row">${index + 1}</th>
   <td>${data}</td>
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

savebtn.onclick = (e) => {
  e.preventDefault();
  let todo = inputbtn.value;
  if (todo.trim()) {
    todos.push(todo);
  } else {
    alert("Todo must not be empty");
  }
  inputbtn.value = "";

  showTodos();
};

function deleteTodos(data) {
  let updateTodos = todos.filter((item) => item !== data);
  todos = updateTodos;
  showTodos();
}

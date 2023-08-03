const todo_list = document.getElementById("todo_list");
const savebtn = document.getElementById("savebtn");
const inputbtn = document.getElementById("inputbtn");

// show todo data
function showTodos() {
  let todos = getData("todos");

  let content = "";
  todos.reverse().forEach((data, index) => {
    content += `<tr>
    <th scope="row">${index + 1}</th>
   <td style="color: Brown">${data}</td>
   <td style="color: rgb(0, 255, 98)">In progress</td>
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
  // add validation
  if (todo) {
    insertData("todos", todo);
    inputbtn.value = "";
  } else {
    console.log("Todo can't be empty");
  }
  showTodos();
};

//delete todo data
function deleteTodos(data) {
  let todos = getData("todos");

  let updateTodos = todos.filter((item) => item !== data);
  updateData("todos", updateTodos);
  
  showTodos();
}

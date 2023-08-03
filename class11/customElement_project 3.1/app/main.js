const root = document.getElementById("root");

//create element
const ul = document.createElement("ul");
const li = document.createElement("li");

let content = "";
todos.forEach((item, index) => {
  content += `<li>${item}</li>`;
});

ul.innerHTML = content;

root.appendChild(ul);

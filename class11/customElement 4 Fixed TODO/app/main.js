const root = document.getElementById("root");

const ul = document.createElement("ul");

fruits.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = item;
  ul.appendChild(li);
});
root.appendChild(ul);

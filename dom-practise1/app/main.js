const button = document.querySelector(".box button");
const data = document.querySelector(".box .data");

let foods = [];

const showFoods = () => {
  let content = "";
  foods.reverse().map((item, index) => {
    content += `<h2>${index + 1} ${item} </h2>`;
  });
  data.innerHTML = content;
};

button.onclick = () => {
  let foodName = button.previousElementSibling.value;
  foods.push(foodName);
  showFoods();
};
showFoods();

//button click

// button.addEventListener("click", () => {
//   button.nextElementSibling.nextElementSibling.classList.toggle("btn");
// });

// button.onclick = () => {
//   button.nextElementSibling.nextElementSibling.classList.toggle("btn");
// };

// button.onclick = () => {
//   const foodName = button.previousElementSibling.value;
//   button.nextElementSibling.nextElementSibling.innerHTML = foodName;
//   button.previousElementSibling.value=""
//   // button.nextElementSibling.nextElementSibling.innerHtml = foodName;
// };

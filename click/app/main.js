// const btn = document.getElementById("btn");

//btn click event 1
// btn.onclick = () => {
//   alert("hello world");
// };

// event function outside
// function btnClick() {
//   alert("hello world");
// }
//btn click event 2
// btn.addEventListener("click", btnClick);

//click fire event 1
// btn.onclick = (e) => {
//   console.log(e.target);
//   console.log(btn);
// console.log(this); kaj korbe nah
// console.log(e);
// };
//click fire event 2
// btn.addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e.target);
//   console.log(btn);
// });

//1 tay click korle sob gula sei color
// const btns = document.querySelectorAll(".actions button ");
// btns.forEach((item, index) => {
//   item.onclick = () => {
//     btns.forEach((item, index) => {
//       item.style.backgroundColor = "red";
//     });
//   };
// });

//prottekta different color
// const btns = document.querySelectorAll(".actions button ");
// btns.forEach((item, index) => {
//   item.onclick = () => {
//     if (index === 0) {
//       item.style.backgroundColor = "red";
//     } else if (index === 1) {
//       item.style.backgroundColor = "yellow";
//     } else if (index === 2) {
//       item.style.backgroundColor = "green";
//     } else if (index === 3) {
//       item.style.backgroundColor = "blue";
//     }
//   };
// });

//lao potol je tai click korbo sei tai click asbe with color b.html

// const p = document.querySelectorAll(".actions p");

// p.forEach((item, index) => {
//   item.onclick = () => {
//     item.style.backgroundColor = "red";
//     item.style.color = "white";
//     item.innerHTML = `${item.innerText} <i class ="fa fa-check"></i>`;
//   };
// });

//k.html

const btn = document.querySelector(".actions button");

btn.addEventListener("click", function (event) {
  // e.target.style.backgroundColor = "red";
  // btn.style.color = "green";
  console.log(event);
});

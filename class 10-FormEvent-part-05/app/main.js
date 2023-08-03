const input = document.querySelector(".actions input");
const h1 = document.querySelector(".actions h1");
// input.onfocus = () => {
//   console.log("Focus");
// };
// input.onblur = () => {
//   console.log("Blur");
// };

// input.addEventListener("change", function (e) {
//   console.log("Change");
// });

input.oninput = (e) => {
  const value = e.target.value;
  h1.innerHTML = value;
};

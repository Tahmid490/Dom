const input = document.querySelector(".actions input");
const h1 = document.querySelector(".actions h1");

// input.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });

// input.addEventListener("keydown", function () {
//   console.log("done");
// });

// input.addEventListener("keyup", function () {
//   console.log("done");
// });

input.addEventListener("keyup", function (e) {
  const value = this.value;
  h1.innerHTML = value;
});

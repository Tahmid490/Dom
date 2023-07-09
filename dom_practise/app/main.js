// const heading = document.querySelector(".box h1");
// //heading style
// heading.style.color = "#fff";
// heading.style.backgroundColor = "black";
// heading.style.padding = "10px";
// //artical style
// heading.nextElementSibling.style.color = "#FFF";
// heading.nextElementSibling.style.backgroundColor = "red";
// heading.nextElementSibling.style.padding = "10px";
// //button
// heading.nextElementSibling.nextElementSibling.style.color = "#fff";
// heading.nextElementSibling.nextElementSibling.style.backgroundColor = "orange";
// heading.nextElementSibling.nextElementSibling.style.padding="10px 20px"
// heading.nextElementSibling.nextElementSibling.style.border="1px solid orange"

// //box

// heading.parentElement.style.padding="10px";
// heading.parentElement.style.boxShadow="0px 0px 5px 2px #ccc";

const button = document.querySelector(".box button");

//button click
button.addEventListener("click", function () {
  // alert("click done")
  // button.previousElementSibling.previousElementSibling.style.color="red"
  // button.previousElementSibling.previousElementSibling.style.backgroundColor="green"
  // button.previousElementSibling.previousElementSibling.style.padding="10px"

  button.previousElementSibling.previousElementSibling.classList.toggle(
    "nakajaka"
  );
});

button.addEventListener("dblclick", () => {
  button.previousElementSibling.classList.toggle("jakanaka");
});

button.addEventListener("mouseenter", function () {
  button.parentElement.parentElement.classList.add("nakajaka");
  button.parentElement.parentElement.classList.remove("jakanaka");
});

button.addEventListener("mouseleave", function () {
  button.parentElement.parentElement.classList.remove("nakajaka");
  button.parentElement.parentElement.classList.add("jakanaka");
});

// button.addEventListener("mouseleave", function () {
//     button.parentElement.parentElement.style.backgroundColor="pink";
//   });

// button.addEventListener("mousedown", () => {
//     button.parentElement.parentElement.style.backgroundColor="pink"
// });

// button.addEventListener("mouseup", () => {
//     button.parentElement.parentElement.style.backgroundColor="red"
// });

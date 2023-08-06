const inputText = document.getElementById("inputText");
const font_size = document.getElementById("font_size");
const span = document.querySelector("span");
const font_color = document.querySelector(".font_color");
const bg_color = document.querySelector(".bg_color");
const result = document.querySelector(".result");
const Fruits = document.querySelector(".Fruits");
const text_Align = document.querySelector(".text_Align");
const font_family = document.querySelector(".font_family");
inputText.oninput = (e) => {
  const value = e.target.value;
  result.innerHTML = `${value}`;
};
font_size.oninput = (e) => {
  const value = e.target.value;
  span.innerHTML = value;
  result.style.fontSize = `${value}px`;
};

font_color.oninput = (e) => {
  const value = e.target.value;
  result.style.color = `${value}`;
};

bg_color.oninput = (e) => {
  const value = e.target.value;
  result.style.backgroundColor = `${value}`;
};

Fruits.oninput = (e) => {
  const value = e.target.value;
  result.innerHTML = `${value}`;
};
text_Align.oninput = (e) => {
  const value = e.target.value;
  result.style.textAlign = `${value}`;
};
font_family.oninput = (e) => {
  const value = e.target.value;
  result.style.fontFamily = `${value}`;
};

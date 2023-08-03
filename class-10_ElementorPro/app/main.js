const input = document.querySelector(".actions .fs");
const colors = document.querySelector(".actions .colors");
const h1 = document.querySelector(".actions h1");
const span = document.querySelector(".actions span");
const drop = document.querySelector(".actions .drop");
const text_Align = document.querySelector(".actions .text_Align");
const font_family_style = document.querySelector(".font_family_style");
const background_color = document.querySelector(".background_color");
console.log(background_color);

input.oninput = (e) => {
  const value = e.target.value;
  span.innerHTML = value;
  h1.style.fontSize = `${value}px`;
};

colors.oninput = (e) => {
  const val = e.target.value;
  h1.style.color = `${val}`;
};

drop.oninput = (e) => {
  const val = e.target.value;
  h1.innerHTML = `${val}`;
};

text_Align.oninput = (e) => {
  const val = e.target.value;
  h1.style.textAlign = `${val}`;
};

font_family_style.oninput = (e) => {
  const val = e.target.value;
  h1.style.fontFamily = `${val}`;
};

background_color.oninput = (e) => {
  const value = e.target.value;
  h1.style.backgroundColor = `${value}`;
};

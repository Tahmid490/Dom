const start = document.getElementById("start");
const stop = document.getElementById("stop");
const home = document.getElementById("home");

const h1 = document.getElementById("h1");

let bom;
start.onclick = (e) => {
  bom = setTimeout(() => {
    home.setAttribute(
      "src",
      "https://cdn.vectorstock.com/i/1000x1000/14/77/house-on-fire-icon-flat-style-vector-8881477.webp"
    );
  }, 2000);
};

stop.onclick = (e) => {
  clearTimeout(bom);
};

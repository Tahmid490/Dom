const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const h1 = document.getElementById("h1");

let count = 0;

let counter;
start.onclick = () => {
  counter = setInterval(() => {
    count++;
    h1.innerHTML = count;
  }, 1000);
};

stop.onclick = () => {
  clearInterval(counter);
};

reset.onclick = () => {
  clearInterval(counter);
  count = 0;
  h1.innerHTML = count;
};

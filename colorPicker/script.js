let index = 0;
let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
];

console.log("hello ");

function changeColors() {
  let body = document.body;
  body.style.backgroundColor = colors[index];
  index++;
  if (index >= colors.length) {
    index = 0;
  }
}

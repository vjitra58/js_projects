console.log("hello");

const number = document.querySelector(".number");
const increase = document.querySelector("#btn1");
const decrease = document.querySelector("#btn2");
const reset = document.querySelector("#btn3");

let count = 0;
number.innerHTML = count;

const increaseCount = () => {
  count++;
  number.innerHTML = count;
};

const decreaseCount = () => {
  if (count == 0) return;
  count--;
  number.innerHTML = count;
};

increase.addEventListener("click", increaseCount);

decrease.addEventListener("click", decreaseCount);

reset.addEventListener("click", () => {
  count = 0;
  number.innerHTML = count;
});

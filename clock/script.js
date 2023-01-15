console.log("hello");

setInterval(setclock, 1000);

const hoursHand = document.querySelector("[data-hour]");
const minuteHand = document.querySelector("[data-minute]");
const secondHand = document.querySelector("[data-second]");

function setclock() {
  let currDate = new Date();
  let secondRatio = currDate.getSeconds() / 60;
  let minuteRatio = (secondRatio + currDate.getMinutes()) / 60;
  let hoursRatio = (minuteRatio + currDate.getHours()) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hoursHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setclock();

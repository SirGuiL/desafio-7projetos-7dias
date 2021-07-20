let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalClock(hour, minute, second);
  analogClock(hour, minute, second);
  getColors(hour);
}

function digitalClock(hour, minute, second) {
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;
}

function analogClock(hour, minute, second) {
  let sDeg = (360 / 60) * second - 90;
  let mDeg = (360 / 60) * minute - 90;
  let hDeg = (360 / 12) * hour - 90;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

function getColors(hour) {
  let body = document.querySelector("body");
  let title = document.querySelector("#time_day");

  if (hour < 12 && hour > 6) {
    body.style.background =
      "linear-gradient(90deg, rgba(235,194,73,1) 0%, rgba(43,255,231,1) 100%)";
    title.innerText = "Bom dia!";
  } else if (hour >= 12 && hour <= 18) {
    body.style.background =
      "linear-gradient(90deg, rgba(0,140,131,1) 0%, rgba(23,53,110,1) 100%)";
    title.innerText = "Boa Tarde!";
  } else {
    body.style.background =
      "linear-gradient(90deg, rgba(23,53,110,1) 0%, rgba(12,17,27,1) 100%)";
    title.innerText = "Boa Noite!";
  }
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();

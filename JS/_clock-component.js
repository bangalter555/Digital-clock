//IMPORTS
import { $D } from "./_elements.js";

const d = document;
let clockHour;

//EXPORTS
export const digitalClock = (clock, btnStart, btnStop) => {
  $D.addEventListener("click", (e) => {
    let target = e.target;
    if (target.matches(btnStart)) {
      clockHour = setInterval(() => {
        let hour = new Date().toLocaleTimeString();
        $D.querySelector(clock).innerHTML = `${hour}`;
      }, 1000);

      target.disabled = true;
    }

    if (target.matches(btnStop)) {
      clearInterval(clockHour);
      $D.querySelector(clock).innerHTML = null;
      $D.querySelector(btnStart).disabled = false;
    }
  });
};

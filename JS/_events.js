//IMPORT
import { digitalClock } from "./_clock-component.js";
import { $D } from "./_elements.js";

//EVENTS
$D.addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#clock", "#button-1", "#button-2");
  digitalClock("#clock", ".show-time", ".hide-time");
});

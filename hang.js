// variables
var display = document.getElementById("display"),
  start = document.getElementById("start"),
  interval = null,
  status = "stop",
  seconds = 0,
  minutes = 0,
  hours = 0;

// increments stopwatch and displays it
function stopWatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  // Display stopwatch
  display.innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
}

// start/stop stopwatch
function startWatch() {
  if (status === "stop") {
    interval = window.setInterval(stopWatch, 1000);
    start.innerHTML = "Pause";
    status = "start";
  } else {
    window.clearInterval(interval);
    start.innerHTML = "Start";
    status = "stop";
  }
}

// reset stopwatch
function resetWatch() {
  window.clearInterval(interval);
  (seconds = 0), (minutes = 0), (hours = 0);
  display.innerHTML = "00:00:00";
  start.innerHTML = "Start";
}

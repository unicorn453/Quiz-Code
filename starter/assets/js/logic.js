// Selects element by class
var timeEl = document.querySelector(".timer");

// Selects element by id
var mainEl = document.getElementById("time");

var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    mainEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  //   var imgEl = document.createElement("img");
  //   imgEl.setAttribute("src", "images/image_1.jpg");
  //   mainEl.appendChild(imgEl);
}

setTime();

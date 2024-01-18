const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Madrid", "Berlin", "Athens", "Skopje"],
    correctAnswer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Madrid", "Ryga", "Athens", "Rome"],
    correctAnswer: "Rome",
  },
  {
    question: "What is the capital of Belgium?",
    options: ["Berlin", "Brussels", "Sofia", "Luxembourg"],
    correctAnswer: "Brussels",
  },
];
// adding sound

const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");
function playCorrectSound() {
  correctSound.play();
}
function playIncorrectSound() {
  incorrectSound.play();
}

var modal = document.getElementById("customModal");
var result = document.getElementById("result");
let currentQuestionIndex = 0;

function showQuestions() {
  const title = document.getElementById("title");
  const optionsListElement = document.getElementById("optionsList");

  title.innerHTML = quizQuestions[currentQuestionIndex].question;
  optionsListElement.innerHTML = "";

  const options = quizQuestions[currentQuestionIndex].options;

  for (let i = 0; i < options.length; i++) {
    const listItem = document.createElement("button");
    listItem.textContent = options[i];
    optionsListElement.appendChild(listItem);

    listItem.addEventListener("click", function (event) {
      var clickedButton = this;
      event.preventDefault();
      showMessage(clickedButton);
    });
  }

  var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
  var result = document.getElementById("result");

  function showMessage(clickedButton) {
    var message =
      clickedButton.textContent === correctAnswer ? "Correct" : "Wrong";
    result.textContent = message;
    modal.style.display = "block";

    setTimeout(function () {
      modal.style.display = "none";
      nextQuestion();
      if (message === "Correct") {
        playCorrectSound();
      } else {
        playIncorrectSound();
      }
    }, 500);
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestions();
  } else {
    setTimeout(function () {
      modal.style.display = "none";
      window.location.href = "highscores.html";
      if (message === "Correct") {
        playCorrectSound();
      } else {
        playIncorrectSound();
      }
    }, 500);
  }
}

showQuestions();

// timer
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

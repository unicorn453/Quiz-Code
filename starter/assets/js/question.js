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
var globalResult = document.getElementById("result");
let currentQuestionIndex = 0;
let currentMessage;
function showQuestions() {
  const title1 = document.getElementById("title");
  const optionsListElement = document.getElementById("optionsList");
  title1.innerHTML = quizQuestions[currentQuestionIndex].question;
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
    var currentMessage =
      clickedButton.textContent === correctAnswer ? "Correct" : "Wrong";
    globalResult.textContent = currentMessage;
    result.textContent = currentMessage;
    modal.style.display = "block";
    if (currentMessage === "Wrong") {
      substractTime();
    }
    setTimeout(function () {
      modal.style.display = "none";
      nextQuestion(currentMessage);
      if (currentMessage === "Correct") {
        playCorrectSound();
      } else {
        playIncorrectSound();
      }
      seMessage();
    }, 500);
  }
}

function nextQuestion(message) {
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
  var timerInterval = setInterval(function () {
    secondsLeft--;
    mainEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      window.location.href = "highscores.html";
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}

setTime();
function substractTime() {
  var result = document.getElementById("result");

  if (result.textContent === "Wrong") {
    secondsLeft -= 10; // Subtract 10 seconds
  }
}
function seMessage() {
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  var currentScore = {
    score: calculateScore(),
  };
  scores.push(currentScore);
  localStorage.setItem("scores", JSON.stringify(scores));
}

function calculateScore() {
  var currentScore = 0;

  if (globalResult.textContent === "Correct") {
    currentScore += 1;
  }

  return currentScore;
}

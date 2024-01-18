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
    }, 500);
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestions();
  } else {
    window.location.href = "highscores.html";
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

// previous attempt
// // Quiz Questions
// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "Rome"],
//     correctAnswer: "Paris",
//   },
//   {
//     question: "What is the capital of Germany?",
//     options: ["Madrid", "Berlin", "Athens", "Skopje"],
//     correctAnswer: "Berlin",
//   },
//   {
//     question: "What is the capital of Italy?",
//     options: ["Madrid", "Ryga", "Athens", "Rome"],
//     correctAnswer: "Rome",
//   },
//   {
//     question: "What is the capital of Belgium?",
//     options: ["Berlin", "Brussels", "Sofia", "Luxembourg"],
//     correctAnswer: "Brussels",
//   },
// ];
// const title = document.getElementById("title");
// title.innerHTML = `
// ${quizQuestions[0].question}
// `;
// const optionsListElement = document.getElementById("optionsList");
// var optionCities = quizQuestions.map((question) => question.options);
// var listItem0 = document.createElement("button");
// var listItem1 = document.createElement("button");
// var listItem2 = document.createElement("button");
// var listItem3 = document.createElement("button");

// for (let i = 0; i < optionCities.length; i++) {
//   var city = optionCities[i];
// }
// listItem0.textContent = city[0];
// listItem1.textContent = city[1];
// listItem2.textContent = city[2];
// listItem3.textContent = city[3];
// optionsListElement.appendChild(listItem0);
// optionsListElement.appendChild(listItem1);
// optionsListElement.appendChild(listItem2);
// optionsListElement.appendChild(listItem3);

// var correct = "Correct"; // You can assign any value to resultContent
// var incorrect = "Wrong";
// var correctAnswer = quizQuestions[0].correctAnswer;
// var result = document.getElementById("result");

// // //adding event listener for the click of the button of Item 0
// listItem0.addEventListener("click", function (event) {
//   event.preventDefault();
//   var clickedButton = this;
//   // clicked();
//   showMessage(clickedButton);
// });
// // //adding event listener for the click of the button of Item 1
// listItem1.addEventListener("click", function (event) {
//   event.preventDefault();
//   var clickedButton = this;
//   // clicked();
//   showMessage(clickedButton);
// });
// // //adding event listener for the click of the button of Item 2
// listItem2.addEventListener("click", function (event) {
//   event.preventDefault();
//   var clickedButton = this;
//   // clicked();
//   showMessage(clickedButton);
// });
// // //adding event listener for the click of the button of Item 3
// listItem3.addEventListener("click", function (event) {
//   event.preventDefault();
//   var clickedButton = this;
//   // clicked();
//   showMessage(clickedButton);
// });

// function clicked(clickedButton) {
//   if (clickedButton === correctAnswer) {
//     window.location.href = "question2.html";
//   } else {
//     window.location.href = "question2.html";
//   }
// }
// function showMessage(clickedButton) {
//   var modal = document.getElementById("customModal");
//   var result = document.getElementById("result");
//   var message =
//     clickedButton.textContent === quizQuestions[0].correctAnswer
//       ? "Correct"
//       : "Wrong";
//   result.textContent = message;
//   modal.style.display = "block";

//   setTimeout(function () {
//     modal.style.display = "none";
//     clicked(clickedButton);
//   }, 500);
// }
// quiz.js

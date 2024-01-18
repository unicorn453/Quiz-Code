const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
];
const title = document.getElementById("title");
title.innerHTML = `
${quizQuestions[0].question}
`;
const optionsListElement = document.getElementById("optionsList");
var optionCities = quizQuestions.map((question) => question.options);
var listItem0 = document.createElement("button");
var listItem1 = document.createElement("button");
var listItem2 = document.createElement("button");
var listItem3 = document.createElement("button");

for (let i = 0; i < optionCities.length; i++) {
  var city = optionCities[i];
}
listItem0.textContent = city[0];
listItem1.textContent = city[1];
listItem2.textContent = city[2];
listItem3.textContent = city[3];
optionsListElement.appendChild(listItem0);
optionsListElement.appendChild(listItem1);
optionsListElement.appendChild(listItem2);
optionsListElement.appendChild(listItem3);

var correct = "Correct"; // You can assign any value to resultContent
var incorrect = "Wrong";
var correctAnswer = quizQuestions[0].correctAnswer;
var result = document.getElementById("result");

// //adding event listener for the click of the button of Item 0
listItem0.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = this;
  clicked();
  showMessage(clickedButton);
});
// //adding event listener for the click of the button of Item 1
listItem1.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = this;
  clicked();
  showMessage(clickedButton);
});
// //adding event listener for the click of the button of Item 2
listItem2.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = this;
  clicked();
  showMessage(clickedButton);
});
// //adding event listener for the click of the button of Item 3
listItem3.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = this;
  // clicked();
  showMessage(clickedButton);
});

function clicked(clickedButton) {
  if (clickedButton === correctAnswer) {
    clearInterval(functionThatIncludesSetInterval);
    window.location.href = "question2.html";
  } else {
    window.location.href = "question2.html";
  }
}
function showMessage(clickedButton) {
  var modal = document.getElementById("customModal");
  var result = document.getElementById("result");
  // adding message to local storage
  var storedMessage = localStorage.getItem("storedMessage");
  // clear store message after retrieving
  if (storedMessage) {
    message = storedMessage;
    localStorage.removeItem("storedMessage");
  } else {
    // adding if else statement so the message is based on the condition
    if (clickedButton.textContent === correctAnswer) {
      message = "Correct";
    } else {
      message = "Wrong";
    }
    // storing the message to the local storage
    localStorage.setItem("storedMessage", message);
  }
  result.textContent = message;
  modal.style.display = "block";

  // Hide the modal after a delay (e.g., 2 seconds)
  setTimeout(function () {
    modal.style.display = "none";
  }, 5000);
}

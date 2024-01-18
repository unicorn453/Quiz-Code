const quizQuestions = [
  {
    question: "What is the capital of Germany?",
    options: ["Madrid", "Berlin", "Athens", "Skopje"],
    correctAnswer: "Berlin",
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
  // clicked();
  showMessage(clickedButton);
});
// //adding event listener for the click of the button of Item 1
listItem1.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = this;
  // clicked();
  showMessage(clickedButton);
});
// //adding event listener for the click of the button of Item 2
listItem2.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = this;
  // clicked();
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
    window.location.href = "question3.html";
  } else {
    window.location.href = "question3.html";
  }
}
function showMessage(clickedButton) {
  var modal = document.getElementById("customModal");
  var result = document.getElementById("result");
  var message =
    clickedButton.textContent === quizQuestions[0].correctAnswer
      ? "Correct"
      : "Wrong";
  result.textContent = message;
  modal.style.display = "block";

  setTimeout(function () {
    modal.style.display = "none";
    clicked(clickedButton);
  }, 500);
}

// // Previous attempts
// listItem1.addEventListener("click", function (event) {
//   event.preventDefault();
//   var clickedButton = this;

//   if (this === listItem2) {
//     result.innerHTML = "Correct";
//   } else {
//     result.innerHTML = "Wrong";
//   }
// });
// listItem2.addEventListener("click", function (event) {
//   event.preventDefault();
//   var clickedButton = this;

//   if (this === listItem2) {
//     result.innerHTML = "Correct";
//   } else {
//     result.innerHTML = "Wrong";
//   }
// });

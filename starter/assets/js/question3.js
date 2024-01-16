const quizQuestions = [
  {
    question: "What is the capital of Italy?",
    options: ["Madrid", "Ryga", "Athens", "Rome"],
    correctAnswer: "Rome",
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
//adding event listener for the click of the button
listItem0.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = city[0];
  console.log(clickedButton);
});
listItem1.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = city[1];
  console.log(clickedButton);
});
listItem2.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = city[2];
  console.log(clickedButton);
});
listItem3.addEventListener("click", function (event) {
  event.preventDefault();
  var clickedButton = city[3];
  console.log(clickedButton);
});

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
var listItem0 = document.createElement("li");
var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");
var listItem3 = document.createElement("li");

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

//This code implies various ways for execution that do not include repetitive code but did not work.
// for (const city of optionCities) {
//   for (let i = 0; i < optionCities.length; i++) {
//     // document.createElement("li");
//     listItem.textContent = city[i];
//   }
// }
// optionsListElement.appendChild(listItem);

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
];
const optionsListElement = document.getElementById("optionsList");
var optionCities = quizQuestions.map((question) => question.options);
optionCities.forEach((element) => {
  console.log(element);
  const listItem = document.createElement("li");
  listItem.textContent = element;
  optionsListElement.appendChild(listItem);
});

// Quiz Questions
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
];
// Creating a new HTML element
const question1 = document.createElement("div");

// Setting content for the new element
question1.innerHTML = `
  <h1>${quizQuestions[0].question}</h1>
  <p>${quizQuestions[0].options.join(", ")}</p>
`;
// Appending the new element to the body of the document
document.body.appendChild(question1);
// Function to handle button click event
// function openHTML() {
//   // Change the location to the new HTML file
//   window.location.href=""
// }

// // Attach the function to the button click event
// document.getElementById("start").addEventListener("click", openHTML());

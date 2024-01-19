function getScores() {
  return JSON.parse(localStorage.getItem("scores")) || [];
}

var highScores = document.getElementById("highscores");

function displayScores() {
  var scores = getScores();
  let resultFinal = 0;
  highScores.innerHTML = "";

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (score.score === 1 && score.userInitials) {
      resultFinal += 10;
      var listItem = document.createElement("li");
      listItem.textContent = score.userInitials + ": " + resultFinal;
      highScores.appendChild(listItem);
    }
  }
}

function getUserInitials() {
  var input = document.createElement("input");
  var submit = document.createElement("button");

  input.placeholder = "Enter your initials";
  submit.innerHTML = "Submit";

  highScores.appendChild(input);
  highScores.appendChild(submit);
  submit.addEventListener("click", function () {
    var userInitials = input.value;
    var scores = getScores();
    scores.push({ userInitials: userInitials, score: 1 });
    localStorage.setItem("scores", JSON.stringify(scores));
    input.remove();
    submit.remove();
    displayScores();
  });
  return input;
}

getUserInitials();

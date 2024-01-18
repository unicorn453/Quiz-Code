var highScores = document.getElementById("highscores");

function getScores() {
  return JSON.parse(localStorage.getItem("scores")) || [];
}


function displayScores() {
  var scores = getScores();
  let resultFinal = 0;

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (score.score === 1) {
      resultFinal += 10;

      // create a new li element
      var listItem = document.createElement("li");

      
      listItem.textContent = "Score: " + resultFinal;

     
      highScores.appendChild(listItem);
    }
  }
}

displayScores();

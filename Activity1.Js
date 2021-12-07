var Score = 0;
function updateScore() {
  Score = Score + 2;
  document.getElementById("score").innerHTML = "Score:" + Score;
}
function saveScore() {
  localStorage.setItem("score", Score);
}
function nextPage() {
  window.location = "Index.html";
}

function decrease() {
  Score = Score - 1;
  document.getElementById("score").innerHTML= "Score:" + Score;
}

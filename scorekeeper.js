var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1score");
var p2Display = document.getElementById("p2score");
var p1Score = 0;
var p2Score = 0;
var finalScore = 5;
var gameOver = false;
var numInput = document.getElementById("input");
var limit = document.getElementById("limit");
var finalWinner = document.getElementById("finalwinner");

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;

    }
    if (p1Score === finalScore) {
        finalWinner.textContent = "Player 1 Wins!";
        gameOver = true;
        p1Display.classList.add("winner");


    }

    p1Display.textContent = p1Score;



});


p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
    }
    if (p2Score === finalScore) {
        gameOver = true;
        p2Display.classList.add("winner");
        finalWinner.textContent = "Player 2 Wins!"

    }
    p2Display.textContent = p2Score;

});



resetButton.addEventListener("click", function() {
    reset()

});

numInput.addEventListener("change", function() {
    limit.textContent = input.value;
    finalScore = Number(input.value);
    reset()


});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    finalWinner.textContent = "";

};
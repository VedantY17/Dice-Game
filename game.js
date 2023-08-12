var btn = document.getElementById("btns")
var point1 = document.getElementById("point1");
var point2 = document.getElementById("point2");
var score1 = 0;
var score2 = 0;
var counter = 0;

btn.addEventListener("click", () => {

if (counter < 10) {

    var randomnumber1 = Math.floor(Math.random()*6) + 1;
    var randomimage1 = "./dice" + randomnumber1 + ".png";
    var dice1 = document.querySelectorAll("img")[0]
    dice1.setAttribute("src", randomimage1)
    
    var randomnumber2 = Math.floor(Math.random()*6) + 1;
    var randomimage2 = "./dice" + randomnumber2 + ".png";
    var dice2 = document.querySelectorAll("img")[1]
    dice2.setAttribute("src", randomimage2)
    
    if (randomnumber1>randomnumber2) {
        document.querySelector("h1").textContent ="Player 1 wins"
        score1 += 5; // Add 5 points to Player 1
        point1.textContent = score1; // Update the score in the HTML
    } 
    else if (randomnumber2>randomnumber1) {
        document.querySelector("h1").textContent ="Player 2 wins"
        score2 += 5; // Add 5 points to Player 2
        point2.textContent = score2; // Update the score in the HTML
    }
    else{
        document.querySelector("h1").textContent ="It's a Draw"
    }

    counter++;
} 
else {
    btn.disabled = true; // Disable the button after 10 iterations

    if (score1 > score2) {
        document.querySelector("h1").textContent = "Player 1 Wins the Match";
    } else if (score2 > score1) {
        document.querySelector("h1").textContent = "Player 2 Wins the match";
    } else{
        document.querySelector("h1").textContent = "Match Drawn!";
    }
}

})


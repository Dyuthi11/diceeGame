function game() {
  // Getting random number for first image
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6 + 1);
  document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

  // Getting random number for second image
  var randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6 + 1);
  document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

  // Changing the h1 to show winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇 Player One Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player Two Wins! 🥇";
  } else {
    document.querySelector("h1").innerHTML = "🥇 It's a draw! 🥇";
  }
}

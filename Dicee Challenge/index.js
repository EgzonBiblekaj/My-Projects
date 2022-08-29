let randomNumber1 = Math.floor(Math.random()*6) + 1;// generates random numbers 1-6

let randomImageSrc1 = "images/dice" + randomNumber1 + ".png";//images/dice1.png - images/dice6.png

document.querySelector(".img1").setAttribute("src", randomImageSrc1);

let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSrc2);

//Code that determines the winner!

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
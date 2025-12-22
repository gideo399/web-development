var randomNum1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice"+ randomNum1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);





var dice2generator = Math.floor(Math.random()*6) + 1;
var dice2source = "images/dice"  + dice2generator + ".png";

var diceImage2 = document.querySelectorAll("img")[1];
diceImage2.setAttribute("src", dice2source);

if (randomNum1> dice2generator){
    document.querySelector("h1").innerHTML = "DICE ONE WON";
}else if(randomNum1=== dice2generator){
    document.querySelector("h1").innerHTML = "IT IS A DRAW";
}else if(randomNum1< dice2generator){
    document.querySelector("h1").innerHTML = " DICE TWO WON";
}
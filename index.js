<<<<<<< HEAD

var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
    
        var buttonInnerHtml = this.innerHTML;

       makeSound(buttonInnerHtml);

        }
        
    )
}
 


document.addEventListener("keypress", function(event){
  makeSound(event.key);
})

function  makeSound(key){
     switch(key){
            case "w":
              
                 var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                
             break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
             break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
             break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();

              break;
            case "j":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();

             break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
             break;
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
             break;

            default:
                console.log(buttonInnerHtml);
     }
}



//      var audio = new Audio("sounds/tom-1.mp3");
   //     audio.play();
=======
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
>>>>>>> 5bac6dc29f934baac5e9479bcdbea4a6442fdc46

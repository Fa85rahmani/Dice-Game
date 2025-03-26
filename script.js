var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImg = "dice" + randomNumber1 +".png";
var image1 = document.querySelectorAll("img:not(.logo)")[0];
image1.setAttribute("src" ,diceImg );
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img:not(.logo)")[1].setAttribute("src" , randomImage2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML= " It's a  Draw!";
}

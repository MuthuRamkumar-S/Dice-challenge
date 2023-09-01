var randomnum1 = Math.floor(Math.random()*6 + 1);
var p1 = "images/dice"+randomnum1+".png";
var randomnum2 = Math.floor(Math.random()*6 + 1);
var p2 = "images/dice"+randomnum2+".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",p1);
image2.setAttribute("src",p2);

if(randomnum1>randomnum2){
    document.getElementById("test").innerHTML = "Player 1 Wins"
}
else if(randomnum1 === randomnum2){
    document.getElementById("test").innerHTML = "Draw"
}
else{
    document.getElementById("test").innerHTML = "Player 2 Wins"
}
var user_score=0;
var total_play=prompt("Please Enter Total Plays you want to play");
var total=0;
function myFunction() {
  
var userChoice = prompt("Do you choose rock, paper,lizard,spock or scissors?").toLowerCase();
  
if (! userChoice) {
document.getElementById("demo1").innerHTML=("<p>Place a valid choice.</p>");
} else {

document.getElementById("demo1").innerHTML=("<p>Player 1:" + " " + userChoice + "</p>");
}
var min=0;
var max=4;

var c_Choice = Math.floor(Math.random() * (max) + min) ;
if (c_Choice == 0) {
c_Choice = "rock";
} else if(c_Choice ==1) {
c_Choice = "paper";
} else if(c_Choice ==2){
c_Choice = "lizard";
}
else if(c_Choice ==3){
c_Choice = "spock";
}else if(c_Choice ==4){
c_Choice = "Scissors";
}


document.getElementById("demo2").innerHTML=("<p>Computer:" + " " + c_Choice + "</p>");

var compare = function(choice1,choice2) {
if (choice1 === "rock") {
if (choice2 === "scissors") {
  
return "You win!";
}
else if (choice2 === "paper") {

return "You lose! Try again.";
}
else if (choice2 === "lizard") {

return "You win!";
}
else if (choice2 === "spock") {

return "You lose! Try again.";
}
else {

return "Tied Try Again";
}
}
if (choice1 === "paper") {
if (choice2 === "rock") {
  
return "You win!";
}
else if(choice2=="lizard")
{
return "You lose! Try again.";
}
else if(choice2=="spock")
{
return "You win!";
}
else if(choice2=="scissors"){

return "You lose! Try again.";
}
else{
return "Tied Try Again";
}
}
if (choice1 === "scissors") {
if (choice2 === "rock") {

return "You lose! Try again.";
}
else if (choice2 === "paper") {
  
return "You win!";
}
else if (choice2 === "lizard") {

return "You win!";
}
else if (choice2 === "spock") {
  
return "You lose! Try again.";
}
  
  
else{
return "Tied Try Again";
}
}
if (choice1 === "lizard") {
if (choice2 === "rock") {
  
return "You lose! Try again.";
}
else if (choice2 === "paper") {

return "You win!";
}
else if (choice2 === "scissors") {

return "You lose! Try again.";
}
else if (choice2 === "spock") {

return "You win!";
}
  
else{
return "Tied Try Again";
}
  
}
if (choice1 === "spock") {
if (choice2 === "rock") {

return "You win!";
}
else if (choice2 === "paper") {
  
return "You lose! Try again.";
}
else if (choice2 === "scissors") {

return "You win!";
}
else if (choice2 === "lizard") {
  
return "You lose! Try again.";
}
  
else{
return "Tied Try Again";
}
  
}
  
};


if(total<total_play)
{
var results = compare(userChoice,c_Choice);
total=total+1;
if(results==="You win!")
{
user_score=user_score+1;
}
  

document.getElementById("demo3").innerHTML=("<br><hr><br>" + results);
document.getElementById("demo4").innerHTML=("<br><hr><br>" + "You Won "+user_score+ " Out Of "+total);

}
else
{
alert("You already Played Maximum Please refresh");
}
}
var feedback = prompt("Please rate my page out of 10");
 if(feedback<8){
     console.log("Thank you! This is very helpful for me to see that I'm on the right track!!");
 }
 else{
     console.log("I'll keep practicing coding and improving!");
 }
 var userChoice = prompt("Do you choose rock, paper or scissors?");
 var computerChoice = Math.random();
 if (computerChoice <= 0.33) {
    computerChoice = "rock"
} else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
		 else if (choice1 === "paper")
if (choice2==="rock")
{
return "paper wins";
}
else
{
return "scissors wins";
}
  else if (choice1==="scissors") 
if(choice2==="rock")
{
    return "rock wins!"
}
else
{
    return "scissors wins!"
}
};
compare(userChoice, computerChoice);
        
    
    }
};
 
        
		
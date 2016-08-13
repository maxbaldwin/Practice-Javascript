//Solving problem one, incrementing number by 5 and stopping at 120

//create variable
var count;  
//create for loop with variable above. "Count" starts at 5. Then state where you want it to end, 120.
//then state by how many numbers you want to count it "5"
for (count = 5; count <= 120; count = count +5) {
  document.write(count + " "); 
};

//Solving problem two, decrementing by 2 and stopping at value 1

//create variable
var count2;
//create for loop with variable above number 4096. Then state where you want it to end, 1. 
//then state by how many numbers you want it to be divided by "2"
for (count2 = 4096; count2 > 1; count2/=2) {
  document.write(count2 + " "); 
} ; 

//Solving problem three, creating an array of presidents and use string concatenation to put them to the DOM

//create two arrays you'll be using
var firstNamePresidents = ["George", "John", "Thomas"]; 
var lastNamePresidents = ["Washington", "Adams", "Jefferson"]; 
var presidentElement = document.getElementById("presidents");

for (i = 0; i < firstNamePresidents.length; i++) {
  presidentElement.innerHTML += ("<div>" + firstNamePresidents[i] + " " + lastNamePresidents[i] + "</div>")
}

//can't do below, it says to create a for loop
//console.log("President #1 was " + firstNamePresidents[0] + " " + lastNamePresidents[0])
//console.log("President #1 was " + firstNamePresidents[1] + " " + lastNamePresidents[1])
//console.log("President #1 was " + firstNamePresidents[2] + " " + lastNamePresidents[2])
//Solving problem one, incrementing number by 5 and stopping at 120

//create variable
var count;  
//create for loop with variable above. "Count" starts at 5. Then state where you want it to end, 120.
//then state by how many numbers you want to count it "5"
for (count = 5; count <= 120; count = count +5) {
  document.getElementById("count5").innerHTML += count + " ";
};

var answer = "A";

// create a variable to store the total and set it to 0
var total = 0;

// display the answer and total to the console
console.log("Answer: " + answer + ", Total: " + total);

// Test 1: answer = "A", total = 0
var answer = "A";
var total = 0;
console.log("Expected Output: Answer: A, Total: 0");
console.log("Actual Output: Answer: " + answer + ", Total: " + total);

// Test 2: answer = "B", total = 0
var answer = "B";
var total = 0;
console.log("Expected Output: Answer: B, Total: 0");
console.log("Actual Output: Answer: " + answer + ", Total: " + total);

// create a variable to store the user's answer with a default value of "A"
var answer = "A";

// create a variable to store the total and set it to 0
var total = 0;

// check the value of the answer variable and update the total variable accordingly
if (answer === "A") {
  total += 4;
} else if (answer === "B") {
  total += 3;
} else if (answer === "C") {
  total += 2;
} else if (answer === "D") {
  total += 1;
} else {
  console.log("Invalid answer.");
}

// display the answer and total to the console


var question1 = prompt("Which class will you like the most?\nA: Potions\nB: Herbology\nC: Charms\nD: Defense Against Dark Arts");

// Initialize total to zero
var total = 0;

// Assign points based on user's choice
if (question1 === "A") {
  total += 4;
} else if (question1 === "B") {
  total += 3;
} else if (question1 === "C") {
  total += 2;
} else if (question1 === "D") {
  total += 1;
} else {
  alert("Invalid choice. Please choose A, B, C, or D.");
}

// Second question
var question2 = prompt("Which ability would you like to have?\nA: Mind Control\nB: Super Strength\nC: Extreme Intelligence\nD:  Flying");

// Assign points based on user's choice for question 2
if (question2 === "A") {
    total += 4;
  } else if (question2 === "B") {
    total += 3;
  } else if (question2 === "C") {
    total += 2;
  } else if (question2 === "D") {
    total += 1;
  } else {
    alert("Invalid choice. Please choose A, B, C, or D.");
  }

  //Third Question
  var question3 = prompt("What Animal would be your Hogwarts pet?\nA:Rat \nB:Toad \nC:Owl \nD:Cat ");

// Assign points based on user's choice for question3
if (question3 === "A") {
    total += 4;
  } else if (question3 === "B") {
    total += 3;
  } else if (question3 === "C") {
    total += 2;
  } else if (question3 === "D") {
    total += 1;
  } else {
    alert("Invalid choice. Please choose A, B, C, or D.");
  }
  
  //Fourth Question
  var question4 = prompt("Which flavor of Bertie Bott's Beans would you choose?\nA:Chocolate \nB:Peanut Butter \nC:Licorice \nD:Chilli Paper");
  // Assign points based on user's choice 

  if (question4 === "A") {
    total += 4;
  } else if (question4 === "B") {
    total += 3;
  } else if (question4 === "C") {
    total += 2;
  } else if (question4 === "D") {
    total += 1;
  } else {
    alert("Invalid choice. Please choose A, B, C, or D.");
  }

  //Fifth Question
  var question5= prompt("Which flavor of Bertie Bott's Beans would you choose?\nA:Chocolate \nB:Peanut Butter \nC:Licorice \nD:Chilli Paper ");
  // Assign points based on user's choice 

  if (question5 === "A") {
    total += 4;
  } else if (question5 === "B") {
    total += 3;
  } else if (question5 === "C") {
    total += 2;
  } else if (question5 === "D") {
    total += 1;
  } else {
    alert("Invalid choice. Please choose A, B, C, or D.");
  }

    //Sixth Question
    var question6= prompt("Which quidittich position would you most likely to play?\nA:Beater \nB:Keeper \nC:Chaser \nD:Seeker ");
    // Assign points based on user's choice 
  
    if (question6 === "A") {
      total += 4;
    } else if (question6 === "B") {
      total += 3;
    } else if (question6 === "C") {
      total += 2;
    } else if (question6 === "D") {
      total += 1;
    } else {
      alert("Invalid choice. Please choose A, B, C, or D.");
    }

      //Seventh Question
      var question7= prompt("Which portrait  would you pick to guard your bedroom?\nA:A Snake \nB:A knight \nC:Chaser \nD:Seeker ");
      // Assign points based on user's choice 
    
      if (question7 === "A") {
        total += 4;
      } else if (question7 === "B") {
        total += 3;
      } else if (question7 === "C") {
        total += 2;
      } else if (question7 === "D") {
        total += 1;
      } else {
        alert("Invalid choice. Please choose A, B, C, or D.");
      }

     //Eighth Question
      var question8= prompt("What would most likely turn to a toad?\nA:Hagrid \nB:Snape \nC:You-know-who\nD:Draco ");
      // Assign points based on user's choice 
    
      if (question8 === "A") {
        total += 4;
      } else if (question8 === "B") {
        total += 3;
      } else if (question8 === "C") {
        total += 2;
      } else if (question8 === "D") {
        total += 1;
      } else {
        alert("Invalid choice. Please choose A, B, C, or D.");
      }

      //Nineth Question
      var question9= prompt("What Qualities BEST describes you?\nA:Confident \nB:Hardworking \nC:Smart\nD:Brave ");
      // Assign points based on user's choice 
    
      if (question9=== "A") {
        total += 4;
      } else if (question9 === "B") {
        total += 3;
      } else if (question9 === "C") {
        total += 2;
      } else if (question9 === "D") {
        total += 1;
      } else {
        alert("Invalid choice. Please choose A, B, C, or D.");
      }
  
      //Tenth Question
      var question10= prompt("What would you want to be when you grow up?\nA:Ministry of Magic official(Politician) \nB:Quidditch Player(pro athlete) \nC:Hogwarts Proffesor(Teacher)\nD:Auror(FBI) ");
      // Assign points based on user's choice 
    
      if (question10 === "A") {
        total += 4;
      } else if (question10 === "B") {
        total += 3;
      } else if (question10 === "C") {
        total += 2;
      } else if (question10 === "D") {
        total += 1;
      } else {
        alert("Invalid choice. Please choose A, B, C, or D.");
      }
  


// Display the user's total
alert("Your total score is " + total);


if (total >= 10 && total <= 17) {
  document.write("You are Gryffindors");
} else if (total >= 18 && total <= 25) {
  document.write("You are Ravenclaws");
} else if (total >= 26 && total <= 33) {
  document.write("You are Hufflepuffs");
} else if (total >= 34 && total <= 40) {
  document.write("You are Slytherins");
} else {
  document.write("Invalid input"); // handle the case where the input is outside of the specified ranges
}


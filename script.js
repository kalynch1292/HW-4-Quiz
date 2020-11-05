// all HTML elements for manipluation//

/// Quiz Questions ///

var quizQuestions = [
  {
    question: "What is a while loop?",
    options: ["A While loop never stops", "A while loop executes a set of statements as long as a condition is true, Does not require a function", "Pass"],
    correctAnswer: "A while loop executes a set of statements as long as a condition is true, Does not require a function"
  },

  {
    question: "How is a while loop different from an if loop",
    choiceA: ["An if loop only runs through one block of code a certain number of times but a while loop runs until the statement is false.", "They are the same.", "if loops do not exist.", "Pass."],
    correctAnswer: "A"
  },

  {
    question: "What is the difference between " == " and " === "",
    choiceA: ["No difference", " '==' does not check datatype of variable but '===' does", "i'==' is only used for functions.", "Pass."],
    correctAnswer: "B"
  },

  {
    question: "What does the term Booleans mean?",
    choiceA: ["A type of loop", "Another term for a Variable", "Datatype that only takes 'true' or 'false' values", "Pass."],
    correctAnswer: "B"
  },
];

//more variables//
var score = 0;
var questionIndex = 0;
// var currentTime = document.querySelector("#currentTime");
var timerEl = document.querySelector("#timeLeft");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 60;

setTime();
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft --;
    timerEl.textContent = "Time Left " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

// all HTML elements for manipluation//

/// Quiz Questions ///

// var nextBtn = document.querySelector(#next);

// nextbtn.addEventListener("click," startQuiz);

// start quiz //





function quizLoop() {
  document.getElementById("text").innerHTML = quizQuestions[0].prompt;
  document.getElementById("answerZero").innerHTML = quizQuestions[0].options[0];
  document.getElementById("answerOne").innerHTML = quizQuestions[0].options[1];;
  document.getElementById("answerTwo").innerHTML = quizQuestions[0].options[2];
  
  

  }








var quizQuestions = [
  {
    prompt: "What is a while loop?",
    options: ["A While loop never stops", "A while loop executes a set of statements as long as a condition is true, Does not require a function", "Pass"],
    answerIndex: 1
  },

  {
    prompt: "How is a while loop different from an if loop",
    options: ["An if loop only runs through one block of code a certain number of times but a while loop runs until the statement is false.", "They are the same.", "if loops do not exist.", "Pass."],
    answerIndex: 0
  },

  {
    prompt: "What is the difference between " == " and " === "",
    options: ["No difference", " '==' does not check datatype of variable but '===' does", " '==' is only used for functions.", "Pass."],
    answerIndex: 1
  },

  {
    prompt: "What does the term Booleans mean?",
    options: ["A type of loop", "Another term for a Variable", "Datatype that only takes 'true' or 'false' values", "Pass."],
    answerIndex: 3
  }

];










//more variables//
var score = 0;
var questionIndex = 0;
// var currentTime = document.querySelector("#currentTime");
var timerEl = document.querySelector("#timeLeft");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 60;
var button = document.getElementById("startQuiz");

setTime();
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time Left " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

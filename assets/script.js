var score = 0;
var quizIndex = 0;
var timerEl = document.querySelector("#timeLeft");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var button = document.getElementById("startQuiz");
var answerButtons = document.getElementById("answerBubble");
var secondsLeft = 60;
var score = "";
var scoreArray = JSON.parse(localStorage.getItem("highscore")) || []
var currentPrompt = 0;
var timerInterval;

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time Left " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

// secondsLeft -= 10;



function quizLoop() {
  document.getElementById("text").innerHTML = quizQuestions[0].prompt;
  setTime();
  document.getElementById("answerZero").innerHTML = quizQuestions[0].options[0];
  document.getElementById("answerOne").innerHTML = quizQuestions[0].options[1];
  document.getElementById("answerTwo").innerHTML = quizQuestions[0].options[2];
  answerButtons.addEventListener("click", questionTwo)
}




function questionTwo() {
  quizIndex++;
  document.getElementById("text").innerHTML = quizQuestions[1].prompt;
  document.getElementById("answerZero").innerHTML = quizQuestions[1].options[0];
  document.getElementById("answerOne").innerHTML = quizQuestions[1].options[1];
  document.getElementById("answerTwo").innerHTML = quizQuestions[1].options[2];
  answerButtons.addEventListener("click", questionThree)

}

function questionThree() {
  quizIndex++;
  document.getElementById("text").innerHTML = quizQuestions[2].prompt;
  document.getElementById("answerZero").innerHTML = quizQuestions[2].options[0];
  document.getElementById("answerOne").innerHTML = quizQuestions[2].options[1];
  document.getElementById("answerTwo").innerHTML = quizQuestions[2].options[2];
  answerButtons.addEventListener("click", questionFour)

}

function questionFour() {
  quizIndex++;
  document.getElementById("text").innerHTML = quizQuestions[3].prompt;
  document.getElementById("answerZero").innerHTML = quizQuestions[3].options[0];
  document.getElementById("answerOne").innerHTML = quizQuestions[3].options[1];
  document.getElementById("answerTwo").innerHTML = quizQuestions[3].options[2];
  answerButtons.addEventListener("click", function () {
    console.log("test")
    clearInterval(timerInterval);
  })
}






var quizQuestions = [
  {
    prompt: "What is a while loop?",
    options: ["A While loop never stops", "A while loop executes a set of statements as long as a condition is true", "Pass"],
    answer: "A while loop executes a set of statements as long as a condition is true"
  },

  {
    prompt: "How is a while loop different from an if loop",
    options: ["An if loop only runs through one block of code a certain number of times but a while loop runs until the statement is false.", "They are the same.", "if loops do not exist.", "Pass."],
    answer: "An if loop only runs through one block of code a certain number of times but a while loop runs until the statement is false."
  },

  {
    prompt: "What is the difference between '==' and '===' ",
    options: ["No difference", " '==' does not check datatype of variable but '===' does", " '==' is only used for functions.", "Pass."],
    answer: " '==' does not check datatype of variable but '===' does",
  },

  {
    prompt: "What does the term Booleans mean?",
    options: ["A type of loop", "Another term for a Variable", "Datatype that only takes 'true' or 'false' values", "Pass."],
    answer: "Datatype that only takes 'true' or 'false' values"
  }

];

//console.log//

answerBubble.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button") &&quizIndex<4) {
    var guess = event.target.textContent;
    console.log(guess);
    console.log("string",quizQuestions[quizIndex].answer);
    if (guess === quizQuestions[quizIndex].answer) {
      secondsLeft -= 10;
    }
    if (currentPrompt === quizIndex.length) {
      score == secondsLeft
      localStorage.set("highscore", JSON.stringify(score))
      location.href = "highscore.html"
    }
  }


})

//
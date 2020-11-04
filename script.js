// all HTML elements for manipluation//

var quizDiv = document.getElementById("quizDiv");
var quizTimer = document.getElementById("quizTimer");
var quizQuestionsDiv = document.getElementById("quizQuestions");
var gameOver = document.getElementById("gameisover");
var finalScore = document.getElementById("finalScore");
var submitScore = document.getElementById("submitScore");
var highScoreDiv = document.getElementById("highScoreConainer");
var highScorePage = document.getElementById("high-scorePage");
var userInitials = document.getElementById("highscore-initials");
var endGameButton = document.getElementById("endGameButtons");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

/// Quiz Questions ///

var quizQuestions = [{
    question: "What is a while loop?",
    choiceA: "A While loop never stops.",
    choiceB: "A while loop executes a set of statements as long as a condition is true.",
    choiceC: "Does not require a function.",
    choiceD: "Pass",
    correctAnswer: "B"},

  { question: "How is a while loop different from an if loop",
  choiceA: "An if loop only runs through one block of code a certain number of times but a while loop runs until the statement is false.",
  choiceB: "They are the same.",
  choiceC: "if loops do not exist.",
  choiceD: "Pass.",
  correctAnswer: "A" },

  { question: "What is the difference between "==" and "==="",
  choiceA: "No difference",
  choiceB: " '==' does not check datatype of variable but '===' does",
  choiceC: "i'==' is only used for functions.",
  choiceD: "Pass.",
  correctAnswer: "B" },

  { question: "What does the term Booleans mean?",
  choiceA: "A type of loop",
  choiceB: "Another term for a Variable",
  choiceC: "Datatype that only takes 'true' or 'false' values",
  choiceD: "Pass.",
  correctAnswer: "B" }
]
// Correct and incorrect answers to the questions
var correct = 0;
var incorrect = 0;

// Object of correct answers to the questions
var answers = {
  "group1": "d",
  "group2": "b",
  "group3": "a",
  "group4": "b",
  "group5": "b",
  "group6": "c",
  "group7": "d",
  "group8": "a",
  "group9": "b",
  "group10": "d"
};

// Empty arrays for the correct and incorrect answers
var correctAnswers = [];
var incorrectAnswers = [];

var intervalId;

var time = 120;

function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
}


function showStats() {
    $("#correct").text("Correct Answers: " + correctAnswers.length);
    $("#incorrect").text("Incorrect Answers: " + incorrectAnswers.length);
    $("#refresh").text("Refresh the page to play again!");
}


function decrement() {
        time--;
        $("#timer").html("Time remaining: " + time);
        if (time === 0) {
            stop();
            $("#timer").html("Time's up!");
            showStats();
        }
}

function stop() {
        clearInterval(intervalId);
}

// A function to hide the quiz
function hideQuiz() {
    var quiz = document.getElementById('quiz');
    quiz.style.display = 'none';
}

// A function to show the quiz
function showQuiz() {
    var quiz = document.getElementById('quiz');
    quiz.style.display = 'block';
    $('.instructions').hide();
    
    var timer = document.getElementById('timer');
    timer.style.display = "block";
    
    var submitButton = document.getElementById('submit-button');
    submitButton.style.display = "inline";
    submitButton.style.textAlign = "center";
    console.log('game started');
    
    $('#start-button').hide();
}

// Function to hide the timer
function hideTimer() {
    $('#timer').hide();
}

// Function to hide the Submit Answers button
function hideSubmit() {
    $('#submit-button').hide();
}

// Reset function
function reset() {
    correct = 0;
    incorrect = 0;
    $('#correct').empty();
    $('#incorrect').empty();
    hideSubmit();
    hideTimer();
    hideQuiz();
}

$(document).on('load', reset());

$('#start-button').on('click', function() {
    // Show the quiz
    showQuiz();

    run();
})

// $('#submit-button').on('click', function(e) {
//     e.preventDefault();
//     questions = $('.question');
//     questions.each(function() {
//         var answer = $(this).find("input: checked");
//         key = answer.attr("name");
//         val = answer.attr("value");

//         if (answer.length === 0) {
//             $(this).push(incorrectAnswers);
//         } else if (answers[key] !== val) {
//             $(this).push(incorrectAnswers);
//         } else {
//             $(this).push(correctAnswers);
//         }

//         console.log(correctAnswers);
//         console.log(incorrectAnswers);

//     })})
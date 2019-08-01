// Correct and incorrect answers to the questions (Didn't need these, since I used the array.length
// var correct = 0;
// var incorrect = 0;

// Object of correct answers to the questions (Didn't need this due to the syntax of submit button on click function)
// var answers = {
//   "group1": "d",
//   "group2": "c",
//   "group3": "a",
//   "group4": "b",
//   "group5": "b",
//   "group6": "c",
//   "group7": "d",
//   "group8": "a",
//   "group9": "b",
//   "group10": "d"
// };

// Empty arrays for the correct and incorrect answers
var correctAnswers = [];
var incorrectAnswers = [];
var intervalId;
var time = 90;


function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
}


function showResults() {
    $("#correct").text("Correct Answers: " + correctAnswers.length);
    $("#incorrect").text("Incorrect Answers: " + incorrectAnswers.length);
    $("#refresh").text("Refresh the page to play again!");
}


function decrement() {
       $("#timer").html("Time remaining: " + time + " seconds"); time--;
        if (time < 0) {
            stop();
            $("#timer").html("Sorry, you've run out of time! Try again.");

            var answerValue1 = $("input[name='group1']:checked").val();
            if (answerValue1 === "d") {
                correctAnswers.push(answerValue1);
            } else {
                incorrectAnswers.push(answerValue1);
            }

            var answerValue2 = $("input[name='group2']:checked").val();
            if (answerValue2 === "c") {
                correctAnswers.push(answerValue2);
            } else {
                incorrectAnswers.push(answerValue2);
            }

            var answerValue3 = $("input[name='group3']:checked").val();
            if (answerValue3 === "a") {
                correctAnswers.push(answerValue3);
            } else {
                incorrectAnswers.push(answerValue3);
            }

            var answerValue4 = $("input[name='group4']:checked").val();
            if (answerValue4 === "b") {
                correctAnswers.push(answerValue4);
            } else {
                incorrectAnswers.push(answerValue4);
            }

            var answerValue5 = $("input[name='group5']:checked").val();
            if (answerValue5 === "b") {
                correctAnswers.push(answerValue5);
            } else {
                incorrectAnswers.push(answerValue5);
            }

            var answerValue6 = $("input[name='group6']:checked").val();
            if (answerValue6 === "c") {
                correctAnswers.push(answerValue6);
            } else {
                incorrectAnswers.push(answerValue6);
            }

            var answerValue7 = $("input[name='group7']:checked").val();
            if (answerValue7 === "d") {
                correctAnswers.push(answerValue7);
            } else {
                incorrectAnswers.push(answerValue7);
            }

            var answerValue8 = $("input[name='group8']:checked").val();
            if (answerValue8 === "a") {
                correctAnswers.push(answerValue8);
            } else {
                incorrectAnswers.push(answerValue8);
            }

            var answerValue9 = $("input[name='group9']:checked").val();
            if (answerValue9 === "b") {
                correctAnswers.push(answerValue9);
            } else {
                incorrectAnswers.push(answerValue9);
            }

            var answerValue10 = $("input[name='group10']:checked").val();
            if (answerValue10 === "d") {
                correctAnswers.push(answerValue10);
            } else {
                incorrectAnswers.push(answerValue10);
            }

            // console.log(correctAnswers);
            // console.log(incorrectAnswers);
            
            hideQuiz();

            hideSubmit();

            showResults();
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

$("#submit-button").on('click', function() {
    var answerValue1 = $("input[name='group1']:checked").val();
    if (answerValue1 === "d") {
        correctAnswers.push(answerValue1);
    } else {
        incorrectAnswers.push(answerValue1);
    }

    var answerValue2 = $("input[name='group2']:checked").val();
    if (answerValue2 === "c") {
        correctAnswers.push(answerValue2);
    } else {
        incorrectAnswers.push(answerValue2);
    }

    var answerValue3 = $("input[name='group3']:checked").val();
    if (answerValue3 === "a") {
        correctAnswers.push(answerValue3);
    } else {
        incorrectAnswers.push(answerValue3);
    }

    var answerValue4 = $("input[name='group4']:checked").val();
    if (answerValue4 === "b") {
        correctAnswers.push(answerValue4);
    } else {
        incorrectAnswers.push(answerValue4);
    }

    var answerValue5 = $("input[name='group5']:checked").val();
    if (answerValue5 === "b") {
        correctAnswers.push(answerValue5);
    } else {
        incorrectAnswers.push(answerValue5);
    }

    var answerValue6 = $("input[name='group6']:checked").val();
    if (answerValue6 === "c") {
        correctAnswers.push(answerValue6);
    } else {
        incorrectAnswers.push(answerValue6);
    }

    var answerValue7 = $("input[name='group7']:checked").val();
    if (answerValue7 === "d") {
        correctAnswers.push(answerValue7);
    } else {
        incorrectAnswers.push(answerValue7);
    }

    var answerValue8 = $("input[name='group8']:checked").val();
    if (answerValue8 === "a") {
        correctAnswers.push(answerValue8);
    } else {
        incorrectAnswers.push(answerValue8);
    }

    var answerValue9 = $("input[name='group9']:checked").val();
    if (answerValue9 === "b") {
        correctAnswers.push(answerValue9);
    } else {
        incorrectAnswers.push(answerValue9);
    }

    var answerValue10 = $("input[name='group10']:checked").val();
    if (answerValue10 === "d") {
        correctAnswers.push(answerValue10);
    } else {
        incorrectAnswers.push(answerValue10);
    }

    // console.log(correctAnswers);
    // console.log(incorrectAnswers);
    
    hideQuiz();

    hideSubmit();

    showResults();

    hideTimer();

    stop();

});
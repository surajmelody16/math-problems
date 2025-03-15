let myMathProblem = Math.floor(Math.random() * 10) + 1;
let myAnswer = prompt("What is " + myMathProblem + " times " + myMathProblem + "?");
if (myAnswer == myMathProblem * myMathProblem) {
    alert("That's correct!");
} else {
    alert("Sorry, that's not correct. The answer is " + myMathProblem * myMathProblem);
}

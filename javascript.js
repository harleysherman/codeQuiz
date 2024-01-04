//Content Questions, User will click button and cycle through questions
var question1 = {
    question: "JavaScript is an _______ langauge",
    answer1: "Object-Oriented",
    answer2: "Object Based",
    answer3: "Procedural",
    answer4: "None of the above",
    correctAnswer: "Object-Oriented"
};
var question2 =  {
    question: "Which of the following methods can be used to define a variable in JavaScript?",
    answer1: "var",
    answer2: "let",
    answer3: "Both A and B",
    answer4: "None of the above",
    correctAnswer: "Both A and B"
};
var question3 =  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answer1: "getElementById()",
    answer2: "getElementsByClassName()",
    answer3: "Both A and B",
    answer4: "None of the above",
    correctAnswer: ""
};
var question4 =  {
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answer1: "Throws an error",
    answer2: "Ignores the statements",
    answer3: "Gives a warning",
    answer4: "None of the above",
    correctAnswer: "Ignores the statements"
};
var question5 =  {
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    answer1: "document.write()",
    answer2: "console.log()",
    answer3: "window.alert()",
    answer4: "All of the above",
    correctAnswer: "All of the above"
};
var questionsArray = [question1, question2, question3, question4, question5];
var index = 0;
var timer = 100;
var welcomeScreen = document.getElementById("hide");
var answerCatalog = document.getElementById("questionHTML");
var questionEl = document.getElementById("question");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var answerEl4 = document.getElementById("answer4");
var answerEl5 = document.getElementById("answer5");

//Function to start the quiz, then moves onto next question
function startQuiz () {
    //hide welcome screen
    welcomeScreen.classList.add("hidden");

    //Bring up question 1 screen
    answerCatalog.classList.remove("hidden");

    //Starting text content
    questionEl.textContent = questionsArray[index].question;
    answerEl1.textContent = questionsArray[index].answer1;
    answerEl2.textContent = questionsArray[index].answer2;
    answerEl3.textContent = questionsArray[index].answer3;
    answerEl4.textContent = questionsArray[index].answer4;
    answerEl5.textContent = questionsArray[index].answer5;
}

//funciton timer
function timer () {
    if (answerEl1 != correctAnswer || answerEl2 != correctAnswer 
        || answerEl3 != correctAnswer || answerEl4 != correctAnswer
        || answerEl5 != correctAnswer) {
        timer -= 10;
    } else {
        nextQuestion();
    }
}
//function for checking the right answer
function rightAnswer () {
    index++;
    if (question1[index]. != correctAnswer) {
        
    }
}

//function next question

//game over function
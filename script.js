const questions = [
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text: "Christopher Nolan", correct: true },
            { text: "Steven Spielberg", correct: false },
            { text: "James Cameron", correct: false },
            { text: "Quentin Tarantino", correct: false },
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        answers: [
            { text: "The Shawshank Redemption", correct: false },
            { text: "Forrest Gump", correct: true },
            { text: "Pulp Fiction", correct: false },
            { text: "The Lion King", correct: false },
        ]
    },
    {
        question: "In which movie would you find the character Jack Dawson?",
        answers: [
            { text: "Titanic", correct: true },
            { text: "Avatar", correct: false },
            { text: "The Terminator", correct: false },
            { text: "The Matrix", correct: false },
        ]
    },
    {
        question: "Who played the character of Harry Potter in the film series?",
        answers: [
            { text: "Daniel Radcliffe", correct: true },
            { text: "Rupert Grint", correct: false },
            { text: "Tom Felton", correct: false },
            { text: "Matthew Lewis", correct: false },
        ]
    },
    {
        question: "What year was 'The Godfather' released?",
        answers: [
            { text: "1970", correct: false },
            { text: "1972", correct: true },
            { text: "1980", correct: false },
            { text: "1968", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const scoreTextElement = document.getElementById("score-text");
const resultList = document.getElementById("result-list");
const correctAnswerCountElement = document.getElementById("correct-answer-count");
const wrongAnswerCountElement = document.getElementById("wrong-answer-count");
const restartButton = document.getElementById("restart-btn");

const userInfoSection = document.getElementById("user-info");
const quizSection = document.querySelector(".quiz");

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];
let userName = "";
let userRollNumber = "";

// Function to handle the start of the quiz
function startQuiz() {
    userName = document.getElementById("name").value;
    userRollNumber = document.getElementById("rollnumber").value;

    if (userName && userRollNumber) {
        userInfoSection.style.display = "none";  // Hide the user info section
        quizSection.style.display = "block";     // Show the quiz section
        startQuizSession();
    } else {
        alert("Please enter both your name and roll number.");
    }
}

// Start a new quiz session
function startQuizSession() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    nextButton.innerHTML = "Next";
    scoreElement.style.display = "none";
    showQuestion();
}

// Display the current question and answers
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer, button));
        answerButtons.appendChild(button);
    });
}

// Reset the state for the next question
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Check the answer and display feedback
function checkAnswer(answer, button) {
    // Disable all buttons after one answer is clicked
    const allButtons = answerButtons.querySelectorAll(".btn");
    allButtons.forEach(button => button.disabled = true);

    const isCorrect = answer.correct;

    if (isCorrect) {
        score++;
    }

    answeredQuestions.push({
        question: questions[currentQuestionIndex].question,
        userAnswer: answer.text,
        correctAnswer: questions[currentQuestionIndex].answers.find(ans => ans.correct).text,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

// Display the next question or show the score if the quiz is over
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Display the final score and results
function showScore() {
    scoreElement.style.display = "block";
    scoreTextElement.innerHTML = `Your Score: ${score} / ${questions.length}`;

    let correctAnswersCount = 0;
    let wrongAnswersCount = 0;

    resultList.innerHTML = "<h3>Quiz Results:</h3>";

    answeredQuestions.forEach((item, index) => {
        const result = document.createElement("div");
        result.classList.add(item.isCorrect ? "correct" : "incorrect");
        result.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${item.question}</p>
            <p>Your Answer: ${item.userAnswer}</p>
            <p>Correct Answer: ${item.correctAnswer}</p>
        `;
        resultList.appendChild(result);

        if (item.isCorrect) correctAnswersCount++;
        else wrongAnswersCount++;
    });

    correctAnswerCountElement.innerHTML = `Correct Answers: ${correctAnswersCount}`;
    wrongAnswerCountElement.innerHTML = `Wrong Answers: ${wrongAnswersCount}`;
}

// Restart the quiz
function restartQuiz() {
    scoreElement.style.display = "none";
    userInfoSection.style.display = "block"; // Show the user info section again
    quizSection.style.display = "none"; // Hide the quiz section
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);

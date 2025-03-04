let quizData = [
  {
    question: "Which framework is related to JavaScript?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "django",
    correct: "c",
  },
  {
    question: "Which is not a programming language?",
    a: "Html",
    b: "flask",
    c: "react",
    d: "django",
    correct: "a",
  },
  {
    question: "Which is not a framework?",
    a: "react",
    b: "javascript",
    c: "angular",
    d: "django",
    correct: "b",
  },
  {
    question: "CSS stands for?",
    a: "cascading query sheet",
    b: "cascading style sheet",
    c: "cascading sheet",
    d: "none of the above",
    correct: "b",
  },
];

let question = document.getElementById("question");
let a = document.getElementById("a_value");
let b = document.getElementById("b_value");
let c = document.getElementById("c_value");
let d = document.getElementById("d_value");
let submit = document.querySelector(".btn");
let answers = document.querySelectorAll(".answer");
let clearBtn = document.querySelector(".clear-btn");
let optionsContainer = document.querySelector(".options-container");

let currentQuestion = 0;
let quizScore = 0;

loadQuiz();

function deselect() {
  answers.forEach((answer) => (answer.checked = false));
}

function loadQuiz() {
  deselect();
  let qData = quizData[currentQuestion];
  question.innerText = qData.question;
  a.innerText = qData.a;
  b.innerText = qData.b;
  c.innerText = qData.c;
  d.innerText = qData.d;
}

function getSelectedAnswer() {
  let selectedAnswer = null;
  answers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.id;
    }
  });
  return selectedAnswer; // Fixed: Added return statement
}

submit.addEventListener("click", () => {
  let selectedAnswer = getSelectedAnswer();

  if (selectedAnswer === null) {
    alert("Please select an answer before submitting!");
  } else {
    if (selectedAnswer === quizData[currentQuestion].correct) {
      quizScore++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      question.innerText = `You have scored ${quizScore} out of ${quizData.length}`;
      optionsContainer.style.display = "none"; // Hide options
      submit.style.display = "none"; // Hide submit button
      clearBtn.style.display = "block"; // Show clear button
    }
  }
});

clearBtn.addEventListener("click", () => {
  currentQuestion = 0;
  quizScore = 0;
  optionsContainer.style.display = "block";
  submit.style.display = "block";
  clearBtn.style.display = "none";
  loadQuiz();
});

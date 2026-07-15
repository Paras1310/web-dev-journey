const quizContainer = document.getElementById("quiz-container");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Lucknow", "Kashmir"],
    correctAnswer: "Delhi"
  }
];

function renderQuestion(){

  quizContainer.innerHTML = `<h2>${questions[currentQuestionIndex].question}</h2>
                           ${questions[currentQuestionIndex].options.map(options => ` <label>
        <input type="radio" name="answer" value="${options}">
        ${options}
    </label>`).join("")}
    <button id="next-btn">Next</button>
`; }

quizContainer.addEventListener("click", function(e) {
    if (e.target.id === "next-btn") {

    const selected = document.querySelector('input[name="answer"]:checked');

    if (selected === null){ 
      alert("please select any option");
      return;
    }
    const isCorrect = selected.value === questions[currentQuestionIndex].correctAnswer;
    
    if (isCorrect){
      score = score + 1;
    }

    currentQuestionIndex = currentQuestionIndex + 1;
    console.log(score)

    const hasNextQuestion = currentQuestionIndex < questions.length
    if(hasNextQuestion){
      renderQuestion();
    }else{
      quizContainer.innerHTML =  `
      <h2>all question are finised</h2>
      <p>your score: ${score} </p>`
    }
    
  }
});
 renderQuestion();
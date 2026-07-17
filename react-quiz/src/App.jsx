import { useState } from "react";

const questions = [
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8",
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Lucknow", "Kashmir"],
    correctAnswer: "Delhi",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleNext() {
  if (selectedAnswer === null) {
    alert("Please select an option")
    return
  }

  const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer

  if (isCorrect) {
    setScore(score + 1)
  }

  setCurrentQuestionIndex(currentQuestionIndex + 1)
  setSelectedAnswer(null)
}

function handlePlayAgain() {
  setCurrentQuestionIndex(0)
  setScore(0)
  setSelectedAnswer(null)
}

if (currentQuestionIndex >= questions.length) {
  return (
    <div>
      <h2>All questions are finished</h2>
      <p>Your score: {score}</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => setSelectedAnswer(option)}
          />
          {option}
        </label>
        
      ))}
      <button onClick={handleNext}>Next</button>
      
    </div>
  );

  
}



export default App;

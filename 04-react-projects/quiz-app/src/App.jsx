import { useState } from "react";
import Question from "./Question";
import ResultScreen from "./ResultScreen"

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
      alert("Please select an option");
      return;
    }

    const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
  }

  function handlePlayAgain() {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  }

  if (currentQuestionIndex >= questions.length) {
  return <ResultScreen score={score} onPlayAgain={handlePlayAgain} />;
}

  return (
    <Question
      question={questions[currentQuestionIndex].question}
      options={questions[currentQuestionIndex].options}
      selectedAnswer={selectedAnswer}
      onSelect={setSelectedAnswer}
      onNext={handleNext}
    />
  );
}

export default App;
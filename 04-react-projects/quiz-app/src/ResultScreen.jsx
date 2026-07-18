function ResultScreen(props) {
  return (
    <div>
      <h2>All questions are finished</h2>
      <p>Your score: {props.score}</p>
      <button onClick={props.onPlayAgain}>Play Again</button>
    </div>
  )
}

export default ResultScreen
function Question(props) {
  return (
    <div>
      <h2>{props.question}</h2>
      {props.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            checked={props.selectedAnswer === option}
            onChange={() => props.onSelect(option)}
          />
          {option}
        </label>
      ))}
      <button onClick={props.onNext}>Next</button>
    </div>
  )
}

export default Question
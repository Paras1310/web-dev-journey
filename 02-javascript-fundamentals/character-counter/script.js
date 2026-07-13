const textInput = document.getElementById("text-input")
const counter = document.getElementById("counter")

function calculateRemaining() {
  const remaining = 150 - textInput.value.length
  counter.textContent = `${remaining} characters remaining`

  if (remaining <= 0) {
    counter.style.color = "red"
  } else if (remaining < 20) {
    counter.style.color = "orange"
  } else {
    counter.style.color = "#333"
  }
}

textInput.addEventListener("input", calculateRemaining)
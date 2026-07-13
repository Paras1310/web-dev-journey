const heading = document.getElementById("heading")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    if (heading.textContent === "Hello") {
     heading.textContent = "You clicked the button!"
    }else {
     heading.textContent = "Hello"
    }
})
const billInput = document.getElementById("bill-input")
const tipInput = document.getElementById("tip-input")
const calculateBtn = document.getElementById("calculate-btn")
const tipAmountDisplay = document.getElementById("tip-amount")

function calculateTip() {
    const billAmount = parseFloat(billInput.value)
    const tipPercentage = parseFloat(tipInput.value)

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for bill and tip percentage.")
        return
    }else if (billAmount < 0 || tipPercentage < 0) {
        alert("Please enter positive numbers for bill and tip percentage.")
        return
    }  else if (tipPercentage > 100) {
        alert("Tip percentage cannot be greater than 100.")
        return
    }
    else {
        const tipAmount = (billAmount * tipPercentage) / 100
        const totalAmount = billAmount + tipAmount
        tipAmountDisplay.textContent = `Tip: $${tipAmount.toFixed(2)} — Total: $${totalAmount.toFixed(2)}`
    }
}

calculateBtn.addEventListener("click", calculateTip)
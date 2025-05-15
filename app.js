/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let storedValue =''
let currentInput = ''
let currentOperator = ''
let calcResult = ''
let isTypingSecondValue = false

/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector ('.display')
const numberButtons = document.querySelectorAll ('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector ('.equals')

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.textContent.trim()
        console.log('Number clicked:', value)

        if (!isTypingSecondValue) {
            storedValue += value
            displayElement.textContent = storedValue
        } else {
            currentInput += value
            displayElement.textContent = currentInput
        }
    })
})
operatorButtons.forEach (button => {
    button.addEventListener ('click', function () {
        const value = button.textContent.trim()
        console.log('Operator clicked:', value)

        if (value === 'C') {
            storedValue = ''
            currentInput = ''
            currentOperator = ''
            isTypingSecondValue = false
            calcResult = ''
            displayElement.textContent = ''

        } else {
                 currentOperator = value  
                 isTypingSecondValue = true
                }
                
              
        }
    )
})

equalsButton.addEventListener ('click', function () {
    console.log('Equals clicked')
    console.log('Trying to calculate with operator:', currentOperator)
    const num1 = +storedValue
    const num2 = +currentInput
    if (currentOperator === '+') calcResult = num1 + num2
    if (currentOperator === '-') calcResult = num1 - num2
    if (currentOperator === '*') calcResult = num1 * num2
    if (currentOperator === '/') calcResult = num1 / num2

    displayElement.textContent = calcResult
    storedValue = calcResult.toString()
    currentInput = ''
    currentOperator = ''
    isTypingSecondValue = false
})


/*-------------------------------- Functions --------------------------------*/

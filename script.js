// script.js

let value = '' // Use to store variables to operate
const upperDisplay = document.getElementById('upperDisplay')
upperDisplay.textContent = ''
const lowerDisplay = document.getElementById('lowerDisplay')
lowerDisplay.textContent = ''

const clear = document.getElementById('clearButton')
clear.addEventListener('click', () => {
    allClear()
})

const plusMinus = document.getElementById('plusMinus')
plusMinus.addEventListener('click', () => {
    inputPlusMinus()
    display()
})
const point = document.getElementById('point')
point.addEventListener('click', () => {
    inputPoint()
})

const modButton = document.getElementById('modButton')
modButton.addEventListener('click', () => {
    value = '%'
    inputParameters()
})

const divButton = document.getElementById('divButton')
divButton.addEventListener('click', () => {
    value = '/'
    inputParameters()
    display()
})

const multiplyButton = document.getElementById('multiplyButton')
multiplyButton.addEventListener('click', () => {
    value = '*'
    inputParameters()
    display()
})

const plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    value = '+'
    inputParameters()
    display()
})

const minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    value = '-'
    inputParameters()
    display()
})

const zero = document.getElementById('zero')
zero.addEventListener('click', () => {
    value = '0'
    inputParameters()
    display()
})

const one = document.getElementById('one')
one.addEventListener('click', () => {
    value = '1'
    inputParameters()
    display()
})

const two = document.getElementById('two')
two.addEventListener('click', () => {
    value = '2'
    inputParameters()
    display()
})

const three = document.getElementById('three')
three.addEventListener('click', () => {
    value = '3'
    inputParameters()
    display()
})

const four = document.getElementById('four')
four.addEventListener('click', () => {
    value = '4'
    inputParameters()
    display()
})

const five = document.getElementById('five')
five.addEventListener('click', () => {
    value = '5'
    inputParameters()
    display()
})

const six = document.getElementById('six')
six.addEventListener('click', () => {
    value = '6'
    inputParameters()
    display()
})

const seven = document.getElementById('seven')
seven.addEventListener('click', () => {
    upperDisplay.textContent += '7'
    value = '7'
    inputParameters()
    display()
})

const eight = document.getElementById('eight')
eight.addEventListener('click', () => {
    value = '8'
    inputParameters()
    display()
})

const nine = document.getElementById('nine')
nine.addEventListener('click', () => {
    value = '9'
    inputParameters()
    display()
})

const add = function(a, b) {
    return +a + +b
};

const subtract = function(a, b) {
    return a - b
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b) {
    return a / b
};

function operate(operator, numA, numB) {
    let res = 0
    if (operator === '+') {
        res = add(numA, numB)
    }
    else if (operator === '-') {
        res = subtract(numA, numB)
    }
    else if (operator === '*') {
        res = multiply(numA, numB)
    }
    else if (operator === '/') {
        if(numB === 0){
            res = 'Error!'
        }
        else{
            res = divide(numA, numB)
        }
    }
    return res
};

const equals = document.getElementById('equals')
equals.addEventListener('click', () => {
    if(operandA !== '' && operator !== '' && operandB === ''){
        allClear()
        upperDisplay.textContent = 'malformed expression'
    }
    else if (operandB === ''){
        allClear()
    }
    else{
        lowerDisplay.textContent = ''
        upperDisplay.textContent = result
        content1 = result
        operatorSwitch = false
    }
})

let operandA = ''
let operandB = ''
let operator = ''
let result = ''

function inputParameters() {
    if(operator === '' && value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '%'){
        operandA += value
    }
    else if(value === '+' || value === '-'|| value === '*'|| value === '/'){
        if(operandB !== ''){
            operator = value
            operandA = result
            operandB = ''
            PercentLimitB = true
        }
        else{
            operator = value
            operandB = ''
        }
    }
    else if(value === '%'){
        inputPercentage()
    }
    else if(operandA !== '' && value !== '+' && value !== '-' && value !== '*' && value !== '/'){
        operandB += value
        getResult()
    }
}

function getResult() {
    result = operate(operator, Number(operandA), Number(operandB))
    lowerDisplay.textContent = result
    return result
}

function inputPoint() {
    if(operandA !== '' && !operandA.includes('.')) {
        upperDisplay.textContent += '.'
        operandA += '.';
    } 
    else if(operandB !== '' && !operandB.includes('.')){
        upperDisplay.textContent += '.'
        operandB += '.'
    }
}

// Regulate percentage use to once
let PercentLimitA = true
let PercentLimitB = true
function inputPercentage(){
    if(operandA !== '' && operandB === '' && PercentLimitA === true) {
        result = divide(Number(operandA), 100)
        lowerDisplay.textContent = result
        operandA = result
        PercentLimitA = false
        display()
    } 
    else if(operandB !== '' && PercentLimitB === true){
        result = divide(Number(operandB), 100)
        lowerDisplay.textContent = result
        operandB = result
        getResult()
        PercentLimitB = false
        display()
    }
    return result
}

function inputPlusMinus() {
    if(operandA !== '' && operandB === ''){
        negative = (Number(operandA) * -1)
        operandA = negative
    }
    else if(operandB !== ''){
        negative = (Number(operandB) * -1)
        operandB = negative
        getResult()
    }
}
let content1 = '' //display content
let content2 = '' //display content
let operatorSwitch = false // interchance betwwen operators
let displayOperatorOnce = true
let displayPercentOnce = true
function display(){
    if(operator === '' && value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '%'){
        upperDisplay.textContent = operandA
        content1 = upperDisplay.textContent
        content2 = upperDisplay.textContent
    }
    else if(value === '+' || value === '-'|| value === '*'|| value === '/'){
        if(operatorSwitch === true){
            extract = content1.substring(0, content1.length - 1)
            content1 = extract
            upperDisplay.textContent = content1 + operator
            content1 = upperDisplay.textContent
            content2 = upperDisplay.textContent
        }
        else if(operatorSwitch === false)
        {
            upperDisplay.textContent = content1 + operator
            content1 = upperDisplay.textContent
            content2 = upperDisplay.textContent
            operatorSwitch = true
        }
    }
    else if(value === '%'){
            upperDisplay.textContent = content1 + value
            content1 = upperDisplay.textContent
            content2 = upperDisplay.textContent
    }
    else if(operandA !== '' && value !== '+' && value !== '-' && value !== '*' && value !== '/'){
        upperDisplay.textContent = content2 + operandB
        content1 = upperDisplay.textContent
        displayOperatorOnce = true
        operatorSwitch = false
    }
}

// starts afresh
function allClear(){
    upperDisplay.textContent = ''
    lowerDisplay.textContent = ''
    value = ''
    operandA = ''
    operandB = ''
    operator = ''
    result = ''
    PercentLimitA = true
    PercentLimitB = true
    content1 = ''
    operatorSwitch = false
    displayPercentOnce = true
}
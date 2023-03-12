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
        res = divide(numA, numB)
    }
    return res
};
let value = ''
const display = document.getElementById('display')
display.textContent = ''
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    display.textContent = ''
    value = ''})
const plusMinus = document.getElementById('plus/minus')

const point = document.getElementById('point')
point.addEventListener('click', () => {
    display.textContent += '.'
})

const modButton = document.getElementById('modButton')
modButton.addEventListener('click', () => {
    display.textContent += '%'
    value += '%'
})
const divButton = document.getElementById('divButton')
divButton.addEventListener('click', () => {
    display.textContent += '/'
    value += ` / `
})
const multiplyButton = document.getElementById('multiplyButton')
multiplyButton.addEventListener('click', () => {
    display.textContent += 'x'
    value += ` * `
})
const plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    display.textContent += '+' 
    value += ` + `
})
const minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    display.textContent += '-'
    value += ` - `
})

const zero = document.getElementById('zero')
zero.addEventListener('click', () => {
    display.textContent += '0'
    value += '0'
})
const one = document.getElementById('one')
one.addEventListener('click', () => {
    display.textContent += '1'
    value += '1'
})
const two = document.getElementById('two')
two.addEventListener('click', () => {
    display.textContent += '2'
    value += '2'
})
const three = document.getElementById('three')
three.addEventListener('click', () => {
    display.textContent += '3'
    value += '3'
})
const four = document.getElementById('four')
four.addEventListener('click', () => {
    display.textContent += '4'
    value += '4'
})
const five = document.getElementById('five')
five.addEventListener('click', () => {
    display.textContent += '5'
    value += '5'
})
const six = document.getElementById('six')
six.addEventListener('click', () => {
    display.textContent += '6'
    value += '6'
})
const seven = document.getElementById('seven')
seven.addEventListener('click', () => {
    display.textContent += '7'
    value += '7'
})
const eight = document.getElementById('eight')
eight.addEventListener('click', () => {
    display.textContent += '8'
    value += '8'
})
const nine = document.getElementById('nine')
nine.addEventListener('click', () => {
    display.textContent += '9'
    value += '9'
})

const equals = document.getElementById('equals')
equals.addEventListener('click', () => {
    valueArray = value.split(' ')
    x = operate(valueArray[1], valueArray[0], valueArray[2])
    valueArray.splice(0, 3)
    for (i = 0; i < valueArray.length; i++) {
        let y, z
        y = valueArray[0]
        z = valueArray[1]
        a = operate(y, x, z)
        x = a
        valueArray.splice(0, 2)
    }
    display.textContent = x
})
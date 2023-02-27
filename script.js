const add = function(a, b) {
    return a + b
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

function operate([]) {
    let numbers = []
    let res
    if (numbers.find(number) === '+' )
    {
        res = numbers.add(numbers[0], numbers[2])
    } 
    else if (numbers.find(number) === '-')
    {
        res = numbers.subtract(numbers[0], numbers[2])
    }
    else if (numbers.find(number) === '*')
    {
        res = numbers.multiply(numbers[0], numbers[2])
    }
    else if (numbers.find(number) === '/')
    {
        res = numbers.divide(numbers[0], numbers[2])
    }
    return res;
};
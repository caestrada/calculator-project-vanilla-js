// Query All Buttons
const buttons = document.querySelectorAll('.btn');

// Add Event Listener to each button.
for (let button of buttons) {
    button.addEventListener('click', (event) => {
        handleOnClick(event.target.innerText);
    })
}

let screen = [];
let operator = null;
let prevOperand = '';

const handleOnClick = (value) => {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

    updateScreen();
}

const handleNumber = (number) => {
    if (number === '0' && screen.length === 0)
        return;

    if (operator !== null &&  prevOperand === '') {
        prevOperand = screen.join('')
        screen = [];
    }

    screen.push(number);
}

const handleSymbol = (symbol) => {
    switch (symbol) {
        case 'C':
            screen = [];
            break;

        case '←':
            screen.pop();
            break;
            
        case '×':
        case '÷':
        case '+':
        case '-':
            operator = symbol;
            break;

        case '=':
            calculate();
            break;
    }
}

const updateScreen = () => {
    let display = document.querySelector('.display');
    if (screen.length === 0) {
        display.innerHTML = '0';
        return;
    }

    display.innerHTML = screen.join('');
}

const calculate = () => {
    console.log('calc operator', operator, prevOperand)

    if (operator === null) return;

    if (operator === '+') {
        screen = [Number.parseInt(prevOperand) + Number.parseInt(screen.join(''))]
    }

    if (operator === '-') {
        screen = [Number.parseInt(prevOperand) - Number.parseInt(screen.join(''))]
    }

    if (operator === '×') {
        screen = [Number.parseInt(prevOperand) * Number.parseInt(screen.join(''))]
    }

    if (operator === '÷') {
        screen = [Number.parseInt(prevOperand) / Number.parseInt(screen.join(''))]
    }

    prevOperand = ''
    operator = null;
}
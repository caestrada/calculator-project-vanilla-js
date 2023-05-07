// Query All Buttons
const buttons = document.querySelectorAll('.btn');

// Add Event Listener to each button.
for (let button of buttons) {
    button.addEventListener('click', (event) => {
        handleOnClick(event.target.innerText);
    })
}

let screen = [];
let leftOperand = null;
let rightOperand = null;
let operator = null;

const handleOnClick = (value) => {
    if (isNaN(value)) {
        handleSymbol(value);
        // switch (value) {
        //     case 'C':
        //         screen = [];
        //         leftOperand = null;
        //         rightOperand = null;
        //         break;

        //     case '←':
        //         screen.pop();
        //         break;

        //     case '×':
        //         if (operator === null) {
        //             leftOperand = Number.parseInt(screen.join(''));
        //         }

        //         operator = '×';
        //         screen = [];
        //         break;

        //     case '-':
        //         if (operator === null) {
        //             leftOperand = Number.parseInt(screen.join(''));
        //         }

        //         operator = '-';
        //         screen = [];
        //         break;

        //     case '-':
        //         if (operator === null) {
        //             leftOperand = Number.parseInt(screen.join(''));
        //         }

        //         operator = '-';
        //         screen = [];
        //         break;

        //     case '=':
        //         if (leftOperand === null) break;

        //         rightOperand = Number.parseInt(screen.join(''));
        //         calculate();
        //         break;
        
        //     default:
        //         break;
        // }
    } else {
        handleNumber(value);
        // // Do NOT append 0 to 0
        // if (value === '0' && screen.length === 0) return;

        // screen.push(value)
    }

    updateScreen();
}

const handleNumber = (number) => {
    if (number === '0' && screen.length === 0)
        return;

    screen.push(number);
}

const handleSymbol = (symbol) => {
    console.log('symbol', symbol);
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
    if (operator === null) return;
    if (operator === '×') {
        screen = [leftOperand * rightOperand]
        leftOperand = leftOperand * rightOperand
    }

    if (operator === '-') {
        screen = [leftOperand - rightOperand]
        leftOperand = leftOperand - rightOperand
    }

    if (operator === '+') {
        screen = [leftOperand + rightOperand]
        leftOperand = leftOperand + rightOperand
    }

    if (operator === '÷') {
        screen = [leftOperand / rightOperand]
        leftOperand = leftOperand / rightOperand
    }


}
let activeTotal = 0;
let screenBuffer = '0';
let previousTotal = null;

const screen = document.querySelector('.screen');

//function that seperates the further script's behavior based on button's contents: number or symbol
function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = screenBuffer;
}

//an event listener that translates selected button's contents to canculator's screen
function init() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        });
    });
}

init();

//identification of symbol buttons with its functionality
function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            screenBuffer = '0';
            activeTotal = 0;
            break;
        case '=':
            if (previousTotal === null) {
                return;
            }
            flushOperation(parseInt(screenBuffer));
            previousTotal = null;
            screenBuffer = activeTotal;
            activeTotal = 0;
            break;
        case '←':
            if (screenBuffer.length === 1) {
                screenBuffer = '0';
            } else {
                screenBuffer = screenBuffer.substring(0,
                    screenBuffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (screenBuffer === '0') {
        return;
    }
    const intBuffer = parseInt(screenBuffer);
    if (activeTotal === 0) {
        activeTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousTotal = symbol;
    screenBuffer = '0';
}

function flushOperation(intBuffer) {
    if (previousTotal === '+') {
        activeTotal += intBuffer;
    } else if (previousTotal === '−') {
        activeTotal -= intBuffer;
    } else if (previousTotal === '×') {
        activeTotal *= intBuffer;
    } else if (previousTotal === '÷') {
        activeTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if (screenBuffer === '0') {
        screenBuffer = numberString;
    } else {
        screenBuffer += numberString;
    }
}
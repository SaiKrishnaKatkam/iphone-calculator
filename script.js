function clearDisplay() {
    document.getElementById('display').value = '0';
}

function appendDigit(digit) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = digit;
    } else {
        display.value += digit;
    }
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    if (!isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch {
        display.value = 'Error';
    }
}

function toggleSign() {
    let display = document.getElementById('display');
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

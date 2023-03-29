const previousOperation = document.querySelector('.previous-operation');
const currentOperation = document.querySelector('.current-operation');
const input = document.querySelectorAll('.btn-input');
const operand = document.querySelectorAll('.btn-operand');
const equal = document.querySelector('.btn-equal');
const backspace = document.querySelector('.btn-backspace');
const clear = document.querySelector('.btn-clear');

//data storage
let operation = undefined;
let prevValue = undefined;
let currValue = undefined;

//functions
const inputNum = (value) => {if(value === '.' && currentOperation.innerText.includes('.')) return
    else { currentOperation.innerText += value }
};

const clearDisplay = () => {
    currentOperation.innerText = "" 
    previousOperation.innerText = "" 
    operation = undefined
    prevValue = undefined
    currValue = undefined }

const backspc = () => {currentOperation.innerText = currentOperation.innerText.slice(0, -1)};

const compute = () =>  (
    currValue = Number(currentOperation.innerText),
    "+" === operation ? currentOperation.innerText = prevValue + currValue :
    "-" === operation ? currentOperation.innerText = prevValue - currValue :
    "x" === operation ? currentOperation.innerText = prevValue * currValue :
    "÷" === operation ? currentOperation.innerText = prevValue / currValue : previousOperation.innerText,
    previousOperation.innerText = "",
    operation = undefined,
    prevValue = undefined
    );
    
const setOperand = (value) => { 
    operation = value
    if(currentOperation.innerText === '') return
        if(prevValue !== undefined || '') {compute()}
        operation = value
        prevValue = Number(currentOperation.innerText),
        previousOperation.innerText = `${currentOperation.innerText} ${operation}`, 
        currentOperation.innerText = ''
};
//event listeners
input.forEach(button => 
    button.addEventListener("click", () => inputNum(button.innerText)));

operand.forEach(button => 
    button.addEventListener("click", () => (setOperand(button.innerText))));

clear.addEventListener("click", () => clearDisplay());

backspace.addEventListener("click", () => backspc());

equal.addEventListener('click', () => compute())

console.log(prevValue)


//changing operand after misclick and some people spam click operand to make sure
//dont store values outside function?
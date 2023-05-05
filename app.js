let number1=null;
let number2 = null;
let op = '';

const add = (a,b)=>(a+b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);

const operate=(op,number1,number2)=>{
    if (op == '+') return add(number1, number2);
    else if (op == '-') return subtract(number1, number2);
    else if (op == '*') return multiply(number1, number2);
    else if (op=='/'){ 
        if (number2 == '0') displayDiv.textContent ='you stepped into hell';
        else return divide(number1, number2);
    }
};

const buttons=document.getElementsByTagName('button');
const displayDiv = document.querySelector('.display');

for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        const buttonValue=buttons[i].textContent;
        if (/[0-9.]/.test(buttonValue))  {
            if (buttonValue === '.' && displayDiv.textContent.includes('.')) {
                // Do nothing if there is already a dot in the display value
            }
            else {
                if (number1 !== null && op) {
                    number2 = number2 === null ? buttonValue : number2 + buttonValue;
                    displayDiv.textContent = number2;
                } else {
                    displayDiv.textContent += buttonValue;
                }
            }
        }
        else if (buttonValue=='Clear'){
            displayDiv.textContent = '';
            number1=null;
            number2 = null;
            op='';
        }
        else if (['+', '-', '*', '/'].includes(buttonValue)) {
            if (number1 === null) {
                number1 = displayDiv.textContent;
                op=buttonValue;
            }
            else if (number1 !== null && number2 === null) {
                op = buttonValue;
            }
            else if (number1 !== null && number2 !== null) {
                const result = operate(op, parseFloat(number1), parseFloat(number2));
                displayDiv.textContent = Number.isInteger(result) ? result : result.toFixed(2);
                number1=displayDiv.textContent;
                number2=null;
                op=buttonValue;
            }
            op = buttonValue;
        }
        else if (buttonValue == '='){
            if ((number1 !== null && number2 !== null) || op){
                const result = operate(op, parseFloat(number1), parseFloat(number2));
                displayDiv.textContent = Number.isInteger(result) ? result : result.toFixed(2);
                number1 = displayDiv.textContent;
                number2 = null;
                op='';
            }
            else displayDiv.textContent='ERROR';
            }
        });
}

"use strict";

let roundChecked = document.querySelector("#doround");
let decimal = document.querySelector("#decimals");
let operator = document.querySelector("#operator")
let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let resultsList = document.querySelector('#results');
let clearBtn = document.querySelector('#clear');

document.querySelector('#calculate').addEventListener('click', calculate);

window.onload = init;
function init() {
    roundChecked.checked = false;
    decimal.value = 0;
    firstNumber.value = '';
    secondNumber.value = '';
    operator.value = 'add';
}

function calculate() {
    let result;

    if (firstNumber.value === '') {
        firstNumber.value = 0;
    } else if (secondNumber.value === '') {
        secondNumber.value = 0;
    }

    // Calculate
    if (operator.value === 'add') {
        result = Number(firstNumber.value) + Number(secondNumber.value);
    } else if (operator.value === 'sub') {
        result = firstNumber.value - secondNumber.value;
    } else if (operator.value === 'mul') {
        result = firstNumber.value * secondNumber.value;
    } else {
        result = firstNumber.value / secondNumber.value;
    };

    // Create HTML element
    let li = document.createElement('li');


    // Create text node and append
    if (roundChecked.checked == true) {
        li.appendChild(document.createTextNode(result.toFixed(decimal.value)));
        // Replace result with firstNumber
        firstNumber.value = result.toFixed(decimal.value);
    } else {
        li.appendChild(document.createTextNode(result));
        // Replace result with firstNumber
        firstNumber.value = result;
    }


    // Append li as child to ul
    resultsList.insertBefore(li, resultsList.firstChild);
}

clearBtn.addEventListener('click', function () {
    resultsList.innerHTML = '';
});
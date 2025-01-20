"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    if (num % 2 === 0) {
        evenOrOddElement.textContent = "Even";
    } else {
        evenOrOddElement.textContent = "Odd";
    }
}

function sumTheNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    sumTheNumbersElement.textContent = "The sum of the numbers is: " + sum;
    console.log("The sum of the numbers is:", sum);
}

function createNumberArray() {
    const numberArray = [];
    for (let i = 0; i < 10; i++) {
        numberArray.push(i);
    }
    createNumberArrayElement.textContent = "The number array: " + numberArray.join(', ');
    console.log("The number array:", numberArray);
}

function render() {
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});

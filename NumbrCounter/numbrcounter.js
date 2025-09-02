"use strict";

// Create variable that holds current number
let currentNumber = 0;
let savedNumbers = [];

let incrementButton = document.querySelector(".increment");
let decrementButton = document.querySelector(".decrement");
let saveButton = document.querySelector(".save");
let resetButton = document.querySelector(".reset");
let currentNumberHTML = document.querySelector(".currentNumber");
let savedNumbersHTML = document.querySelector(".savedNumbers");

//increment function
let increment = function () {
  currentNumber++;
  console.log(currentNumber);
  update();
};

//decrement function
let decrement = function () {
  currentNumber--;
  console.log(currentNumber);
  update();
};

//reset function
let reset = function () {
  currentNumber = 0;
  savedNumbers.length = 0; //this clears the array
  console.log(currentNumber);
  update();
  savedNumbersHTML.textContent = `Number List :`;
};

//save function
let save = function () {
  savedNumbers.push(currentNumber);
  currentNumber = 0;
  console.log(savedNumbers);
  update();

  savedNumbers.forEach((number) => {
    savedNumbersHTML.textContent += ` ${number},`;
  });
  savedNumbers.length = 0;
};

//updates visual logic to reflect currentNumber
let update = function () {
  currentNumberHTML.textContent = String(currentNumber);
};

//---------------------Event Listeners

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
saveButton.addEventListener("click", save);
resetButton.addEventListener("click", reset);

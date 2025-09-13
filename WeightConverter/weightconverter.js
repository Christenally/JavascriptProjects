`use strict`;

// lets get the form

const form = document.getElementById("converter-form");

const display = document.querySelector(".display-conversion");
console.log(display.textContent);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newForm = new FormData(form);
  const dropDownValue = newForm.get("choose-weight");
  console.log(dropDownValue);
  const userInput = newForm.get("lbs-input");
  console.log(typeof userInput);

  switch (dropDownValue) {
    case "kilograms":
      display.textContent = (Number(userInput) / 2.205).toFixed(2);
      break;
    case "grams":
      display.textContent = (Number(userInput) * 453.6).toFixed(2);
      break;
    case "ounces":
      display.textContent = (Number(userInput) * 16).toFixed(2);
      break;
    case "stones":
      display.textContent = (Number(userInput) / 14).toFixed(2);
    default:
      break;
  }
});

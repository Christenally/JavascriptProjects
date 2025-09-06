"use strict";

//function to delete button-is there a way to detect the parent element of the button???

//might be better to add event listeners to every button with the class delete to-do ; or maybe on the instantiation of the todo the function is added? - First lets add the todo

// <---------CONTAINER SETUP--------------------->
//creates todo container
const todoContainer = document.createElement("div");
todoContainer.classList.add("todo-container");

//todo info
let todoInfo = document.createElement("p");
todoInfo.classList.add("todo-info");
todoInfo.textContent = "This is default content";

//todo button
let todoButton = document.createElement("button");
todoButton.addEventListener("click", function () {
  todoButton.parentElement.remove();
});

//append the children (button and <p>) to the todo container
todoContainer.appendChild(todoInfo);
todoContainer.appendChild(todoButton);

//<----------------Function to create div and add functionality------------>

//this works
//now I need to add functionality to the button
let createTODO = function () {
  document.querySelector(".container").appendChild(todoContainer);
};

createTODO();

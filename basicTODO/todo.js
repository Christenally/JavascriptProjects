"use strict";

//function to delete button-is there a way to detect the parent element of the button???

//might be better to add event listeners to every button with the class delete to-do ; or maybe on the instantiation of the todo the function is added? - First lets add the todo

const parentContainer = document.querySelector(".container");

//<----------TODO HEADER------------------------------->
const addTask = document.querySelector(".todo-add-task");
let todoInput = document.getElementById("todo-input");
console.log(todoInput.value);

addTask.addEventListener("click", createTODO);

// <---------TASK CONTAINER SETUP--------------------->
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
function createTODO() {
  // This clones the todoContainer and adds functionailty to the button

  //next step is to take the text from the input field and place it into the text content field
  //cloned todo
  let newToDO = todoContainer.cloneNode(true);
  newToDO.firstChild.textContent = todoInput.value;
  //Button functionality
  newToDO.lastChild.addEventListener("click", function () {
    newToDO.remove();
  });
  document.querySelector(".container").appendChild(newToDO);
  console.log("created");
}

"use strict";
//gather all sections in one array
let sections = document.querySelectorAll(".section-item");

console.log(sections);

//lets add on click functions to all sections

sections.forEach((currentSection) => {
  currentSection.addEventListener("click", () => {
    currentSection.classList.remove("inactive"); //
    currentSection.classList.add("active");

    sections.forEach((section) => {
      if (currentSection != section) {
        section.classList.add("inactive");
        section.classList.remove("active");
      }
    });
  });
});

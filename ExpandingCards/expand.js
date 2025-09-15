`use strict`;

let cards = document.querySelectorAll(".panel");

console.log(cards);

cards.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active");

    cards.forEach((element) => {
      if (element != panel) {
        element.classList.remove("active");
      }
    });
  });
});

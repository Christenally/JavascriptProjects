"use strict";

const container = document.querySelector(".container");
const emoji = document.querySelector(".emoji");
const random = document.querySelector(".random");

const emojis = [
  "😊",
  "😒",
  "😂",
  "🤣",
  "😁",
  "😘",
  "😍",
  "😉",
  "😎",
  "😢",
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😙",
];

let randomEmoji = function () {
  emoji.textContent = emojis[Math.trunc(Math.random() * emojis.length - 1)];
};

random.addEventListener("click", randomEmoji);

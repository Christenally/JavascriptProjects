//this accesses all elements with the class ".drum-pad"
const buttons = document.querySelectorAll(".drum-pad");

//need to add event listeners to all the buttons
//all I needed was a damn for loop. I made that way more complicated then it needed to be

// let clap = new Audio("clap.wav");
// let boom = new Audio("boom.wav");
// let hihat = new Audio("hihat.wav");
// let kick = new Audio("kick.wav");
// let openhat = new Audio("openhat.wav");
// let ride = new Audio

// const audioFiles = [
//   "boom.wav",
//   "clap.wav",
//   "hihat.wav",
//   "kick.wav",
//   "openhat.wav",
//   "ride.wav",
//   "snare.wav",
//   "tink.wav",
//   "tom.wav",
// ];

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    console.log(buttons[index].querySelector("span").textContent);

    //this works!
    let audio = new Audio(
      `${buttons[index].querySelector("span").textContent.toLowerCase()}.wav`
    );

    audio.play();

    //let audio = new Audio();
    // buttons[index].querySelector("h3").textContent === "A" || "S"
    //   ? console.log("hi")
    //   : console.log("wtf");
  });
}

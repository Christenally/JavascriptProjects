DrumKit Lessons Learned

1.  Stop making shit so complicated.

2.  [const buttons = document.querySelectorAll(".drum-pad");]
    This piece placed all the buttons with this class in an array.

3.  [const audioFiles = [
    "boom.wav",
    "clap.wav",
    "hihat.wav",
    "kick.wav",
    "openhat.wav",
    "ride.wav",
    "snare.wav",
    "tink.wav",
    "tom.wav",
    ];] - realized I didn't need this - I had the idea of using an array to select the correct audio files. This could have been used to verify, but my approach was simpler

4.  [for (let index = 0; index < buttons.length; index++) {
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
    }]

    This shit was crazy af to understand at first.

    1. we're iterating over the elements in the buttons array
    2. Then we are adding an eventListener to every button so that 'clicking' it will..
    3. Run the arrow function > create new Audio object > The Audio constructor takes a string that is the relative path of the audio file. But first its important to wrap everything in `` and place an expression in ${}.
    4. I select the the button at the current index and queryselect the 'span' that's holding the name of the sound.
    5. I then make it lower case and add `.wav.` to the end
    6. Then we play it

This could have been way easier than I made it. I did not use keydown listener but that's something that has to be added to the entire document - on that later...

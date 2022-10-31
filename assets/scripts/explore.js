// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // get voice list
  populateVoiceList(); 

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Button 
  let speak_button = document.querySelector('button');

  // TODO 
  speak_button.addEventListener('click', function(){
    // Change image
    let smile_img = document.querySelector('#explore > img');
    smile_img.src = 'assets/images/smiling-open.png';
    speak();
  });


}

// TODO
let voices = [];

function populateVoiceList() {

  // get voice list
  voices = speechSynthesis.getVoices();

  // TODO
  let select_voice = document.querySelector('#voice-select');

  // Create voice options for select section
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    select_voice.appendChild(option);
  }

}


function speak() {
  // TODO
  let select_voice = document.querySelector('#voice-select');

  // Change image
  let smile_img = document.querySelector('#explore > img');

  // Obtain info from textarea
  let text_input = document.querySelector('#text-to-speak');

  if (text_input.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(text_input.value);

    utterThis.onend = function (event) {
      smile_img.src = 'assets/images/smiling.png';
    };

    const selectedOption =
          select_voice.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    speechSynthesis.speak(utterThis);
  }
}
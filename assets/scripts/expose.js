// expose.js

/**
 * Notes: Input events:
 * Change: When user modifies the elements value
 * Load : When an image loaded.
 * Click : After mousedown, mouseup. Pressed and released!
 */

window.addEventListener('DOMContentLoaded', init);

// JSConfetti 
let jsConfetti = new JSConfetti();

function init() {
  //Grabbing all nessisary element from HTML and assigning them to a variable.
  let intrument_selector = document.querySelector("#horn-select");
  let volume_selector = document.querySelector("#volume");
  let button_selector = document.querySelector("button");
  let volume = document.querySelector(".hidden");

  //Image grabber
  let image_setter = document.querySelector('#volume-controls img');1
  let instru_img_setter = document.querySelector("#expose img");

  //Set volume at 0.5 DEFAULT!
  volume.volume = 0.5;
  //Event listeners:
  volume_selector.addEventListener("input",function(){
    let volume_value = volume_selector.value;
    volume.volume = volume_value/100;

    if (volume_value <= 0){
      //display mute
      image_setter.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume_value < 33){
      //display level 1
      image_setter.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume_value < 67){
      //display level 2
      image_setter.src = "assets/icons/volume-level-2.svg";
    }
    else{
      //display level 3
      image_setter.src = "assets/icons/volume-level-3.svg";
    }
  });

  intrument_selector.addEventListener("change", function(){
    let value = intrument_selector.value;

    if(value == "air-horn"){
      instru_img_setter.src = "assets/images/air-horn.svg";
      volume.src = "assets/audio/air-horn.mp3";
    }
    else if(value == "car-horn"){
      instru_img_setter.src = "assets/images/car-horn.svg";
      volume.src = "assets/audio/car-horn.mp3";
    }
    else if(value == "party-horn"){
      instru_img_setter.src = "assets/images/party-horn.svg";
      volume.src = "assets/audio/party-horn.mp3";
    }
    else{
      instru_img_setter.src = "assets/images/no-image.png";
      volume.src = "";
    }
  });

  button_selector.addEventListener("click", function(){
    volume.play();
    let value = intrument_selector.value;
    if(value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });


}

// function volume_update(){
  
// }


function update_value(){
  //NOTHING FOR NOW.
}
// expose.js

/**
 * Notes: Input events:
 * Change: When user modifies the elements value
 * Load : When an image loaded.
 * Click : After mousedown, mouseup. Pressed and released!
 */

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Grabbing all nessisary element from HTML and assigning them to a variable.
  let intrument_selector = document.querySelector("#horn-select");
  let volume_selector = document.querySelector("#volume");
  let button_selector = document.querySelector("button")

  //Event listeners:
  volume_selector.addEventListener("change",function(e){})

  console.log(slider_selector);
}


function update_value(){
  //NOTHING FOR NOW.
}
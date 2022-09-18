// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

const text = document.querySelector("#text");
const stat = document.querySelector("#stat");
var statWordVal;
var statCharVal;
text.addEventListener("input", function(){
  statWordVal = text.value.split(' ').length;
  statCharVal = text.value.length;
  stat.innerHTML = `You've written ${statWordVal} words and ${statCharVal} characters.`
});
$('section').click(function() {
  let colorDiv = $("<div class='color'></div>");
  $('section').append(colorDiv);
})

 let sounds = [
   new Audio("sounds/Cellar-door.mp3"),
   new Audio("sounds/Chord.mp3"),
   new Audio("sounds/Female-Scream.mp3"),
   new Audio("sounds/Laugh.mp3"),
   new Audio("sounds/Female.mp3"),
   new Audio("sounds/Loud_Bang.mp3"),
   new Audio("sounds/Psycho.mp3"),
   new Audio("sounds/Scream.mp3"),
   new Audio("sounds/tolling-bell.mp3")
 ];

 let play = document.getElementById('playSound');
 play.addEventListener("click", function() {
 
   let random = sounds[Math.floor(Math.random() * sounds.length)];
   random.play();
 
 })
 
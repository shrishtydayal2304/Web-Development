var numberOfDrumSets = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumSets; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){

  makeSound(event.key);
  
  buttonAnimation(key.event);
});

function makeSound(key) {
  switch (key) {
    case "w":
        var tom1 = new Audio("Sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("Sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("Sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("Sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var snare = new Audio("Sounds/snare.mp3");
        snare.play();
      break;

    case "k":
        var crash = new Audio("Sounds/crash.mp3");
        crash.play();
      break;

    case "l":
        var kick = new Audio("Sounds/kick-bass.mp3");
        kick.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

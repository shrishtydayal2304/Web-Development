var numberOfDrumSets = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumSets; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio("Sounds/tom-1.mp3");
    audio.play();
  });

}

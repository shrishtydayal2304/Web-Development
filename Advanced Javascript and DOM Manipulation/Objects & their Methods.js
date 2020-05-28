// classical approach

var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function() {
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

// Call method
bellBoy1.moveSuitcase();

// Using Constructor function

function BellBoy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function(){
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

// calling method
BellBoy.moveSuitcase();


// .............................................................................................................................

// for that audio file which we've used in drum kit. That is similar to this thing.

// initialising the audio object
var tom1 = new Audio("sounds/tom-1.mp3);  
tom1.play();               // calling the method

// this audio constructor function might look like :

function Audio (fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function() {
    //Tap into the audio hardware
    //Check the file at fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  }
}

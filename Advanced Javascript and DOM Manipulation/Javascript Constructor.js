// Creating a constructor function 
//in which, unlike camel notations, first letter of the name of function is always capital.

function BellBoy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

// Initialising the object

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

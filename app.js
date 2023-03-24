var Bicycle = function () {
  this.manufacturers = ["Cube", "Giant", "KTM", "Pegasus"];
  this.cyclist = 5;
};
Bicycle.prototype.checkBike = function () {
  //returns a string
  //returns a random manufacturer from the manufacturers array
  let manufacturer = this.manufacturers[Math.floor(Math.random() * this.manufacturers.length)];

  console.log("I would like a bicycle from:", manufacturer);
  return manufacturer;
};

Bicycle.prototype.cyclistSold = function () {
  if (this.cyclist >= 1) {
    console.log("Customer gets a new bicycle.");
    this.cyclist--;
  } else if (this.cyclist == 0) {
    console.log("All cyclist have been satisfied. Done for the day!");
  } else {
    let cusLeft = this.cyclist;
    console.log("Customer gets a new bicycle.", cusLeft, "more to go!");
    this.cyclist -= cusLeft;
  }

  return this.cyclist;
};

Bicycle.prototype.whatAmI = function () {
  console.log("Am I a Boolean?");
  return true;
};

let bicycle = new Bicycle();

module.exports = bicycle;
const assert = require("chai").assert;
const Bicycle = require("../app");

describe("Bicycle test", function () {
  let bicycle = Bicycle;

  it("check the manufacturer has valid name.", function () {
    assert.isString(bicycle.checkBike(), "string");
  });

  it("check for a manufacturer in manufacturers.", function () {
    let manufacturer = bicycle.checkBike();
    assert.oneOf(manufacturer, bicycle.manufacturers);
  });

  it('make sure the seller can sell more bikes', function(){

        for(var i=0; i<6; i++){
            bicycle.cyclistSold();
            assert.isAtLeast(bicycle.cyclist, 0); 
        }
    
    });

  it("checks if its true", function () {
    assert.equal(true, bicycle.whatAmI());
  });

});
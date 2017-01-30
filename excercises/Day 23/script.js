var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
    
  this.start = function(ta,speed,object) {
    console.log("I turn the key on in the " + this.carType + " car");
    ta(speed);
  };
  
    this.drive = function(speed , object) {
    console.log("I am driving at "+speed+ " kph" + " in the " + object.carColor + " " + object.carType + " car");
  }
}

var oldCar = new Car("Fiat", 500, "white");

oldCar.start(oldCar.drive,1000 , oldCar);
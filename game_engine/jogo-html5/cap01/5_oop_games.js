// Create class
function Car(color, maxSpeed) {
	this.color = color;
	this.maxSpeed = maxSpeed;
	this.speed = 0;
}
Car.prototype = {
	accelerate: function() {
		this.speed += 10;
	}
}

// Create instance
var myCar = new Car('red', 220);
myCar.accelerate();

console.log(myCar.speed);

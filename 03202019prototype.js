let Car = function(color) {
	this.color = color;
	Car.prototype.getColor = function() {
		return this.color;
	}
}

let redCar = new Car('red');
//overriding the Object toString function
Object.prototype.toString = function() {
	return `color: ${this.color}`;
}

console.log(redCar);

let blah = {
	color: 'blah'
};

console.log(blah.toString());
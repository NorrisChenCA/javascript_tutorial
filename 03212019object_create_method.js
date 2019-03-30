const Car = function(color) {
	this.color = color;
}

const car1 = new Car('red');
const car2 = Object.create(Car.prototype);

console.dir(car1);
console.dir(car2);

Car.prototype = {
	getColor() {
		return this.color;
	}
}

const ToyCar = function() {
	
}

ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();

console.dir(legoCar);  //the legoCar prototype has getColor function
console.dir(legoCar instanceof ToyCar); //true
console.dir(legoCar instanceof Car);  //true
console.dir(legoCar instanceof Object);  //true

console.dir(ToyCar.prototype.isPrototypeOf(legoCar));  //true
console.dir(Car.prototype.isPrototypeOf(legoCar));  //true
console.dir(Object.prototype.isPrototypeOf(legoCar));  //true
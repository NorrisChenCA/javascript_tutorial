let Mannal = function(legs) {
	this.legs = legs;
};

Mannal.prototype = {
	walk() {
		return 'walking!';
	},
	sleep() {
		return 'sleeping';
	}
};

let Bat = function(legs, isVegetarian) {
	Mannal.call(this, legs);
	this.isVegetarian = isVegetarian;
};

Bat.prototype = Object.create(Mannal.prototype); //this will rip off all the Bat prototype functions including constructor;
Bat.prototype.constructor = Bat;	//this will get Bat constructor again;

Bat.prototype.fly = function() {	//define Bat own prototype function;
	return 'flying!';
}

console.dir(Bat);

let fruitBat = new Bat(4, true);
console.dir(fruitBat.walk());
console.dir(fruitBat.fly());